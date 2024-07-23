import Navbar from "./Clone-components/Navbar";
import Signinpage from "./Clone-components/SignInPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./Clone-components/SignUpPage";
import Wrong from "./Clone-components/wrong";
import MainCom from "./Clone-components/MainCom";
import  ProtectedRoute from './Clone-components/ProtectedRoute'

function Apps() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Signin" element={<Signinpage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Wrong />}></Route>
          <Route path="/MainCom" element={<ProtectedRoute><MainCom /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Apps;
