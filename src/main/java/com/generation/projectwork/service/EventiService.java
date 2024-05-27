package com.generation.projectwork.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.projectwork.entity.EventiEntity;
import com.generation.projectwork.repository.EventiRepository;

@Service
public class EventiService {

	@Autowired
	EventiRepository eventiRepository;
	
	public List<EventiEntity> getAllEvents() {
		List<EventiEntity> getAllEventi = eventiRepository.findAll();
		return getAllEventi;
	}
	
	public Optional<EventiEntity> getByIdEvents(int id) {
		Optional<EventiEntity> getByIdEventi = eventiRepository.findById(id);
		return getByIdEventi;
	}
	

	
	public EventiEntity addOrUpdateEvents(EventiEntity utente){
		EventiEntity addOrUpdateEventi = eventiRepository.save(utente);
		return addOrUpdateEventi;
	}
	
		public void deleteUser(EventiEntity evento) {
		 eventiRepository.delete(evento);
		}
		
		public EventiEntity findByNameEventi(String nome) {
			return eventiRepository.findByNameEventi(nome);
		}
		
		public boolean findByNameExistsEventi(String nome) {
			//riutilizzo del codice scritto sopra
			EventiEntity evento = this.findByNameEventi(nome);
			 if(evento==null) {
				 return false;
			 }else {
				return true;
			}
		}
		
		public ArrayList<EventiEntity> findByIdCategoria(int id) {
			return eventiRepository.findByIdCategoria(id);
		}
		
	
		
}
