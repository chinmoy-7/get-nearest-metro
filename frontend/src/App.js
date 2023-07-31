
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import { MyConetxtProvider } from './context/ContextProvider';
import Metro from './components/Metro';
import Protected from './Protected/Protected';
function App() {
  return(
  <>
    <BrowserRouter>
    <MyConetxtProvider>
    <Routes>        
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/metro" element={
        <Protected >
            <Metro/>
        </Protected>
        }/>
    </Routes>
    </MyConetxtProvider>
    </BrowserRouter>
  </>
  )
}

export default App;
