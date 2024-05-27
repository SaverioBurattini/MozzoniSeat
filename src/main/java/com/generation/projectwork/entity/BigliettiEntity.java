package com.generation.projectwork.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "biglietti")
public class BigliettiEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private double prezzo;
	private String dataAcquisto;
	private String posto;
	
	@ManyToOne
	@JoinColumn(name = "eventi_id", referencedColumnName = "id")
	private EventiEntity evento;
	
	@ManyToOne
	@JoinColumn(name = "utente_id", referencedColumnName = "utente_id")
	private UtenteEntity utente;
	
	
	/**
	 * @param id
	 * @param prezzo
	 * @param dataAcquisto
	 * @param posto
	 */
	public BigliettiEntity(int id, double prezzo, String dataAcquisto, String posto) {
		super();
		this.id = id;
		this.prezzo = prezzo;
		this.dataAcquisto = dataAcquisto;
		this.posto = posto;
	}
	
	public BigliettiEntity() {}	
	
	
	public BigliettiEntity(double prezzo, String dataAcquisto, String posto) {
		this.prezzo = prezzo;
		this.dataAcquisto = dataAcquisto;
		this.posto = posto;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	public String getDataAcquisto() {
		return dataAcquisto;
	}
	public void setDataAcquisto(String dataAcquisto) {
		this.dataAcquisto = dataAcquisto;
	}
	public String getPosto() {
		return posto;
	}
	public void setPosto(String posto) {
		this.posto = posto;
	}

	public EventiEntity getEvento() {
		return evento;
	}

	public void setEvento(EventiEntity evento) {
		this.evento = evento;
	}

	public UtenteEntity getUtente() {
		return utente;
	}

	public void setUtente(UtenteEntity utente) {
		this.utente = utente;
	}
	
	
	
	
}
