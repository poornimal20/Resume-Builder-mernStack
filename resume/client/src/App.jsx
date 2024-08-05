
import { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
 import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
   import Login from './Login'
   import Home from './Home'
import Editor from './Editor'
import Body from './Body'
import InputControl from './InputControl'
// import Resume from '/Resume'
// import InputControl from './InputControl'
function App() {
return (
<BrowserRouter>
<Routes>
<Route path='/register' element={<Signup />}></Route> 
<Route path='/login' element={<Login />}></Route>
<Route path = '/home' element={<Home />}></Route>
<Route path = '/editor' element={<Editor />}></Route>
<Route path = '/InputControl' element={<InputControl />}></Route>
{/* <Route path = '/Resume' element={<Resume />}></Route> */}
<Route path = '/body' element={<Body />}></Route>
 </Routes>
</BrowserRouter>
)
}
export default App