import React, { useState, createContext } from 'react';

export const ThanksContext = createContext();

export const ThanksProvider = (props) => {
  const [thanksBox, setThanksBoxState] = useState(false);

  return (
    <ThanksContext.Provider value={[thanksBox, setThanksBoxState]}>
      {props.children}
    </ThanksContext.Provider>
  );
};
