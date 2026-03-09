package com.github.batistaw.crmBridge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.batistaw.crmBridge.model.Produtos;
import com.github.batistaw.crmBridge.repository.ProdutoRepository;

@Service
public class ProdutoServiceImp implements ProdutoService {

    private ProdutoRepository repository;

    public ProdutoServiceImp(ProdutoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Produtos save(Produtos produtos) {
        return this.repository.save(produtos);
    }

    @Override
    public List<Produtos> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Produtos update(Long id, Produtos produtos) {
        Produtos updaProdutos = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado!"));

        updaProdutos.setNomeProduto(produtos.getNomeProduto());
        updaProdutos.setTipoProduto(produtos.getTipoProduto());
        updaProdutos.setValorProduto(produtos.getValorProduto());
        return this.repository.save(updaProdutos);
    }

    @Override
    public void delete(Long id) {
        this.repository.deleteById(id);
    }
    
}
