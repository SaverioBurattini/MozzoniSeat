package com.generation.projectwork.dto;

import com.generation.projectwork.entity.UtenteEntity;

public class UtenteDTO {

	
	private int utente_id;
	
	private String nome;
	private String cognome;
	private String data;
	private String email;
	private String password;
	private String ruolo;
	
	/**
	 * @param nome
	 * @param cognome
	 * @param data
	 * @param email
	 * @param password
	 * @param ruolo
	 */
	public UtenteDTO(String nome, String cognome, String data, String email, String password,
			String ruolo) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.data = data;
		this.email = email;
		this.password = password;
		this.ruolo = ruolo;
	}
	
	/**
	 * @param nome
	 * @param cognome
	 * @param data
	 * @param email
	 * @param password
	 * @param ruolo
	 */
	public UtenteDTO( int utente_id, String nome, String cognome, String data, String email, String password,
			String ruolo) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.data = data;
		this.email = email;
		this.password = password;
		this.ruolo = ruolo;
	}
	
	public UtenteEntity toPersonas() {
		return new UtenteEntity( 
				this.getNome(),
				this.getCognome(),
				this.getData(),
				this.getEmail(),
				this.getPassword(),
				this.getRuolo()
				);
	}
	
	public UtenteEntity toPersonaDto(UtenteDTO utente) {
		UtenteEntity dto = new UtenteEntity();
		dto.setUtente_id(utente.getUtente_id());
		dto.setNome(utente.getNome());
		dto.setCognome(utente.getCognome());
		dto.setData(utente.getData());
		dto.setEmail(utente.getEmail());
		dto.setPassword(utente.getPassword());
		dto.setRuolo(utente.getRuolo());
		return dto;
		
	}

	public UtenteDTO() {}
	
	
	public int getUtente_id() {
		return utente_id;
	}
	public void setUtente_id(int utente_id) {
		this.utente_id = utente_id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRuolo() {
		return ruolo;
	}
	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}
	
	
}
