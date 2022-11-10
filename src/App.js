import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CommonPage from './Components/CommonPage';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Service from './Pages/Service/Service';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: '/', element: <CommonPage />, children: [
      { path: '/', element: <Home /> },
      { path: '/service', element: <Service /> },
      { path: '/login', element: <LogIn /> },
      { path: '/register', element: <Register /> },

      { path: '*', element: <div>404</div> },

    ]
  },

])
function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
