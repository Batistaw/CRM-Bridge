package com.github.batistaw.crmBridge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.batistaw.crmBridge.model.Cliente;

@Service 
public interface ClienteService {
    Cliente save(Cliente cliente);
    List<Cliente> findAll();
    Cliente update(Long id, Cliente cliente);
    void delete(Long id);
}