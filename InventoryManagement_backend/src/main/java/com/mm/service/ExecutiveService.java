package com.mm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mm.entities.Executive;
import com.mm.repository.ExecutiveRepository;

@Service
public class ExecutiveService {
	
	@Autowired
	private ExecutiveRepository exerepo;

	public List<Executive> getAllExes() {
		// TODO Auto-generated method stub
		return exerepo.findAll();
	}

	public Executive addEx(Executive executive) {
		// TODO Auto-generated method stub
		return exerepo.save(executive);
	}

}
