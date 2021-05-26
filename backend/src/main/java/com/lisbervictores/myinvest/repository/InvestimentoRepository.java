package com.lisbervictores.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lisbervictores.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{

}
