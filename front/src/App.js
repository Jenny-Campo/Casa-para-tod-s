import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 softBlue: {
    main : '#C9E4EB'
 }
})

function App() {

  return (
   
    <div>
    <RouterProvider router={router}>
    
    </RouterProvider>
    </div>
    
    
  );
}
export default App; 

