'use client';

// Imports
// ------------
import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react';
import { Network, NodeConfig } from 'lumina-node';
import Textarea from './Textarea';
import Button from '@parts/Button';
import { LuminaContext } from  '@parts/Lumina';
import Status from './Status';
import Terminal from './Terminal';
import Icon from '@icon';
import Typewriter from 'typewriter-effect';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '@parts/Contexts';
// import { isChrome, isFirefox, isChromium, isMobileSafari, isSafari, isOpera } from 'react-device-detect';
import { usePlausible } from 'next-plausible';

// Styles
// ------------
import { Blanket, Jacket, ImageContainer, Container, Title, NetworkList, NetworkItem } from './styles';

// Component
// ------------
const Form = () => {
    // NOTE • Contexts
    const { begin, setBegin } = useContext(GlobalContext);
    const node = useContext(LuminaContext);

    // NOTE • Track Plausible
    const plausible = usePlausible();

    // NOTE • States
    const [display, setDisplay] = useState(true);
    const [_events, setEvents] = useState();
    const [network, setNetwork] = useState();
    const [bootnodes, setBootnodes] = useState([]);

    const [combinedConfig, setCombinedConfig] = useState({
        bootnodes: bootnodes,
    });

    const [go, setGo] = useState(false);
    const [modalOpen, setModalOpen] = useState({
        modal1: false,
        modal2: false,
    });
    const [nodeInitiate, setNodeInitiate] = useState(false);
    const [statusInitiated, setStatusInitiated] = useState(false);
    const [nodeStatus, setNodeStatus] = useState('Downloading');
    const [eventData, setEventData] = useState([]);
    const [visualData, setVisualData] = useState([]);

    const [stats, setStats] = useState({
        peerId: '',
        storedRanges: [],
        approxSyncingWindowSize: (30 * 24 * 60 * 60)/12,
        syncedPercentage: 0,
        connectedPeers: [],
        networkHeadHeight: '',
        networkHeadHash: '',
        networkHeadDataSquare: '',
    });

    // NOTE • Refs are needed to access state from within events.onmessage callbacks
    const statsRef = useRef(stats);

    useEffect(() => {
        statsRef.current = stats;
    }, [stats]);

    // NOTE • Browser detection
    // useLayoutEffect(() => {
    //     if(isChrome || isFirefox || isChromium || isMobileSafari || isSafari || isOpera) {
    //         setDisplay(true)
    //     } else {
    //         setDisplay(false)
    //     }
    // }, []);

    const initConfig = () => {
        const tempConfig = NodeConfig.default(Network.Mainnet)
        setNetwork(tempConfig.network);
        setBootnodes(tempConfig.bootnodes);
        setCombinedConfig(tempConfig);
    };

    // NOTE • Generate a unique ID for the node
    const nodeUid = uuidv4();

    // NOTE • Load the config and initialize the WASM module when the page loads
    useEffect(() => {
        if (node) {
            initConfig();
        }
    }, [node]);

    // NOTE • Periodically poll node for data that doesn't come from events
    useEffect(() => {
        if(node && statusInitiated) {
            const timer = setInterval(async () => {
                const peers = await node.connectedPeers();

                setStats((stats) => {
                    return {
                        ...stats,
                        connectedPeers: peers,
                    }
                });

                setNodeStatus('Data availability sampling in progress');
            }, 2000);

            return () => clearInterval(timer);
        }
    }, [node]);

    // NOTE • Periodically track user activity
    useEffect(() => {
        if (node) {
            const timer = setInterval(async () => {
                plausible('Live starts:', {
                    props: {
                        method: 'HTTP',
                        position: nodeUid,
                    }
                });
            }, 10000);

            return () => clearInterval(timer);
        }
    }, [node]);

    const handleNetwork = (e) => {
        e.preventDefault();

        const networkId = parseInt(e.target.value);
        const newConfig = NodeConfig.default(networkId);

        setNetwork(networkId);
        setBootnodes(newConfig.bootnodes);
        setCombinedConfig(newConfig)
    }

    const handleBnodes = (e) => {
        e.preventDefault();

        const value = e.target.value.split('\n');

        setBootnodes(value);
    }

    const handleBegin = () => {
        setBegin(true);
        setModalOpen(prev => ({
            ...prev,
            modal1: true,
        }));
    }

    const handleInput = (e) => {
        setStats({
            ...stats,
            [e.target.name]: e.target.value
        });
    }

    // NOTE • Start the node
    const startNode = async (nodeRef) => {
        if (!bootnodes || bootnodes.length === 0) {
            alert('Genesis hash and at least one bootnode are required.');
            return;
        }
        try {
            const logEvent = (event) => {
                // Skip noisy events
                if (event.data.get("event").type == "share_sampling_result") {
                    return;
                }

                const time = new Date(event.data.get("time"));

                const log = time.getHours().toString().padStart(2, '0')
                    + ":" + time.getMinutes().toString().padStart(2, '0')
                    + ":" + time.getSeconds().toString().padStart(2, '0')
                    + "." + time.getMilliseconds().toString().padStart(3, '0')
                    + ": " + event.data.get("message");

                setEventData((prev) => {
                    return [...prev, log];
                });
            }

            // called when DASer starts dasing another block
            const logVisual = (event) => {
                const heightToSample = event.height;
                const currentHead = statsRef.current.networkHeadHeight;
                // DASer samples new blocks and old blocks, only update visualizer for new ones
                if (currentHead && heightToSample >= currentHead) {
                    setVisualData(event);
                    return;
                }
            }

            // called when we have new head header
            const onNewHead = async (height) => {
                const header = await nodeRef.getHeaderByHeight(BigInt(height));

                setStats((stats) => {
                    return {
                        ...stats,
                        networkHeadHeight: height,
                        networkHeadHash: header.commit.block_id.hash,
                        networkHeadDataSquare: `${header.dah.row_roots.length}x${header.dah.column_roots.length} shares`,
                    }
                });
            }

            // called when we synchronized any headers
            const onAddedHeaders = async () => {
                const info = await nodeRef.syncerInfo();
                const storedRanges = normalizeStoredRanges(info.subjective_head, info.stored_headers);
                const syncedPercentage = syncingPercentage(storedRanges);

                setStats((stats) => {
                    return {
                        ...stats,
                        storedRanges: storedRanges,
                        approxSyncingWindowSize: approxHeadersToSync,
                        syncedPercentage: syncedPercentage,
                    }
                });
            };
            
            // called on all events coming from node
            const onNodeEvent = async (event) => {
                if (!event.data) {
                    return;
                }

                logEvent(event);

                const event_data = event.data.get("event");
                switch (event_data.type) {
                    // Daser started sampling block
                    case "sampling_started":
                        logVisual(event_data);
                        break;
                    
                    // node finished initialization and got initial trusted head
                    case "fetching_head_header_finished":
                    // new header added from header-sub
                    case "added_header_from_header_sub":
                        // headers from header-sub must be new head
                        await onNewHead(event_data.height);
                        await onAddedHeaders();
                        break;

                    // syncer finished fetching next batch of headers
                    case "fetching_headers_finished":
                        // last header in batch *may* be a new head
                        const to_height = event_data.to_height;
                        if (statsRef.current.networkHeadHeight && to_height > statsRef.current.networkHeadHeight) {
                            await onNewHead(to_height);
                        };
                        await onAddedHeaders();
                        break;
                };
            }

            let newConfig = combinedConfig;
            setCombinedConfig({ bootnodes: bootnodes });

            const events = await node.eventsChannel();
            events.onmessage = onNodeEvent;
            setEvents(events);

            await nodeRef.start(newConfig);

            const lpid = await nodeRef.localPeerId();
            
            setStats(prev => ({
                ...prev,
                peerId: lpid,
            }));
        } catch (error) {
            console.error("Error initializing Node:", error);
            console.dir(error);
        }
    };

    // NOTE • Node initiation (the terminal panel)
    const initiateNode = (e) => {
        e.preventDefault();

        setGo(true);
        setModalOpen(prev => ({
            ...prev,
            modal2: true,
        }));
        setNodeInitiate(true);
        setNodeStatus('Node Initializing');
    };

    useEffect(() => {
        if(nodeInitiate) {
            startNode(node);
            
            const timer = setTimeout(() => {
                setNodeInitiate(false);
                setStatusInitiated(true);
            }, 10500);
    
            return () => clearTimeout(timer);
        }
    }, [nodeInitiate, node]);


    // Predicted amount of headers in syncing window (last 30 days / ~12s block time)
    const approxHeadersToSync = (30 * 24 * 60 * 60)/12;

    // Takes network head and ranges of headers node synchronized and calculates ranges
    // position inside the syncing window
    const normalizeStoredRanges = (networkHead, storedRanges) => {
        const syncingWindowTail = Number(networkHead) - approxHeadersToSync;
        // Normalize stored ranges wrt their position in syncing window
        const normalizedRanges = storedRanges.map((range) => {
            const adjustedStart = Math.max(Number(range.start), syncingWindowTail);
            const adjustedEnd = Math.max(Number(range.end), syncingWindowTail);
            return { 
                start: adjustedStart,
                end: adjustedEnd
            };
        });

        return normalizedRanges;
    };

    // calculate what percentage of syncing window the stored ranges occupy
    const syncingPercentage = (normalizedRanges) => {
        return (normalizedRanges.reduce((acc, range) => acc + (range.end - range.start), 0) * 100) / approxHeadersToSync;
    };


    // NOTE • Reload the page
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <Blanket>
            <ImageContainer $active={begin}>
                <img src="/lumina.svg" alt="Lumina Logo" />
            </ImageContainer>

            <Jacket data-lenis-prevent style={{ zIndex: 1}}>
                <Container $begin>
                    {
                        display ? (
                            <>
                                <Title>
                                    <Typewriter
                                        options={{
                                            delay: 25,
                                            deleteSpeed: 25,
                                            changeDelay: 25,
                                        }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Start your Celestia light node')
                                            .changeDelay(25)
                                            .changeDeleteSpeed(25)
                                            .start();
                                        }}
                                    />
                                </Title>
                                <Button label="Start Sampling" onClick={handleBegin} />
                            </>
                        ) : (
                            <>
                                <Title>
                                    <Typewriter
                                        options={{
                                            delay: 25,
                                            deleteSpeed: 25,
                                            changeDelay: 25,
                                        }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Please use one of the supported browsers: Windows/MacOS/Linux/Android: Chrome, Firefox, Brave, Opera. iOS: Not yet supported')
                                            .changeDelay(25)
                                            .changeDeleteSpeed(25)
                                            .start();
                                        }}
                                    />
                                </Title>
                            </>
                        )
                    }

                </Container>
            </Jacket>

            <Jacket data-lenis-prevent $modal={2} style={{ zIndex: 2, pointerEvents: modalOpen.modal1 ? 'all' : 'none'}}>
                <Container $network $activated={begin}>
                    <Title>Let's go!</Title>

                    <h3>Network</h3>
                    <NetworkList>
                        <NetworkItem $selected={network === 0}>
                            <label>
                                <input type="radio" name="network" value="0" onChange={(e) => handleNetwork(e)} />
                                <Icon type="check" /><span>Mainnet</span>
                            </label>
                        </NetworkItem>
                        <NetworkItem $selected={network === 1}>
                            <label>
                                <input type="radio" name="network" value="1" onChange={(e) => handleNetwork(e)} />
                                <Icon type="check" /><span>Arabica</span>
                            </label>
                        </NetworkItem>
                        <NetworkItem $selected={network === 2}>
                            <label>
                                <input type="radio" name="network" value="2" onChange={(e) => handleNetwork(e)} />
                                <Icon type="check" /><span>Mocha</span>
                            </label>
                        </NetworkItem>
                    </NetworkList>

                    <h3>Bootnodes <small>(Each address on a new line)</small></h3>
                    <Textarea value={bootnodes} onChange={(e) => handleBnodes(e)} placeholder="Bootnodes..." />

                    <div>
                        <Button label="Start" onClick={initiateNode} />
                    </div>
                </Container>
            </Jacket>

            <Jacket
                data-lenis-prevent
                $modal={3}
                $statusInitiated={statusInitiated}
                style={{
                    zIndex: 3,
                    pointerEvents: modalOpen.modal2 ? 'all' : 'none'
                    }}
                >

                    <Container $go $activated={go}>
                        <Terminal isActive={nodeInitiate} isStopped={statusInitiated} />
                        
                        <Status
                            isActive={statusInitiated}
                            status={nodeStatus}
                            stats={stats}
                            handleInput={handleInput}
                            handleReload={handleReload}
                            eventData={eventData}
                            visualData={visualData}
                        />
                    </Container>
                
            </Jacket>
        </Blanket>
    );
};

export default Form;
