package com.generation.projectwork.dto;

import com.generation.projectwork.entity.UtenteEntity;

public class loginEsito {

	private UtenteEntity utente;
	private boolean esito;
	
	/**
	 * @param utente
	 * @param esito
	 */
	public loginEsito(UtenteEntity utente, boolean esito) {
		super();
		this.utente = utente;
		this.esito = esito;
	}
	
	public loginEsito() {}
	
	public UtenteEntity getUtente() {
		return utente;
	}
	public void setUtente(UtenteEntity utente) {
		this.utente = utente;
	}
	public boolean isEsito() {
		return esito;
	}
	public void setEsito(boolean esito) {
		this.esito = esito;
	}
	
	
}
