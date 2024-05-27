package com.generation.projectwork.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.projectwork.dto.LoginDTO;
import com.generation.projectwork.entity.UtenteEntity;
import com.generation.projectwork.service.UtenteService;

@RestController
@RequestMapping("/api/login")
public class LoginController {

	@Autowired
	UtenteService utenteService;
	
	@PostMapping("/loginAccount")
	public ResponseEntity<UtenteEntity> loginEsito(@RequestBody LoginDTO login){
		com.generation.projectwork.dto.loginEsito logins = utenteService.login(login.getEmail(),login.getPassword());
		if(logins.isEsito()) {
			return new ResponseEntity<UtenteEntity>(logins.getUtente(), HttpStatus.OK);
		}else {
			return new ResponseEntity<UtenteEntity>(logins.getUtente(), HttpStatus.BAD_REQUEST);
		}
	}
	
	
	
}
