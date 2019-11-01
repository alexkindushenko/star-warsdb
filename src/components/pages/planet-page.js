import React, { Component } from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';
import ErrorBoundery from '../error-boundery';

class PlanetPage extends Component {
  state = {
    selectedItem: 0,
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <ErrorBoundery>
        <Row
          left={
            <PlanetList
              onItemSelected={this.onItemSelected}
              renderItem={item => <span>{item.name}</span>}
            />
          }
          right={<PlanetDetails itemId={this.state.selectedItem} />}
        />
      </ErrorBoundery>
    );
  }
}

export default PlanetPage;
