import React from 'react';
import Spiner from '../spinner';

const withDetails = (View, getData, getImage) => {
  return class extends React.Component {
    state = {
      item: {},
      loading: true,
      image: null,
      error: false,
    };
    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
        this.setState({ loading: true });
      }
    }
    updateItem = () => {
      const { itemId } = this.props;
      if (itemId) {
        getData(itemId)
          .then(item => {
            this.setState({
              item,
              loading: false,
              image: getImage(item),
            });
          })
          .catch(() => {
            this.setState({
              error: true,
              loading: false,
            });
          });
      }
    };
    render() {
      const {
        item,
        item: { name },
        loading,
        image,
      } = this.state;

      if (!this.props.itemId) {
        return <p>Select item</p>;
      } else if (loading) {
        return <Spiner />;
      }
      return <View {...this.props} image={image} name={name} item={item} />;
    }
  };
};

export default withDetails;
