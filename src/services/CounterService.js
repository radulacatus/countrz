import { AsyncStorage } from 'react-native';

class CounterService {
    constructor() {
        AsyncStorage.setItem('counter:list', JSON.stringify([
            { 
                id: 'aaa',
                title: 'test counter 12',
                desc: 'hardcoded counter for testing',
                value: 5 
            },
            { 
                id: 'aab',
                title: 'test counter 2',
                desc: 'other hardcoded counter for testing',
                value: 0 
            }
        ]));
    }

    getCounters() {
        return AsyncStorage.getItem('counter:list').then(j => JSON.parse(j));
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
