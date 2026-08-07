import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div data-theme="portfolio" className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
