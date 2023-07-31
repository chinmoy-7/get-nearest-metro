import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/ContextProvider";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";
export default function Metro() {
  const {notify,isLoading,setisLoading}=useContext(MyContext)
  const { handleLogout } = useContext(MyContext);
  const [coord, setCoord] = useState({ long: "", lat: "" });
  const [stations, setStation] = useState([]);
  const [fetchedStation, setFetchedStation] = useState(false);

  const getCoord = async () => {
    navigator.geolocation.getCurrentPosition(async (loc) => {
      await setCoord({ lat: loc.coords.latitude, long: loc.coords.longitude });
    });
  };
  useEffect(() => {
    getCoord();
  }, []);
  const getMetro = async () => {
    setisLoading(true)
    const result = await axios.post(
      "https://nearby-metro-service.onrender.com/get-station",
      coord
    );
    if(result.data.status==400){
      notify("faliure","You are not in Delhi")
      setisLoading(false)
      return
    }
    setStation(result.data.result);
    setisLoading(false)
    setFetchedStation(true);
    // console.log(result.data.result);
  };
  return (
    <>
    <ToastContainer/>
      <div className="w-screen h-screen bg-metro flex flex-col gap-10">
        <header className="h-1/5 w-full  flex flex-col justify-center items-center">
          <button
            className=" md:absolute md:right-1 md:top-100 h-12 sm:w-32 w-20 bg-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="h-1/2 w-4/6 bg-white mt-5 text-red-500 text-bold md:text-5xl rounded-lg"
            onClick={getMetro}
          >
            Find Your Nearest Metro
          </button>
        </header>
        <div className="md:h-4/5 w-full  flex md:flex-row flex-col md:justify-center md:items-start items-center gap-4 md:flex-wrap overflow-x-auto">
          {isLoading&&
            <InfinitySpin 
            width='200'
            color="white"
          />
          }
          {fetchedStation &&
            stations.map((station,id) => {
              if(id<4){
              return (
                <div className="md:w-1/4 md:h-2/6 w-4/5 h-40 bg-white/50 flex flex-col gap-2 items-center" key={id}>
                  <div className="h-1/3 flex justify-center items-center w-full">
                    <h1 className="md:text-4xl font-bold">Metro Station</h1>
                  </div>
                  <p className="text-xl font-semibold">Name:{station.station_name}</p>
                  <p>
                    <a
                      href={station.maps_direction}
                      target="__blank"
                      className="text-red-200 border-2 border-red-200 font-semibold text-2xl"
                    >
                      Get Location
                    </a>
                  </p>
                </div>
              );
              }
            })}
        </div>
      </div>
    </>
  );
}
