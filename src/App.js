// Importing the useEffect hook from the react library to make HTTP requests to the backend when the component mounts for the first time and display the response in the console of the browser for testing purposes.


import React from "react";

// Importing the Layout component
import Layout from "./components/Layout/Layout";

// Importing the axios library for making HTTP requests


// Importing the App.css
import "./app.css";

function App() {
// Layout component is rendered
return <Layout />;
// return <h1>Hello</h1>
}

export default App;