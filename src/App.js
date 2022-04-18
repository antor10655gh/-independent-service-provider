import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MainServices from "./Pages/MainServices/MainServices";
import CheckOut from "./Pages/CheckOut/CheckOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Blog1 from "./Pages/Blog/Blog1/Blog1";
import Blog2 from "./Pages/Blog/Blog2/Blog2";
import Blog3 from "./Pages/Blog/Blog3/Blog3";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<MainServices></MainServices>}></Route>
        <Route
          path="/checkout/:checkoutName"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog1" element={<Blog1></Blog1>}></Route>
        <Route path="/blog2" element={<Blog2></Blog2>}></Route>
        <Route path="/blog3" element={<Blog3></Blog3>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
