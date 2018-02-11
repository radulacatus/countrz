import React, { Component } from 'react';

import { Screen, Divider, ListView } from '@shoutem/ui';
import UITheme from '@shoutem/ui/theme';
import { StyleProvider } from '@shoutem/theme';

import Header from './src/components/Header';
import CounterDetail from './src/components/CounterDetail';
import CounterService from './src/services/CounterService';


export default class App extends Component<{}> {
  state = { counters: [] };

  componentWillMount() {
      new CounterService().getCounters().then(result => {
          this.setState({ counters: result });
      });
  }

  render() {
    return (
      <StyleProvider style={theme}>
        <Screen>
          <Header text='Countrz' />
          <ListView 
                    data={this.state.counters}
                    renderRow={c => <CounterDetail key={c.id} counter={c} />}
                    vertical
                    pageSize={10}
                    // snapToInterval={Dimensions.get('window').width}
                    snapToAlignment="center"
                    // decelerationRate={2} 
          />          
          <Divider styleName="line" />
        </Screen>
      </StyleProvider>
    );
  }
}

const theme = Object.assign(UITheme(), {
  'shoutem.ui.Title': {
    color: '#2D3142'
  },
  'shoutem.ui.Subtitle': {
    color: '#2D3142'
  },
  'shoutem.ui.Caption': {
    color: '#2D3142'
  }
});
