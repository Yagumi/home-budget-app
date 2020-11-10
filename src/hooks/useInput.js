import { useState } from 'react'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  return{
    value,
    onChange,
    reset,
  }
}