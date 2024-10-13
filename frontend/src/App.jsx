import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Home from "./pages/Home/home.jsx";
import BookDetails from "./pages/BookDetailsPage/bookDetails.jsx";

function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path="/" element={
            <Home/>
          }/>

          <Route path="/bookdetails" element={
            <BookDetails/>
          }/>


          <Route path="/login" element={
            <Login/>
          }/>
          <Route path={"/signup"} element={
            <Signup/>
          }/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
