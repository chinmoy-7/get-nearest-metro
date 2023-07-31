import express from "express";
import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
const URL = "https://ipgeolocation.abstractapi.com/v1/?api_key=" + process.env.API_KEY;

export const getMetro = async (
  req: express.Request,
  reply: express.Response
) => {
  try {
    const { lat, long } = req.body;
    const ipAddress:any =req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const result=await sendAPIRequest(JSON.stringify(ipAddress))

    if(result.region_iso_code=="DL"){
    const options = {
      method: "GET",
      url: "https://nearest-delhi-metro-station.p.rapidapi.com/nearestmetro",
      params: {
        lat: lat,
        long: long,
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPID_KEY,
        "X-RapidAPI-Host": process.env.X_RAPID_HOST,
      },
    };
    const res = await axios.request(options);
    console.log(res.data.data);
    return reply.send({
      status: 200,
      result: res.data.data,
    });
  }else{
    return reply.send({
      status:200,
      message:"You are outside of delhi"
    })
  }
  } catch (error: any) {
    console.log("<=================>")
    throw new Error(error);
  }
};

const sendAPIRequest = async (ipAddress:string) => {
  const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
  return apiResponse.data;
};
