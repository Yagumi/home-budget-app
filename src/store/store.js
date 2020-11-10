import React from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = React.createContext();

export const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    categories: [{id: 0, title: 'Food'}],
    addNewCategory: category => (store.categories.push(category))
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};