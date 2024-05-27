package com.generation.projectwork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.projectwork.entity.BigliettiEntity;
import com.generation.projectwork.repository.BigliettiRepository;

@Service
public class BigliettiService {

	@Autowired
	BigliettiRepository bigliettiRepository;
	
	public List<BigliettiEntity> getAllTicket() {
		List<BigliettiEntity> getAllBiglietti = bigliettiRepository.findAll();
		return getAllBiglietti;
	}
	
	public Optional<BigliettiEntity> getById (int id) {
		Optional<BigliettiEntity> getByIdBiglietti = bigliettiRepository.findById(id);
		return getByIdBiglietti;
	}
	
	public BigliettiEntity addOrUpdate(BigliettiEntity utente){
		BigliettiEntity addOrUpdateBiglietto = bigliettiRepository.save(utente);
		return addOrUpdateBiglietto;
	}
	
		public void deleteTicket(BigliettiEntity biglietto) {
		 bigliettiRepository.delete(biglietto);
		}
		
		public BigliettiEntity findByPlace(String biglietto) {
			return bigliettiRepository.findByPlace(biglietto);
		}
		
		public boolean findByBigliettiExists(String biglietto) {
			//riutilizzo del codice scritto sopra
			BigliettiEntity bigliettos= this.findByPlace(biglietto);
			 if(bigliettos==null) {
				 return false;
			 }else {
				return true;
			}
		}
		
}
