import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CounterService from '../services/CounterService';

class CounterList extends Component {
    state = { counters: [] };

    componentWillMount() {
            console.log('componentWillMount');
        const test = new CounterService().getCounters();
        console.log(test);
        test.then(result => {
            console.log('promise result');
            console.log(result);
            this.setState({ counters: result });
        });
    }
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Mama</Text>
            </View>
        );
    }
}

export default CounterList;
