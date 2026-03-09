package com.github.batistaw.crmBridge.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.batistaw.crmBridge.model.Produtos;
import com.github.batistaw.crmBridge.service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutosController {
    
    private ProdutoService produtoService;
    public ProdutosController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping("/")
    @ResponseBody
    public List<Produtos> findAll() {
        return this.produtoService.findAll();
    }

    @PostMapping("save")
    public Produtos save(Produtos produto) {
        return this.produtoService.save(produto);
    }

    @PostMapping("update/{id}")
    public Produtos update(@PathVariable Long id, @RequestBody Produtos produto) {
        return this.produtoService.update(id, produto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.produtoService.delete(id);
        return ResponseEntity.ok().build();
    }

}
