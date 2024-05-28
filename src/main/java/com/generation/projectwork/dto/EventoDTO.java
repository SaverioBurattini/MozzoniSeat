package com.generation.projectwork.dto;

import com.generation.projectwork.entity.CategorieEntity;
import com.generation.projectwork.entity.EventiEntity;

public class EventoDTO {

	private int id;
	
	private String nome;
	private String locandina;
	private String descrizione;
	private String data;
	private String localita;
	private String coordinate;
	private double prezzoIntero;
	private double prezzoRidotto;
	private CategoriaDTO categoria;
	
	
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
	 */
	public EventoDTO(int id, String nome, String locandina, String descrizione, String data, String localita,
			String coordinate, double prezzoIntero, double prezzoRidotto, CategoriaDTO categoria) {
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
		this.categoria = categoria;
	}
	
	public EventiEntity toEvento() {
		return new EventiEntity(
				this.getNome(),
				this.getLocandina(),
				this.getDescrizione(),
				this.getData(),
				this.getLocalita(),
				this.getCoordinate(),
				this.getPrezzoIntero(),
				this.getPrezzoRidotto(),
				new CategorieEntity(this.getCategoria().getId(),this.getCategoria().getNome()));
	}
	
    public EventiEntity toEventoDtoEntity(EventoDTO evento) {
    	CategorieEntity catEntity = new CategorieEntity();
    	catEntity.setNome(evento.getCategoria().getNome());
    	catEntity.setId(evento.getCategoria().getId());
    	
        EventiEntity dto = new EventiEntity();
                dto.setId(evento.getId());
                dto.setNome(evento.getNome());
                dto.setLocandina(evento.getLocandina());
                dto.setDescrizione(evento.getDescrizione());
                dto.setData(evento.getData());
                dto.setLocalita(evento.getLocalita());
                dto.setCoordinate(evento.getCoordinate());
                dto.setPrezzoIntero(evento.getPrezzoIntero());
                dto.setPrezzoRidotto(evento.getPrezzoRidotto());
                dto.setCategoria(catEntity);
        return dto;
        
    }

	
	public EventoDTO toEventoDto(EventiEntity evento) {
		EventoDTO dto = new EventoDTO();
				dto.setId(evento.getId());
				dto.setNome(evento.getNome());
				dto.setLocandina(evento.getLocandina());
				dto.setDescrizione(evento.getDescrizione());
				dto.setData(evento.getData());
				dto.setLocalita(evento.getLocalita());
				dto.setCoordinate(evento.getCoordinate());
				dto.setPrezzoIntero(evento.getPrezzoIntero());
				dto.setPrezzoRidotto(evento.getPrezzoRidotto());
		return dto;
		
	}
	
	public EventoDTO() {}
	
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

	public CategoriaDTO getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaDTO categoria) {
		this.categoria = categoria;
	}

	

	
}
