import React from 'react';

import ErrorBoundery from '../error-boundery';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = ({ name, item, image, children }) => {
  return (
    <div className="item-details card">
      <ErrorBoundery>
        <React.Fragment>
          <img className="item-image" src={image} alt="photo_iteme" />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </React.Fragment>
      </ErrorBoundery>
    </div>
  );
};

export default ItemDetails;
