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

import com.generation.projectwork.dto.EventoDTO;
import com.generation.projectwork.entity.EventiEntity;
import com.generation.projectwork.service.EventiService;

import jakarta.transaction.Transactional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/eventi")
public class EventiController {

	@Autowired
	EventiService eventiService;
	
	@GetMapping("/tuttiGliEventi")
	public List<EventiEntity> getAllEventi(){
		List<EventiEntity> getAllEventi = eventiService.getAllEvents();
//		List<EventoDTO> eventoDtoList = new ArrayList<EventoDTO>();
//		getAllEventi.stream().forEach(e->{
//			EventoDTO dto = new EventoDTO().toEventoDto(e);
//			dto.setCategoria(new CategoriaDTO(e.))
//			eventoDtoList.add();
//		});
		
		return getAllEventi;
	}
	
	@GetMapping("{eventi_id}")
	public Optional<EventiEntity> getByIdEventi(@PathVariable("eventi_id")int id) {
		Optional<EventiEntity> getByIdEventi = eventiService.getByIdEvents(id);
		return getByIdEventi;
	}
	
	
	
	@GetMapping("/categoria/{categoria_id}")
	public List<EventiEntity> getByCategoriaId(@PathVariable("categoria_id")int id) {
		List<EventiEntity> getAllEventiFromCategory = eventiService.findByIdCategoria(id);
		return getAllEventiFromCategory;
	}
	
	@PostMapping()
	public ResponseEntity<?> AddOrUpdateUser(@RequestBody EventoDTO evento) {
		EventiEntity eventos = evento.toEvento();
//		boolean esisteGiaEvento = eventiService.findByNameExistsEventi(evento.getNome());
//		if(esisteGiaEvento) {
//			return new ResponseEntity<EventoDTO>(evento, HttpStatus.BAD_REQUEST);
//		}
			EventiEntity eventoCreata = eventiService.addOrUpdateEvents(eventos);
			return new ResponseEntity<EventiEntity>(eventoCreata, HttpStatus.OK);
	}
	
	@DeleteMapping("/{evento_id}")
	@Transactional
	public ResponseEntity<?> DeleteUser(@PathVariable("evento_id")int id) {
		try {
			
		Optional<EventiEntity> getByIdEvento = eventiService.getByIdEvents(id);
		if(getByIdEvento.isEmpty()) {
			return new ResponseEntity<EventiEntity>(new EventiEntity(), HttpStatus.NOT_FOUND);
		}else {
			eventiService.deleteUser(getByIdEvento.get());;
			return new ResponseEntity<EventiEntity>(getByIdEvento.get(),HttpStatus.OK);
		}
		} catch (Exception e) {
			return new ResponseEntity<EventiEntity>(new EventiEntity(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	 @PutMapping
	    public ResponseEntity<?> PutUser(@RequestBody EventoDTO evento){
	        if(evento.getId() <= 0) {
	            return new ResponseEntity<EventoDTO>(evento, HttpStatus.BAD_REQUEST);
	        }
	            EventiEntity eventos = evento.toEventoDtoEntity(evento);

	                EventiEntity eventoCreato = eventiService.addOrUpdateEvents(eventos);
	                return new ResponseEntity<EventiEntity>(eventoCreato, HttpStatus.OK);
	            
	        }

}