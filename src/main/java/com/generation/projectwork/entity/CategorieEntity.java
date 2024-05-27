package com.generation.projectwork.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categorie")
public class CategorieEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String nome;

	@JsonIgnore
	@OneToMany(mappedBy = "categoria")
	private List<EventiEntity> eventi;
	
	/**
	 * @param id
	 * @param nome
	 */
	public CategorieEntity(int id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}
	
	public CategorieEntity() {}

	public CategorieEntity(String nome) {
		this.nome = nome;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<EventiEntity> getEventi() {
		return eventi;
	}

	public void setEventi(List<EventiEntity> eventi) {
		this.eventi = eventi;
	}
	
	
	
}
