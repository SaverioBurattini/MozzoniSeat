package com.generation.projectwork.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.projectwork.dto.CategoriaDTO;
import com.generation.projectwork.entity.CategorieEntity;
import com.generation.projectwork.service.CategoriaService;
import com.generation.projectwork.service.EventiService;

import jakarta.transaction.Transactional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {
	
	@Autowired
	CategoriaService categoriaService;
	
	@Autowired
	EventiService eventiService;

	@GetMapping("/tutteCategorie")
	public List<CategorieEntity> getAllCategories(){
		List<CategorieEntity> getAllCategorie = categoriaService.getAllCategories();
		return getAllCategorie;
	}
	
	@GetMapping("{categoria_id}")
	public Optional<CategorieEntity> getByIdCategoria(@PathVariable("categoria_id")int id) {
		Optional<CategorieEntity> getByIdCategoria = categoriaService.getCategoriesById(id);
		return getByIdCategoria;
	}
	
//	@PostMapping("/{categoria_id}/evento/{evento_id}")
//	public ResponseEntity<?> addEvento(@PathVariable("categoria_id")int categoriaId, @PathVariable("evento_id")int eventoId){
//			Optional<EventiEntity> eventoOpt = eventiService.getByIdEvents(eventoId);
//			Optional<CategorieEntity> categoriaOpt = categoriaService.getCategoriesById(eventoId);
//			if(!eventoOpt.isEmpty() && !categoriaOpt.isEmpty()) {
//				EventiEntity evento = eventoOpt.get();
//				evento.setCategoria(categoriaOpt.get());
//				eventiService.addOrUpdateEvents(evento);
//				return new ResponseEntity<EventiEntity>(evento, HttpStatus.OK);
//			}
//				return new ResponseEntity<EventiEntity>(new EventiEntity(), HttpStatus.NOT_FOUND);
//	}
	
	@PostMapping
	public ResponseEntity<?> AddOrUpdateCategoria(@RequestBody CategoriaDTO categoriaDTO) {
		CategorieEntity categoria = categoriaDTO.toCategoria();
		boolean esisteGia = categoriaService.findByNameExists(categoriaDTO.getNome());
		if(esisteGia) {
			return new ResponseEntity<CategoriaDTO>(categoriaDTO, HttpStatus.BAD_REQUEST);
		}
			CategorieEntity categoriaCreata = categoriaService.addOrUpdateCategories(categoria);
			return new ResponseEntity<CategorieEntity>(categoriaCreata, HttpStatus.OK);
	}
	
	@DeleteMapping("{categoria_id}")
	@Transactional
	public ResponseEntity<?> DeleteUser(@PathVariable("categoria_id")int id) {
		try {
			
		Optional<CategorieEntity> getById = categoriaService.getCategoriesById(id);
		if(getById.isEmpty()) {
			return new ResponseEntity<CategorieEntity>(new CategorieEntity(), HttpStatus.NOT_FOUND);
		}else {
			categoriaService.deleteCategory(getById.get());;
			return new ResponseEntity<CategorieEntity>(getById.get(),HttpStatus.OK);
		}
		} catch (Exception e) {
			return new ResponseEntity<CategorieEntity>(new CategorieEntity(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PutMapping
	public ResponseEntity<?> PutUser(@RequestBody CategoriaDTO categoria){
		if(categoria.getId() <= 0) {
			return new ResponseEntity<CategoriaDTO>(categoria, HttpStatus.BAD_REQUEST);
		}
			CategorieEntity categorias = categoria.toPersonaDto(categoria);
			boolean esisteGia = categoriaService.findByNameExists(categorias.getNome());
			if(esisteGia) {
				return new ResponseEntity<CategoriaDTO>(categoria, HttpStatus.BAD_REQUEST);
			}
				CategorieEntity categoriaCreata = categoriaService.addOrUpdateCategories(categorias);
				return new ResponseEntity<CategorieEntity>(categoriaCreata, HttpStatus.OK);
			
		}
	
}
