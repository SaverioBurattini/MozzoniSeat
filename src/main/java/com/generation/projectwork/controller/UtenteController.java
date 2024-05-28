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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.generation.projectwork.dto.UtenteDTO;
import com.generation.projectwork.entity.UtenteEntity;
import com.generation.projectwork.repository.UtenteRepository;
import com.generation.projectwork.service.UtenteService;

import jakarta.transaction.Transactional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/utenti")
public class UtenteController {

	@Autowired
	UtenteService utenteService;
	
	@Autowired
	UtenteRepository utenteRepository;
	
	@GetMapping("/tuttiGliUtenti")
	public List<UtenteEntity> getAllUsers(){
		List<UtenteEntity> getAllUtenti = utenteService.getAllUsers();
		return getAllUtenti;
	}
	
	@GetMapping("{utente_id}")
	public Optional<UtenteEntity> getByIdUser(@PathVariable("utente_id")int id) {
		Optional<UtenteEntity> getByIdUtente = utenteService.getById(id);
		return getByIdUtente;
	}
	
	@CrossOrigin("*")
	@GetMapping("/{email}/{password}")
	public Optional<UtenteEntity> getByEmailAndPassword(@PathVariable("email")String email, @PathVariable("password")String password){
		Optional<UtenteEntity> getbyEmailAndPassword = utenteService.utenteTrovatoByEmailAndPass(email, password);
		return getbyEmailAndPassword;
	}
	
	@GetMapping(path = "param")
	public Optional<UtenteEntity> getByEmailAndPasswords(@RequestParam("email")String email, @RequestParam("password")String password){
		Optional<UtenteEntity> getbyEmailAndPassword = utenteService.utenteTrovatoByEmailAndPass(email, password);
		return getbyEmailAndPassword;
	}
	
	@PostMapping(path = "paramRegistrazione")
	public ResponseEntity<UtenteEntity> getByEmailAndPasswords(
			@RequestParam("nome")String nome,
			@RequestParam("cognome")String cognome,
			@RequestParam("data")String data,
			@RequestParam("email")String email,
			@RequestParam("password")String password){
		Optional<UtenteEntity> getbyEmailAndPassword = utenteService.utenteGiaCreatoPerEmail(email);
		if(getbyEmailAndPassword.isEmpty()) {
			UtenteEntity utente = new UtenteEntity();
			utente.setNome(nome);
			utente.setCognome(cognome);
			utente.setData(data);
			utente.setEmail(email);
			utente.setPassword(password);
			utente.setRuolo("ruolo_utente");
			utenteService.addOrUpdate(utente);
			return new ResponseEntity<UtenteEntity>(utente, HttpStatus.OK);
		}else {
			UtenteEntity utente = new UtenteEntity();
			utente.setNome(nome);
			utente.setCognome(cognome);
			utente.setData(data);
			utente.setEmail(email);
			utente.setPassword(password);
			utente.setRuolo("ruolo_utente");
			return new ResponseEntity<UtenteEntity>(utente, HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	
	
	@PostMapping
	public ResponseEntity<?> AddOrUpdateUser(@RequestBody UtenteDTO utenteDTO) {
		UtenteEntity utente = utenteDTO.toPersonas();
//		boolean esisteGia = utenteService.findByEmailAndPassExists(utente.getEmail(), utente.getPassword());
//		if(esisteGia) {
//			return new ResponseEntity<UtenteDTO>(utenteDTO, HttpStatus.BAD_REQUEST);
//		}
			UtenteEntity utenteCreato = utenteService.addOrUpdate(utente);
			return new ResponseEntity<UtenteEntity>(utenteCreato, HttpStatus.OK);
	}
	
	@DeleteMapping("/{utente_id}")
	@Transactional
	public ResponseEntity<?> DeleteUser(@PathVariable("utente_id")int id) {
		try {
			
		Optional<UtenteEntity> getById = utenteService.getById(id);
		if(getById.isEmpty()) {
			return new ResponseEntity<UtenteEntity>(new UtenteEntity(), HttpStatus.NOT_FOUND);
		}else {
			utenteService.deleteUser(getById.get());
			return new ResponseEntity<UtenteEntity>(getById.get(),HttpStatus.OK);
		}
		} catch (Exception e) {
			return new ResponseEntity<UtenteEntity>(new UtenteEntity(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PutMapping
	public ResponseEntity<?> PutUser(@RequestBody UtenteDTO utente){
		if(utente.getUtente_id() <= 0) {
			return new ResponseEntity<UtenteDTO>(utente, HttpStatus.BAD_REQUEST);
		}
			UtenteEntity persona = utente.toPersonaDto(utente);
			// boolean esisteGia = utenteService.findByEmailAndPassExists(persona.getEmail(), persona.getPassword());
			// if(esisteGia) {
			// 	return new ResponseEntity<UtenteDTO>(utente, HttpStatus.BAD_REQUEST);
			// }
				UtenteEntity utenteCreato = utenteService.addOrUpdate(persona);
				return new ResponseEntity<UtenteEntity>(utenteCreato, HttpStatus.OK);
			
		}
		
		
	}

