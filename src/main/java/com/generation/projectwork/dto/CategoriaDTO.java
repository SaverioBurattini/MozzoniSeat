package com.generation.projectwork.dto;

import com.generation.projectwork.entity.CategorieEntity;

public class CategoriaDTO {

	private int id;
	private String nome;
	
	/**
	 * @param id
	 * @param nome
	 */
	public CategoriaDTO(int id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}
	
	public CategorieEntity toCategoria() {
		return new CategorieEntity(
				this.getNome());
	}
	
	public CategorieEntity toPersonaDto(CategoriaDTO categoria) {
		CategorieEntity dto = new CategorieEntity();
				dto.setId(categoria.getId());
				dto.setNome(categoria.getNome());
		return dto;
		
	}
	
	public CategoriaDTO() {}
	
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
	
	
}
