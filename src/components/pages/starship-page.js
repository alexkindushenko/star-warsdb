import React from 'react';
import { StarshipList } from '../sw-components';
import ErrorBoundery from '../error-boundery';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {
  return (
    <ErrorBoundery>
      <StarshipList
        onItemSelected={itemId => {
          history.push(`${itemId}`);
        }}
        renderItem={item => <span>{item.name}</span>}
      />
    </ErrorBoundery>
  );
};

export default withRouter(StarshipPage);
