import { useState } from 'react';

function useToggleContext(contextName, value1 = '', value2 = '') {
  const [context, setContext] = useState(localStorage.getItem(contextName) || value1);

  const toggleContext = () => {
    setContext((prevContext) => {
      const newContext = prevContext === value1 ? value2 : value1;
      try {
        localStorage.setItem(contextName, newContext);
      } catch (error) {
        console.error('Error while setting item in localStorage:', error);
      }

      return newContext;
    });
  };

  return [context, toggleContext];
}

export default useToggleContext;
