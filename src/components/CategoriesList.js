import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../store/store';

export function CategoriesList() {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.categories.map(category => (
        <li key={category.id}>{category.title}</li>
      ))}
    </ul>
  ))
}