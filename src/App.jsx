import { Route } from "react-router"
import { Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import { Home } from "./components/Home"

const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>

  )
}
export {App}