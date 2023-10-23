import React, { useState } from 'react';

interface IntentContextProps {
  intent: string;
  setIntent: (intent: string) => void;
}

export const IntentContext = React.createContext<IntentContextProps>({
  intent: '',
  setIntent: () => {},
});

export const IntentContextProvider = (props: any) => {
  const [currentIntent, setCurrentIntent] = useState('exploratory');

  return (
    <IntentContext.Provider
      value={{
        intent: currentIntent,
        setIntent: setCurrentIntent,
      }}
    >
      {props.children}
    </IntentContext.Provider>
  );
};