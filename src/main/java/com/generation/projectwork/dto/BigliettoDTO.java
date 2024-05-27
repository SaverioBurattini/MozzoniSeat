package com.generation.projectwork.dto;

import com.generation.projectwork.entity.BigliettiEntity;

public class BigliettoDTO {

	private int id;
	private double prezzo;
	private String dataAcquisto;
	private String posto;
	
	/**
	 * @param id
	 * @param prezzo
	 * @param dataAcquisto
	 * @param posto
	 */
	public BigliettoDTO(int id, double prezzo, String dataAcquisto, String posto) {
		super();
		this.id = id;
		this.prezzo = prezzo;
		this.dataAcquisto = dataAcquisto;
		this.posto = posto;
	}
	
	public BigliettiEntity toBiglietto() {
		return new BigliettiEntity(
				this.getPrezzo(),
				this.getDataAcquisto(),
				this.getPosto());
	}

	
	public BigliettiEntity toBigliettoDTO(BigliettoDTO biglietto) {
		BigliettiEntity dto = new BigliettiEntity();
				dto.setId(biglietto.getId());
				dto.setPrezzo(biglietto.getPrezzo());
				dto.setDataAcquisto(biglietto.getDataAcquisto());
				dto.setPosto(biglietto.getPosto());
		return dto;
		
	}
	
	
	public BigliettoDTO() {}
	
	
	public BigliettoDTO(double prezzo2, String dataAcquisto2, String posto2) {
		// TODO Auto-generated constructor stub
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
	
	
}
