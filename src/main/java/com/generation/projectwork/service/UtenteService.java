package com.generation.projectwork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.projectwork.dto.loginEsito;
import com.generation.projectwork.entity.UtenteEntity;
import com.generation.projectwork.repository.UtenteRepository;

@Service
public class UtenteService {

	@Autowired
	UtenteRepository utenteRepository;
	
	public List<UtenteEntity> getAllUsers() {
		List<UtenteEntity> getAll = utenteRepository.findAll();
		return getAll;
	}
	
	public Optional<UtenteEntity> getById (int id) {
		Optional<UtenteEntity> getByIdUser = utenteRepository.findById(id);
		return getByIdUser;
	}
	
	public UtenteEntity addOrUpdate(UtenteEntity utente){
		UtenteEntity addOrUpdateUser = utenteRepository.save(utente);
		return addOrUpdateUser;
	}
	
	
	
		public void deleteUser(UtenteEntity user) {
		 utenteRepository.delete(user);
		}
		
		public Optional<UtenteEntity> findByEmailAndPassword(String email, String password) {
			return utenteRepository.findNyEmailAndPass(email, password);
		}
		

		public boolean findByEmailAndPassExists(String email, String password) {
			//riutilizzo del codice scritto sopra
			Optional<UtenteEntity> persona = this.findByEmailAndPassword(email, password);
			 if(persona==null) {
				 return false;
			 }else {
				return true;
			}
		}
		
		public loginEsito login(String email, String password) {
			Optional<UtenteEntity> loginDai = utenteRepository.findNyEmailAndPass(email, password);
			loginEsito esito = new loginEsito();
			if(loginDai.isEmpty()) {
				esito.setEsito(false);
				esito.setUtente(new UtenteEntity());
			}else {
				esito.setEsito(true);
				esito.setUtente(loginDai.get());
			}
			
			return esito;
		}
		
		public Optional<UtenteEntity> utenteTrovatoByEmailAndPass(String email, String password) {
			Optional<UtenteEntity> trovatoByEmailAndPass = utenteRepository.findNyEmailAndPass(email, password);
			return trovatoByEmailAndPass;
		}
		
		public Optional<UtenteEntity> utenteGiaCreatoPerEmail(String email){
			Optional<UtenteEntity> giaCreatoPerEmail = utenteRepository.findByEmail(email);
			return giaCreatoPerEmail;
		}
		
	
		
	


		
}
