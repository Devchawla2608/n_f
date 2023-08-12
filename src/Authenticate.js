import jwt from 'jsonwebtoken';
function authenticate(){
    const token = localStorage.getItem('token');
    if(token){
        const user = jwt.decode(token);
    if(!user){
        localStorage.removeItem('token');
        return false;
    }else{
        return true;
    }
    }else{
        return false;
    }
}

function SignedInUser(){
    const token = localStorage.getItem('token');
    if(token){
        const user = jwt.decode(token);
    if(!user){
        localStorage.removeItem('token');
        alert("Please Login First");
        return false;
    }else{
        return user;
    }
    }else{
        alert("Please Login First");
        return false;
    }
}


export default authenticate;
