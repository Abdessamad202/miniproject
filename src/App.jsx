import { Route } from "react-router"
import { Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import { Home } from "./components/Home"
import { useState } from "react"

const App = ()=> {
  const [state, setstate] = useState();
  const handleclick = () => {
    const token = window.sessionStorage.getItem("token")
    setstate(token)
  }
  return (
    <>
      <button type="button" onClick={handleclick}>token</button>
      {state}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>

    </>

  )
}
export {App}