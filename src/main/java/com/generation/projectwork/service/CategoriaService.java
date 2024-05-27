package com.generation.projectwork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.projectwork.entity.CategorieEntity;
import com.generation.projectwork.repository.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	CategoriaRepository categoriaRepository;
	
	public List<CategorieEntity> getAllCategories() {
		List<CategorieEntity> getAllCategorie = categoriaRepository.findAll();
		return getAllCategorie;
	}
	
	public Optional<CategorieEntity> getCategoriesById (int id) {
		Optional<CategorieEntity> getCategoriePerId = categoriaRepository.findById(id);
		return getCategoriePerId;
	}
	
	public CategorieEntity addOrUpdateCategories(CategorieEntity utente){
		CategorieEntity addOrUpdateCategorie = categoriaRepository.save(utente);
		return addOrUpdateCategorie;
	}
	
		public void deleteCategory(CategorieEntity categoria) {
		 categoriaRepository.delete(categoria);
		}
		
	public CategorieEntity findByName(String nome) {
		return categoriaRepository.findByName(nome);
	}
	
	public boolean findByNameExists(String nome) {
		//riutilizzo del codice scritto sopra
		CategorieEntity categoria = this.findByName(nome);
		 if(categoria==null) {
			 return false;
		 }else {
			return true;
		}
	}
	
	
	
}
