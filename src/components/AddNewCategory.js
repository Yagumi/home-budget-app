import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '../store/store'

import {useInput} from '../hooks/useInput';

export function AddNewCategory() {
  const store = useContext(StoreContext)
  const {value, onChange, reset} = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
    store.addNewCategory({
      id: uuidv4(),
      title: value,
    })
    reset('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <input type="submit" value="Add" />
      <input type="submit" value="Cancel" />
    </form>
  )
}