import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layouts/Layout";
import Main from "./pages/home/Main";
import About from "./pages/home/About";
import 'antd/dist/reset.css';
import Books from "./pages/home/Books";
import BookView from "./pages/home/BookView";
import { LayoutAdmin } from "./components/layouts/admin/Layout";
import { Home } from "./pages/home/admin/Home";

const router = createBrowserRouter([
  {
  path:"/",
 element:<Layout/>,
 errorElement:<div
className="flex border-3 border-dotted   items-center flex-col justify-center text-9xl mt-10" >
  <div className="mt-2 mb-10">
    <h1>404</h1>
<div>هذا العنصر غير متوفر</div>
  </div>
 </div>,
 children: 
 [
  {path: "/", element:<Main/>}, 
            {path:"about",element:<About/>},
            {path:"books",element:<Books/>},
            {path:"books/show/:uuid",element:<BookView/>}],
},          
//Admin Section

{path:"admin", element:<LayoutAdmin/>,children:[
            {path:"",element:<Home/>}
]
}]);
//  <RouterProvider router={router}/>
function App() {
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App