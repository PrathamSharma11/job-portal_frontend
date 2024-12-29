import  Login  from './components/auth/Login'
import  Signup  from './components/auth/Signup'
import Home  from './components/Home'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/Signup',
    element:<Signup/>
  },
])





function App() {
  

  return (
    <>
     <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
