import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [coord,setCoord] = useState({})
  const getLocation=async()=>{
   await navigator.geolocation.getCurrentPosition(async (loc)=>{
      await setCoord({lat:loc?.coords?.latitude,long:loc?.coords?.longitude})
      

    },()=>{
      console.log("failed")
    })
    
  }
  useEffect(()=>{
    getLocation()
    // console.log(coord,"<M=============cir")
  },[])

  return (
    <div className="App">
        
    </div>
  );
}

export default App;
