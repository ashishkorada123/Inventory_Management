package com.mm.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer itemId;
	
	private String itemName;
	
	private String unit;
	
	private Integer price;
	
	private String currency;
	
	private  Integer stock;
	

}
