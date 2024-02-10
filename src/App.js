import Create from "./Component/Create";
import Home from "./Component/Home"

import Read from "./Component/Read"
import Update from "./Component/Update"

import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/read/:id" element={<Read/>}/>
            <Route path="/update/:id" element={<Update/>}/>
          </Routes>
          </BrowserRouter>
    </div>
    
    );
}
 
export default App;