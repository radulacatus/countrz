import { AsyncStorage } from 'react-native';

class CounterService {
    constructor() {
        console.log('componentWillMount ctor');
        AsyncStorage.setItem('counter:list', JSON.stringify([{ a: 'test' }]));
    }

    getCounters() {
        console.log('componentWillMount get');
        return AsyncStorage.getItem('counter:list');
    }

    // addCounter(name, description) {
    //     const itemList = [{ name, description }];
    //     let updateListPromise = AsyncStorage.getItem('counter:list').then(res => {
    //         if (!res) {
    //             return AsyncStorage.setItem('counter:list', itemList);
    //         } 
                
    //         res.concat(itemList);
    //         return AsyncStorage.setItem('counter:list', res);
    //     });

    //     let updateItemPromise = AsyncStorage.setItem('counter:item').then(res => {
    //         if (!res) {
    //             return AsyncStorage.setItem('counter:list', itemList);
    //         } 
                
    //         res.concat(itemList);
    //         return AsyncStorage.setItem('counter:list', res);
    //     });
    //}
}

export default CounterService;
