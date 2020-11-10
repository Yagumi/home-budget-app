import React from 'react'
import { AddNewCategory } from '../components/AddNewCategory'
import { CategoriesList } from '../components/CategoriesList'

export const Dashboard = () => {
  return (
    <div>
      <h1>Home</h1>
      <AddNewCategory />
      <CategoriesList />
    </div>
  )
}