import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    {
      update: (v) => setValue(v),
      reset: () => setValue(initialValue)
    }
  ];
}