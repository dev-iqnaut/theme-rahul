import { createContext, useContext } from 'react';

// Create the context
export const DataContext = createContext();

// Custom hook for easy access to context
export const useDataContext = () => useContext(DataContext);
