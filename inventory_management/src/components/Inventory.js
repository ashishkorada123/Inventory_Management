import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link, Routes} from "react-router-dom";
import { useState, useEffect} from 'react';
import ItemList from '../list/ItemList';
import ItemForm from './ItemForm';

function Inventory() {

    const [concertList, setConcertList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [infoMessage, setInfoMessage] = useState("");

    useEffect(() => {
        console.log("use effect inventory page");
        document.title="Inventory";
        
      }, []);

  return (
    <div className="my-2">
        <h1 className="text-center border bg-dark text-warning">
    Inventory
  </h1>

  <div className="container mx-5 my-3">
    {errorMessage && (
      <div className="alert alert-danger">{errorMessage}</div>
    )}

    {infoMessage && (
      <div className="alert alert-success">{infoMessage}</div>
    )}
    <div class="row">
      <div class="col-2">
      


      <div class="list-group">
        <a href="#" class="  list-group-item list-group-item-action list-group-item-dark">Menu</a>

        
        <a href="/inventory/itemlist" class="list-group-item list-group-item-action list-group-item-warning">View All Items</a>
        <a href="/inventory/updateitem" class="list-group-item list-group-item-action list-group-item-warning">Update an Item</a>
        <a href="/inventory/additem" class="list-group-item list-group-item-action list-group-item-warning">Add an Item</a>
        <a href="inventory/deleteitem" class="list-group-item list-group-item-action list-group-item-warning">Delete an Item</a>
        
    </div>

        
      </div>
      <div class="col-10">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/itemlist" element={<ItemList />} />
          <Route path="/additem" element={<ItemForm />} />
        </Routes>
      </div>
    </div>
  </div>
</div>
  )
}

export default Inventory