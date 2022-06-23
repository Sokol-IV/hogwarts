import './App.css';
import MainScreen from "./components/MainScreen/MainScreen";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import FormAddDevice from "./pages/FormAddDevice/FormAddDevice";
import Smth from "./pages/Smth/Smth";
import {routingConstants} from "./Constans/routingConstants";



function App() {
  return (
      <div className="container">

          {/*<BrowserRouter>*/}
              <Routes>
                  <Route >
                      <Route path={routingConstants.mainScreen} element={<MainScreen />} />
                      <Route path={routingConstants.smth} element={<Smth />} ></Route>
                      <Route path={routingConstants.formAddDevice} element={<FormAddDevice />} />
                  </Route>
              </Routes>
              {/*</BrowserRouter>*/}
      </div>
  )
}

export default App;
