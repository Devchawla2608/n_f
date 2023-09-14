import React from "react";
import {useState , useEffect} from "react";
import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SignIn from "../components/SignIn/SignIn.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";
import Explore from "../pages/Explore.jsx";
import Profile from "../pages/Profile.jsx";
import Post from "../pages/Post.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import authenticate from "../Authenticate";
import SignOut from "../components/SignOut/SignOut";

const Routers = () => {

  const [auth , setAuth] = useState(false);
  useEffect(() => {
      let auth = authenticate();
      if(auth){
          setAuth(true)
      }
  }, [])

  return (
    <Routes>
        <Route path="/" element={auth === false ? <SignIn/> : <Home/>} />
        <Route path="/test-user" element={auth === false ? <SignIn/> : <Home/>} />
        <Route path="/sign-up" element={ auth === false ? <SignUp/> : <Home/>} />
         <Route path="/home" element={       <PrivateRoute> <Home />  </PrivateRoute> } />
         <Route path="/Signout" element={<PrivateRoute> <SignOut />  </PrivateRoute> } />
        <Route path="/market" element={<PrivateRoute> <Market />  </PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute> <Create />  </PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute> <Contact />  </PrivateRoute>} />
        <Route path="/wallet" element={<PrivateRoute> <Wallet />  </PrivateRoute>} />
        <Route path="/market/:id" element={<PrivateRoute> <NftDetails />  </PrivateRoute>} />
        <Route path="/Explore" element={<PrivateRoute> <Explore />  </PrivateRoute>} />
        <Route path="/Profile" element={<PrivateRoute> <Profile />  </PrivateRoute>} />
        <Route path="/post" element={<PrivateRoute> <Post />  </PrivateRoute>} />
    </Routes>
  );
};

export default Routers;
