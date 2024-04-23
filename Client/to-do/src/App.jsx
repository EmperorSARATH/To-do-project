import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Editproject from "./components/Editproject";
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/Editproject",
    element:<Editproject/>
  }
])

function App(){
  return (
    <div className="App">
        <RouterProvider router={router} />
  </div> 
  )
 
}

export default App;
