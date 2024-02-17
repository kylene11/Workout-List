// rfc
// browser router surrounds everything that use the routing system
// all the different pages go into the div so u can style the pages
// element that uw to render for the route 
import {BrowserRouter, Routes,Route} from "react-router-dom"
// this is importing the pages and components 
import Home from "./pages/Home.js"
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
    <div className="pages">
      <Routes>
        
        <Route
        path="/"
        element={<Home/>}/>
      </Routes>
      
    </div>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
