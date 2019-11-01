import React from 'react';
import Row from '../row';
import { PeopleList, PersonDetails } from '../sw-components';
import ErrorBoundery from '../error-boundery';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <ErrorBoundery>
      <Row
        left={
          <PeopleList
            onItemSelected={id => history.push(id)}
            renderItem={item => <span>{item.name}</span>}
          />
        }
        right={<PersonDetails itemId={id} />}
      />
    </ErrorBoundery>
  );
};

export default withRouter(PeoplePage);
