package com.generation.projectwork.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.generation.projectwork.entity.CategorieEntity;

@Repository
public interface CategoriaRepository extends JpaRepository<CategorieEntity, Integer>{

	@Query(value = "select * from categorie c where c.nome = ?1", nativeQuery = true)
	CategorieEntity findByName(String nome);
}
