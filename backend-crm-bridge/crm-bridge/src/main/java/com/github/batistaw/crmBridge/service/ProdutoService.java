package com.github.batistaw.crmBridge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.batistaw.crmBridge.model.Produtos;

@Service
public interface ProdutoService {
    Produtos save(Produtos produtos);
    List<Produtos> findAll();
    Produtos update(Long id, Produtos produtos);
    void delete(Long id);
    // TODO: implementação de uma estrutura de pesquisa
}
