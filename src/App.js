import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div data-theme="night" className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
