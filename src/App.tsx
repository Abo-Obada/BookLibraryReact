import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import 'antd/dist/reset.css';
const router = createBrowserRouter([{
  path:"/",
 element:<Layout/>,
 children: [{path: "/", element:<Main/>}, 
            {path:"about",element:<About/>}],
}]);
//  <RouterProvider router={router}/>
function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App