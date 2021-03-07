import React, { createContext } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  <TimeContext.Provider value={"context"}>{children}</TimeContext.Provider>;
};
