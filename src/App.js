import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header_all/header";
import {routes} from "./Routes";
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          return (
            <Route path={route.path} exact={true} element={<Page/>}/>
          )
        })}
        
      </Routes>
    </Router>
  );
}

export default App;
