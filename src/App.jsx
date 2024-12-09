import Login from "./component/Login.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute.jsx";
import Dashboard from "./component/Dashbord.jsx";
import AuthProvider from "./component/AuthProvider.jsx";

export default function App() {


  return (
      <div className="App">
          <Router>
              <AuthProvider>
                  <Routes>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/" element={<Login/>}/>
                      <Route element={<PrivateRoute/>}>
                          <Route path="/dashboard" element={<Dashboard/>}/>
                      </Route>
                  </Routes>
              </AuthProvider>
          </Router>
      </div>
  )
}

