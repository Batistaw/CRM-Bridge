package com.github.batistaw.crmBridge.model;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;


@Entity
public class Cliente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "clientUsername", nullable = false)
    private String username;
    @Column(nullable = false, unique = true)
    private String whatsapp;
    private Double valorCompra;
    private LocalDateTime date;
    private Boolean status = false;

    @ManyToMany
    @JoinTable( 
        name = "cliente_produto",
        joinColumns = @JoinColumn(name = "cliente_id"),
        inverseJoinColumns = @JoinColumn(name = "produto_id")
    )
    private List<Produtos> produtos = new ArrayList<>();
    

    public Cliente(){}

    public Cliente(Long id, String username, String whatsapp, Double valorCompra, LocalDateTime date,
            Boolean status, List<Produtos> produtos) {
        this.id = id;
        this.username = username;
        this.whatsapp = whatsapp;
        this.valorCompra = valorCompra;
        this.date = date;
        this.status = status;
        this.produtos = produtos;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public List<Produtos> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produtos> produtos) {
        this.produtos = produtos;
    }

    public Double getValorCompra() {
        return valorCompra;
    }

    public void setValorCompra(Double valorCompra) {
        this.valorCompra = valorCompra;
    }
    
}
