import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import 'antd/dist/reset.css';
import Books from "./pages/Books";
import BookView from "./pages/BookView";
const router = createBrowserRouter([{
  path:"/",
 element:<Layout/>,
 children: [{path: "/", element:<Main/>}, 
            {path:"about",element:<About/>},
          {path:"books",element:<Books/>},
        {path:"books/show",element:<BookView/>}],
}]);
//  <RouterProvider router={router}/>
function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App