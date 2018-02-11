import React from 'react';
import { ImageBackground, Title } from '@shoutem/ui';
import Raw from '../services/Raw';

const CounterValue = (props) => (
        <ImageBackground style={styles.containerStyle} source={Raw.counterValueBackground}>
            <Title style={styles.textStyle}>{props.value}</Title>
        </ImageBackground>
    );

const styles = {
    containerStyle: {
        height: 55,
        width: 55,
        marginRight: 5
    },
    textStyle: {
        color: '#EF8354',
        fontSize: 21,
        fontWeight: 'bold',
    }
};

export default CounterValue;
