import React from 'react'
import { BASE_API_URL } from "../common/constants";
import axios from "axios";
const API_URL = BASE_API_URL ;


export const getAllItems = ()  => {
   
   return axios.get("http://localhost:8080/getItems");
  }

export const addItem=(item)=>{
    console.log("in itemservice")
    return axios.post("http://localhost:8080/addItem",item)
}  

export const updateStock=(itemId,stock)=>{
    console.log("updating Stock")
    return axios.put(`http://localhost:8080/updateStock/${itemId}/${stock}`);
}



// export default new ItemService();