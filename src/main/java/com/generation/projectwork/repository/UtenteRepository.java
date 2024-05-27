package com.generation.projectwork.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.generation.projectwork.dto.UtenteDTO;
import com.generation.projectwork.entity.UtenteEntity;

@Repository
public interface UtenteRepository extends JpaRepository<UtenteEntity, Integer> {

	UtenteEntity save(UtenteDTO utenteDTO);
	
	@Query(value = "select * from utenti u where u.email = ?1 and u.password = ?2", nativeQuery = true)
	Optional<UtenteEntity> findNyEmailAndPass(String email, String password);

	@Query(value = "select * from utenti u where u.email = ?1", nativeQuery = true)
	Optional<UtenteEntity> findByEmail(String email);
	
	
	

}
