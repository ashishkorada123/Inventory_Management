package com.mm.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.mm.entities.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
	
	@Modifying
	@Transactional
	@Query("update Item i set i.stock =?2 where i.itemId=?1")
	void updateStock(Integer itemId, Integer stock);

}
