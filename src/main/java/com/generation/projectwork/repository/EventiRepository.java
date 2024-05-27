package com.generation.projectwork.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.generation.projectwork.entity.EventiEntity;

@Repository
public interface EventiRepository extends JpaRepository<EventiEntity, Integer>{

	@Query(value = "select * from eventi e where e.nome = ?1" , nativeQuery = true)
	EventiEntity findByNameEventi(String nome);
	
	@Query(value = "select * from eventi e where e.categoria_id = ?1", nativeQuery = true)
	ArrayList<EventiEntity> findByIdCategoria(int id);
	
	
}
