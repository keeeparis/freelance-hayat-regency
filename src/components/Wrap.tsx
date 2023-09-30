import React, { createContext, useState } from 'react';

export const MyContext = createContext<any>({ isBackCall: false, setIsBackCall: () => {} });

const Wrap = ({ children }: any) => {
  const [isBackCall, setIsBackCall] = useState(false);

  return <MyContext.Provider value={{ isBackCall, setIsBackCall }}>{children}</MyContext.Provider>;
};

export default Wrap;
