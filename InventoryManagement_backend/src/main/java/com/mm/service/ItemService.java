package com.mm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mm.entities.Item;
import com.mm.repository.ItemRepository;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemrepo;

	public List<Item> getAllItems() {
		// TODO Auto-generated method stub
		return itemrepo.findAll();
	}

	public Item addItem(Item item) {
		// TODO Auto-generated method stub
		return itemrepo.save(item);
	}


	public void updateItem(Item item, Integer itemId) {
		
		item.setItemId(itemId);
		itemrepo.save(item);
	}

	public void deleteItem(Integer itemId) {
		// TODO Auto-generated method stub
		itemrepo.deleteById(itemId);		
	}

	public void updateStock(Integer itemId, Integer stock) {
		// TODO Auto-generated method stub
		itemrepo.updateStock(itemId, stock);
		
	}
	
	
	
}
