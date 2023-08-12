// -------------- React , useEffect , useState ----------------- //
import React, { useEffect  , useState}  from "react";

// -------------- Routes ----------------- //
import Routers from "../../routes/Routers";

// -------------- Header ----------------- //
import Header from "../Header/Header";

// -------------- Footer ----------------- //
import Footer from "../Footer/Footer";

// -------------- Authenticate ----------------- //
import authenticate from "../../Authenticate.js"



const Layout = () => {

    // -------------- Auth ----------------- //

    const [auth , setAuth] = useState(false);
    useEffect(() => {
        let auth = authenticate();
        if(auth){
            setAuth(true)
        }
    }, [])

    return (
    <div>
        {/* Checking That we are authenticated and if then rendering header */}
        {auth === true &&<Header /> }
        <div>
            <Routers />
        </div>
        {/* Checking That we are authenticated and if then rendering Footer */}
        {auth === true && <Footer /> }
        </div>
  );
};

export default Layout;
