import React, { useState } from 'react'
import  { getAllItems, updateQuantity } from '../service/ItemService';
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { updateStock } from '../service/ItemService';



function ItemList() {

  const navigate=useNavigate();
  const [items , setItems] = useState([]);
  let count=0;

useEffect(() => {
    console.log("use effect inventory list");
    document.title="Inventory List";
    getAllItems().then((response) => {
      setItems(response.data);
      
    });
  }, []);


  const buy=(itemId,stock)=>{
   let add= stock+parseInt(prompt("Enter Quantity you want to add"));
   
   updateStock(itemId,add);
   window.location.reload();
   
  }

  const issue=(itemId,stock)=>{
    let rem=stock-parseInt(prompt("Enter Quantity you want to issue"));
    
     updateStock(itemId,rem);
     window.location.reload();
  }

  return (
    <div>
    <h2 className='text-center'>List of Items is as follows:</h2>
        

            <table class="table">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Item Id</th>
                <th scope="col">Name</th>
                <th scope="col">Stock</th>
                <th scope="col">Unit</th>
                <th scope="col">Price</th>
                <th scope="col">Currency</th>
                </tr>
            </thead>
            {items.map((item,id) =>(
             
            <tbody>
                
                <tr>
                <td className='col-1'>{++count}</td>
                <th className='col-1'>{item.itemId}</th>
                <td>{item.itemName}</td>
                <td>{item.stock}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.currency}</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td><Button onClick={() => buy(item.itemId,item.stock)}>Add/Buy Stock</Button></td>
                <td><Button className='btn-warning' onClick={() => issue(item.itemId, item.stock)}>Issue Materials</Button></td>
                </tr>
            </tbody>
            )
            )
            }
            </table>
    
    </div>
  )
}

export default ItemList