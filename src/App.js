import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Dashboard from './Components/Dashboard';
import Buttons from './Components/Buttons';
import Cards from "./Components/Cards";
import Table from './Components/Table';
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import NotFoundPage from "./Components/404page";
import BlankPage from "./Components/BlankPage";
import Charts from "./Components/Charts";
import UtilitiesColors from "./Components/utilities-color";
import UtilitiesBorders from "./Components/utilities-borders";
import UtilitiesOther from "./Components/utilities-other";
import UtilitiesAnimation from "./Components/utilities-animation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/buttons" element={<Buttons/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="/blankpage" element={<BlankPage/>}/>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/utilities-colors" element={<UtilitiesColors/>}/>
          <Route path="/utilities-borders" element={<UtilitiesBorders/>}/>
          <Route path="/utilities-animation" element={<UtilitiesAnimation/>}/>
          <Route path="/utilities-other" element={<UtilitiesOther/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
