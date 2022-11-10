import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CommonPage from './Components/CommonPage';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Service from './Pages/Service/Service';
import Home from './Pages/Home';
import AddService from './Pages/AddService';
import Review from './Pages/Review';
import ReviewForm from './Pages/ReviewForm';
import Blog from './Pages/Blog';
import Nopage from './Pages/Nopage';


const router = createBrowserRouter([
  {
    path: '/', element: <CommonPage />, children: [
      { path: '/', element: <Home /> },
      { path: '/service', element: <Service /> },
      { path: '/addservice', element: <AddService /> },
      { path: '/review', element: <Review /> },
      { path: '/reviewform', element: <ReviewForm /> },
      { path: '/login', element: <LogIn /> },
      { path: '/register', element: <Register /> },
      { path: '/blog', element: <Blog /> },

      { path: '*', element: <Nopage /> },

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
