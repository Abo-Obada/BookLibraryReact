import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import 'antd/dist/reset.css';
import Books from "./pages/Books";
import BookView from "./pages/BookView";
import { Button, Result } from "antd";
const router = createBrowserRouter([{
  path:"/",
 element:<Layout/>,
 errorElement:<div
className="flex border-3 border-dotted   items-center flex-col justify-center text-9xl mt-10" >
  <div className="mt-2 mb-10">
    <h1>404</h1>
<div>هذا العنصر غير متوفر</div>
  </div>
 </div>,
 children: [{path: "/", element:<Main/>}, 
            {path:"about",element:<About/>},
          {path:"books",element:<Books/>},
        {path:"books/show/:uuid",element:<BookView/>}],
}]);
//  <RouterProvider router={router}/>
function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App