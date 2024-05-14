// Imports
// ------------
import React from 'react';
import Input from '../Input';
import Button from '@parts/Button';
import Link from '@parts/Link';
import Icon from '@icon';
import Visualisation from '@parts/Visualisation';
import { Grid } from '@waffl';

// Styles
// ------------
import { Col, Header, Title, Progress, StatsItem, FieldGroup, ButtonJacket, LinkGroup, } from './styles';

// Component
// ------------
const StatusBoard = ({
    stats,
    handleInput,
    handleReload,
}) => {
    return (
        <>
            <Grid $noPadding>
                <Col $small="1/3" $medium="1/7" $large="1/7">
                    <Grid $noPadding>
                        <Col $small="1/3" $medium="1/7" $large="1/13">
                            <Header>
                                <Title $dark>Status</Title>
                                <Progress>
                                    <Icon type="logoGrad" />
                                    <span>in progress&hellip;</span>
                                </Progress>
                            </Header>
                        </Col>
                    </Grid>

                    <Grid $noPadding>
                        <Col $small="1/3" $medium="1/7" $large="1/13">
                            <StatsItem>
                                <label>
                                    <span>PeerId:</span>
                                    <Input name="peerId" value={stats.peerId} onChange={(e) => handleInput(e)} placeholder="..." light />
                                </label>
                            </StatsItem>
                            <StatsItem>
                                <label>
                                    <span>Synchronizing headers:</span>
                                    <Input name="syncInfo" value={stats.syncInfo} onChange={(e) => handleInput(e)} placeholder="..." light />
                                </label>
                            </StatsItem>
                        </Col>
                    </Grid>

                    <Grid $noPadding>
                        <Col $small="1/3" $medium="1/7" $large="1/13">
                            <FieldGroup>
                                <StatsItem>
                                    <label>
                                        <span>Block Height:</span>
                                        <Input name="networkHeadHeight" value={stats.networkHeadHeight} onChange={(e) => handleInput(e)} placeholder="..." light hasCopy={{ label: 'View in Celenium', link: `https://celenium.io/block/` + stats.networkHeadHeight, }} />
                                    </label>
                                </StatsItem>
                                <StatsItem>
                                    <label>
                                        <span>Data square size:</span>
                                        <Input name="networkHeadDataSquare" value={stats.networkHeadDataSquare} onChange={(e) => handleInput(e)} placeholder="..." light />
                                    </label>
                                </StatsItem>
                            </FieldGroup>
                            <StatsItem>
                                <label>
                                    <span>Hash:</span>
                                    <Input name="networkHeadHash" value={stats.networkHeadHash} onChange={(e) => handleInput(e)} placeholder="..." light />
                                </label>
                            </StatsItem>
                        </Col>
                    </Grid>
                </Col>
                <Col $small="1/3" $medium="1/7" $large="7/13">
                    <Visualisation data={stats} />
                </Col>
            </Grid>
            <Grid $noPadding>
                <Col $small="1/3" $medium="1/7" $large="1/13">
                    <ButtonJacket>
                        <Button icoL icon="back" label="Restart" onClick={handleReload} />
                        <LinkGroup>
                            <Link icon="mint" label="Mint NFT" link="http://www.google.com" disabled />
                            <Link icon="celestia" label="Learn more" link="https://celestia.org/run-a-light-node/" rel="noopener noreferrer" />
                        </LinkGroup>
                    </ButtonJacket>
                </Col>
            </Grid>
        </>
    );
}

export default StatusBoard;