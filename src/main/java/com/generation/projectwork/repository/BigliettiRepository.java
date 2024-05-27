package com.generation.projectwork.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.generation.projectwork.entity.BigliettiEntity;

@Repository
public interface BigliettiRepository extends JpaRepository<BigliettiEntity, Integer> {

	@Query(value = "select * from biglietti b where b.posto = ?1", nativeQuery = true)
	BigliettiEntity findByPlace(String posto);
}
