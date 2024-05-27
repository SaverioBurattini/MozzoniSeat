package com.generation.projectwork.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.projectwork.dto.BigliettoDTO;
import com.generation.projectwork.entity.BigliettiEntity;
import com.generation.projectwork.service.BigliettiService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api/biglietti")
public class BigliettiController {

	@Autowired
	BigliettiService bigliettiService;
	
	@GetMapping
	public List<BigliettiEntity> getAllBiglietti(){
		List<BigliettiEntity> getAllBiglietti = bigliettiService.getAllTicket();
		return getAllBiglietti;
	}
	
	@GetMapping("{biglietti_id}")
	public Optional<BigliettiEntity> getByIdEventi(@PathVariable("biglietti_id")int id) {
		Optional<BigliettiEntity> getByIdBiglietti = bigliettiService.getById(id);
		return getByIdBiglietti;
	}
	
	@PostMapping("/nuovoBiglietto")
	public ResponseEntity<?> AddOrUpdateUser(@RequestBody BigliettoDTO biglietto) {
		BigliettiEntity bigliettos = biglietto.toBiglietto();
		boolean esisteGiaEvento = bigliettiService.findByBigliettiExists(biglietto.getPosto());
		if(esisteGiaEvento) {
			return new ResponseEntity<BigliettoDTO>(biglietto, HttpStatus.BAD_REQUEST);
		}
			BigliettiEntity BigliettoCreato = bigliettiService.addOrUpdate(bigliettos);
			return new ResponseEntity<BigliettiEntity>(BigliettoCreato, HttpStatus.OK);
	}
	
	@DeleteMapping("{biglietti_id}")
	@Transactional
	public ResponseEntity<?> DeleteUser(@PathVariable("biglietti_id")int id) {
		try {
			
		Optional<BigliettiEntity> getByIdBiglietto = bigliettiService.getById(id);
		if(getByIdBiglietto.isEmpty()) {
			return new ResponseEntity<BigliettiEntity>(new BigliettiEntity(), HttpStatus.NOT_FOUND);
		}else {
			bigliettiService.deleteTicket(getByIdBiglietto.get());;
			return new ResponseEntity<BigliettiEntity>(getByIdBiglietto.get(),HttpStatus.OK);
		}
		} catch (Exception e) {
			return new ResponseEntity<BigliettiEntity>(new BigliettiEntity(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PutMapping
	public ResponseEntity<?> PutUser(@RequestBody BigliettoDTO biglietto){
		if(biglietto.getId() <= 0) {
			return new ResponseEntity<BigliettoDTO>(biglietto, HttpStatus.BAD_REQUEST);
		}
			BigliettiEntity biglietti = biglietto.toBigliettoDTO(biglietto);
			boolean esisteGia = bigliettiService.findByBigliettiExists(biglietto.getPosto());
			if(esisteGia) {
				return new ResponseEntity<BigliettoDTO>(biglietto, HttpStatus.BAD_REQUEST);
			}
				BigliettiEntity bigliettoCreato = bigliettiService.addOrUpdate(biglietti);
				return new ResponseEntity<BigliettiEntity>(bigliettoCreato, HttpStatus.OK);
			
		}
}
