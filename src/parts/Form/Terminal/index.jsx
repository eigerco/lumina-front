// Imports
// ------------
import React, { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Icon from '@icon';

// Spline
// ------------
const Spline = React.lazy(() => import('@splinetool/react-spline'));

// Styles
// ------------
import { Jacket, SplineJacket, Panel, List } from './styles';

// Component
// ------------
const Terminal = ({ isActive, isStopped }) => {
    // NOTE • States
    const [next, setNext] = useState({
        init: false,
        step1: false,
        step2: false,
        step3: false,
        step4: false,
    });

    useEffect(() => {
        if(isActive) {
            const init = setTimeout(() => {
                setNext(prev => ({
                    ...prev,
                    init: true,
                }))
            }, 500);
    
            return () => clearTimeout(init);
        }
    }, [isActive]);

    // Spline Stuff
    // ------
    const objectToAnimate = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectByName('Logo-Mark');

        objectToAnimate.current = obj;
    }

    useEffect(() => {
        // Animate the object when isActive
        if (objectToAnimate.current && isActive) {
            objectToAnimate.current.emitEvent('mouseHover');
        }

        // Stop the animation when isStopped. The event that is triggered will destroy the object from the canvas.
        if (objectToAnimate.current && isStopped) {
            objectToAnimate.current.emitEvent('stateChange');
        }
    }, [isActive, isStopped]);

    return (
        <Jacket $isStopped={isStopped}>
            <Panel>
                {next.init && (
                    <span>
                        <Typewriter
                            options={{
                                delay: 25,
                                deleteSpeed: 25,
                                changeDelay: 25,
                                cursor: '',
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Celestia light start...')
                                .changeDelay(25)
                                .changeDeleteSpeed(25)
                                .start()
                                .callFunction(() => {
                                    const step1 = setTimeout(() => {
                                        setNext(prev => ({
                                            ...prev,
                                            step1: true,
                                        }))
                                    }, 1000);
                                    
                                    return () => clearTimeout(step1);
                                });
                            }}
                        />
                    </span>
                )}
                <List>
                    {next.step1 && (
                        <li>
                            <Icon type="check" />
                            <span>
                                <Typewriter
                                    options={{
                                        delay: 25,
                                        deleteSpeed: 25,
                                        changeDelay: 25,
                                        cursor: '',
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Setting up browser for Web Node')
                                        .changeDelay(25)
                                        .changeDeleteSpeed(25)
                                        .start()
                                        .callFunction(() => {
                                            const step2 = setTimeout(() => {
                                                setNext(prev => ({
                                                    ...prev,
                                                    step2: true,
                                                }))
                                            }, 1000);
                                            
                                            return () => clearTimeout(step2);
                                        });
                                    }}
                                />
                            </span>
                        </li>
                    )}
                    {next.step2 && (
                        <li>
                            <Icon type="check" />
                            <span>
                                <Typewriter
                                    options={{
                                        delay: 25,
                                        deleteSpeed: 25,
                                        changeDelay: 25,
                                        cursor: '',
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Getting ready to verify blocks')
                                        .changeDelay(25)
                                        .changeDeleteSpeed(25)
                                        .start()
                                        .callFunction(() => {
                                            const step3 = setTimeout(() => {
                                                setNext(prev => ({
                                                    ...prev,
                                                    step3: true,
                                                }))
                                            }, 1000);
                                            
                                            return () => clearTimeout(step3);
                                        });
                                    }}
                                />
                            </span>
                        </li>
                    )}
                    {next.step3 && (
                        <li>
                            <Icon type="check" />
                            <span>
                                <Typewriter
                                    options={{
                                        delay: 25,
                                        deleteSpeed: 25,
                                        changeDelay: 25,
                                        cursor: '',
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Connecting directly to Celestia')
                                        .changeDelay(25)
                                        .changeDeleteSpeed(25)
                                        .start()
                                        .callFunction(() => {
                                            const step4 = setTimeout(() => {
                                                setNext(prev => ({
                                                    ...prev,
                                                    step4: true,
                                                }))
                                            }, 1000);
                                            
                                            return () => clearTimeout(step4);
                                        });
                                    }}
                                />
                            </span>
                        </li>
                    )}
                    {next.step4 && (
                        <li>
                            <Icon type="check" />
                            <span>
                                <Typewriter
                                    options={{
                                        delay: 25,
                                        deleteSpeed: 25,
                                        changeDelay: 25,
                                        cursor: '',
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Initialising...')
                                        .changeDelay(25)
                                        .changeDeleteSpeed(25)
                                        .start();
                                    }}
                                />
                            </span>
                        </li>
                    )}
                </List>
            </Panel>
            <SplineJacket>
                <Spline
                    // scene="https://prod.spline.design/vS5y3FkvJJqrWPgq/scene.splinecode" // Version 1 - animates automatically
                    scene="https://prod.spline.design/mfFDm5n4Y7fcpaad/scene.splinecode" // Version 2 with event based animation
                    onLoad={onLoad}
                />
            </SplineJacket>
        </Jacket>
    );
}

export default Terminal;