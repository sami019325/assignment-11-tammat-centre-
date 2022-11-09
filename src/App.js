import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CommonPage from './Components/CommonPage';
import LogIn from './Components/LogIn';
import Register from './Components/Register';


const router = createBrowserRouter([
  {
    path: '/', element: <CommonPage />, children: [
      { path: '/', element: <div>body</div> },
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
