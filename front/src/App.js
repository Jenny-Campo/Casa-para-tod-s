import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { createContext, useState } from 'react';

 export const Context = createContext(null)


function App() {
  const [search, setSearch] = useState([])

  return (
   
    <div>
    <Context.Provider value={{search, setSearch}}>
      <RouterProvider router={router}>
    
      </RouterProvider>
    </Context.Provider>
    </div>
    
    
  );
}
export default App; 

