import React, { Component } from 'react';
import Spiner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      itemList: null,
      error: false,
    };
    componentDidMount() {
      getData()
        .then(itemList => {
          this.setState({ itemList });
        })
        .catch(() => {
          this.setState({ error: true });
        });
    }

    render() {
      const { itemList, error } = this.state;

      if (!itemList) {
        return <Spiner />;
      } else if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={itemList} />;
    }
  };
};

export default withData;
