package com.generation.projectwork.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "utenti")
public class UtenteEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int utente_id;
	
	private String nome;
	private String cognome;
	private String data;
	private String email;
	private String password;
	private String ruolo;
	
	@JsonIgnore
	@OneToMany(mappedBy = "utente")
	List<BigliettiEntity> bigliettiPerUtente;
	
	
	/**
	 * @param nome
	 * @param cognome
	 * @param data
	 * @param email
	 * @param password
	 * @param ruolo
	 */
	public UtenteEntity(int utente_id, String nome, String cognome, String data, String email, String password,
			String ruolo) {
		super();
		this.utente_id = utente_id;
		this.nome = nome;
		this.cognome = cognome;
		this.data = data;
		this.email = email;
		this.password = password;
		this.ruolo = ruolo;
	}
	
	public UtenteEntity() {}
	
	

	/**
	 * @param nome
	 * @param cognome
	 * @param data
	 * @param email
	 * @param password
	 * @param ruolo
	 * @param bigliettiPerUtente
	 */
	public UtenteEntity(String nome, String cognome, String data, String email, String password, String ruolo) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.data = data;
		this.email = email;
		this.password = password;
		this.ruolo = ruolo;
	}

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

	public List<BigliettiEntity> getBigliettiPerUtente() {
		return bigliettiPerUtente;
	}

	public void setBigliettiPerUtente(List<BigliettiEntity> bigliettiPerUtente) {
		this.bigliettiPerUtente = bigliettiPerUtente;
	}



	
	
	
	
	
}
