package com.github.batistaw.crmBridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.github.batistaw.crmBridge.model.Produtos;

@Repository
public interface ProdutoRepository extends JpaRepository<Produtos, Long> {

    
}
