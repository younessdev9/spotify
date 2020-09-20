import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();
export const DataLayer = ({ initialeState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialeState)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDataLayerValue = () => useContext(DataLayerContext);
