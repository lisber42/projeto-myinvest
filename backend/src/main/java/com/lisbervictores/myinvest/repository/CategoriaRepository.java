package com.lisbervictores.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lisbervictores.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	

}
