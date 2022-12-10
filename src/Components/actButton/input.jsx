import { useState } from 'react'

const Input = (type) => {
    const [value, setValue] = useState()

    const onChange = (e) => {
        setValue(e.target.value)
    }

  return {
    value,
    onChange,
    type
  }
}

export default Input