import React from 'react';
import './item-list.css';

const ItemList = props => {
  const { data, onItemSelected, renderItem } = props;

  const list = data.map(item => {
    const { id } = item;
    const label = renderItem(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{list}</ul>;
};

export default ItemList;
