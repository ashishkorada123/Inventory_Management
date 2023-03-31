package com.mm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mm.entities.Executive;
import com.mm.service.ExecutiveService;

@RestController
@CrossOrigin(origins = "*")
public class ExecutiveController {
	
	@Autowired
	private ExecutiveService exeserv;
	
	@GetMapping("/getExs")
	public ResponseEntity<?> getAllExes(){
		try{return new ResponseEntity<>( exeserv.getAllExes(), HttpStatus.OK);}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/addEx")
	public ResponseEntity<?> addExes(@RequestBody Executive executive) {
		
		try{return  new ResponseEntity<>(exeserv.addEx(executive),HttpStatus.CREATED);}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

}
