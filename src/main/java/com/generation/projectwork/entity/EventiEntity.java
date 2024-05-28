package com.generation.projectwork.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "eventi")
public class EventiEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String nome;
	private String locandina;
	private String descrizione;
	private String data;
	private String localita;
	private String coordinate;
	private double prezzoIntero;
	private double prezzoRidotto;
	
//	public @Transient int categoria_id;
	
	
	@ManyToOne
	@JoinColumn(name = "categoria_id", referencedColumnName = "id")
	private CategorieEntity categoria;
	
	@JsonIgnore
	@OneToMany(mappedBy = "evento")
	private List<BigliettiEntity> biglietti;

	/**
	 * @param id
	 * @param nome
	 * @param locandina
	 * @param descrizione
	 * @param data
	 * @param localita
	 * @param coordinate
	 * @param prezzoIntero
	 * @param prezzoRidotto
	 * @param categoria
	 */
	public EventiEntity(int id, String nome, String locandina, String descrizione, String data, String localita,
			String coordinate, double prezzoIntero, double prezzoRidotto, CategorieEntity categoria) {
		super();
		this.id = id;
		this.nome = nome;
		this.locandina = locandina;
		this.descrizione = descrizione;
		this.data = data;
		this.localita = localita;
		this.coordinate = coordinate;
		this.prezzoIntero = prezzoIntero;
		this.prezzoRidotto = prezzoRidotto;
		this.categoria= categoria;
	}
	
	public EventiEntity() {}

	public EventiEntity(String nome, String locandina, String descrizione, String data, String localita,
			String coordinate, double prezzoIntero, double prezzoRidotto, CategorieEntity categoria) {
		this.nome = nome;
		this.locandina = locandina;
		this.descrizione = descrizione;
		this.data = data;
		this.localita = localita;
		this.coordinate = coordinate;
		this.prezzoIntero = prezzoIntero;
		this.prezzoRidotto = prezzoRidotto;
		this.categoria = categoria;
		
	}
	
	public EventiEntity(String nome, String locandina, String descrizione, String data, String localita,
			String coordinate, double prezzoIntero, double prezzoRidotto, int categoria_id) {
		this.nome = nome;
		this.locandina = locandina;
		this.descrizione = descrizione;
		this.data = data;
		this.localita = localita;
		this.coordinate = coordinate;
		this.prezzoIntero = prezzoIntero;
		this.prezzoRidotto = prezzoRidotto;
	
		
		
	}
	
	
	
	public EventiEntity(String nome, String locandina, String descrizione, String data, String localita,
            String coordinate, double prezzoIntero, double prezzoRidotto) {
        this.nome = nome;
        this.locandina = locandina;
        this.descrizione = descrizione;
        this.data = data;
        this.localita = localita;
        this.coordinate = coordinate;
        this.prezzoIntero = prezzoIntero;
        this.prezzoRidotto = prezzoRidotto;
    }
	
	
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getLocandina() {
		return locandina;
	}

	public void setLocandina(String locandina) {
		this.locandina = locandina;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getLocalita() {
		return localita;
	}

	public void setLocalita(String localita) {
		this.localita = localita;
	}

	public String getCoordinate() {
		return coordinate;
	}

	public void setCoordinate(String coordinate) {
		this.coordinate = coordinate;
	}

	public double getPrezzoIntero() {
		return prezzoIntero;
	}

	public void setPrezzoIntero(double prezzoIntero) {
		this.prezzoIntero = prezzoIntero;
	}

	public double getPrezzoRidotto() {
		return prezzoRidotto;
	}

	public void setPrezzoRidotto(double prezzoRidotto) {
		this.prezzoRidotto = prezzoRidotto;
	}

	

	public void setCategoria(CategorieEntity categoria) {
		this.categoria = categoria;
	}

	public CategorieEntity getCategoria() {
		return categoria;
	}

	public List<BigliettiEntity> getBiglietti() {
		return biglietti;
	}

	public void setBiglietti(List<BigliettiEntity> biglietti) {
		this.biglietti = biglietti;
	}
	
	
	
	
}
