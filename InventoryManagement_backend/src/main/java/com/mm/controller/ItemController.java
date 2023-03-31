package com.mm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.mm.entities.Item;
import com.mm.service.ItemService;

@RestController
@CrossOrigin(origins = "*")
public class ItemController {
	
	@Autowired
	private ItemService itemserv;
	
	
	@GetMapping("/getItems")
	public ResponseEntity<?> getAllItems(){
		
		return new ResponseEntity<>(itemserv.getAllItems(),HttpStatus.OK);
	}
	
	@PostMapping("/addItem")
	public ResponseEntity<?> addItem(@RequestBody Item item) {
		try {
		return new ResponseEntity<>(itemserv.addItem(item),HttpStatus.CREATED);
		}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@PutMapping("/updateItem/{itemId}")
	public ResponseEntity<?> updateItem(@RequestBody Item item, @PathVariable("itemId") Integer itemId) {
		try{
			this.itemserv.updateItem(item, itemId);
			return new ResponseEntity<>(item,HttpStatus.ACCEPTED);
			}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
	}
	
	@PutMapping("/updateStock/{itemId}/{stock}")
	public ResponseEntity<?> updateStock(@PathVariable("itemId") Integer itemId,@PathVariable("stock") Integer stock) {
		try{
			this.itemserv.updateStock(itemId, stock);
			
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
			}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
	}
	
	@DeleteMapping("/deleteItem/{itemId}")
	public ResponseEntity<?> deleteItem(@PathVariable ("itemId") Integer itemId){
		try {
			itemserv.deleteItem(itemId);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	

}
