import { Tile, Subtitle, Caption, Button, Icon, View, Divider, Row } from '@shoutem/ui';
import React from 'react';
import CounterValue from './CounterValue';

const CounterDetail = (props) => (
        <Tile>
            <Row styleName="horizontal v-center space-between">
                <CounterValue value={props.counter.value} />
                <View styleName="vertical stretch space-around">
                    <Subtitle>{props.counter.title}</Subtitle>
                    <Caption>{props.counter.desc}</Caption>
                </View>
                <Button styleName="right-icon"><Icon name="right-arrow" /></Button>
            </Row>
            <Divider styleName="line" />
            <View styleName="horizontal flexible">
                <Button styleName="full-width dark">
                    <Icon name="minus-button" />
                </Button>
                <Button styleName="full-width">
                    <Icon name="plus-button" />
                </Button>
            </View>
            <Divider styleName="section-header" />
        </Tile>
    );

export default CounterDetail;
