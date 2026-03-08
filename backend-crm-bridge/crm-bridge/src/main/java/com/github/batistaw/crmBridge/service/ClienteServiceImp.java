package com.github.batistaw.crmBridge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.github.batistaw.crmBridge.model.Cliente;
import com.github.batistaw.crmBridge.model.Produtos;
import com.github.batistaw.crmBridge.repository.ClienteRepository;

@Service
public class ClienteServiceImp implements ClienteService {

    private ClienteRepository repository; 

    public ClienteServiceImp(ClienteRepository repository) {
        this.repository = repository;
    }
    

    @Override
    public Cliente save(Cliente cliente) {
        return this.repository.save(cliente);
    }

    @Override
    public List<Cliente> findAll() {
        return this.repository.findAll();
    }

    @Override
    public Cliente update(Long id, Cliente cliente) {
        Optional<Cliente> optionalCliente = this.repository.findById(id);
        Cliente updateCliente = optionalCliente.get();

        updateCliente.setUsername(cliente.getUsername());
        updateCliente.setWhatsapp(cliente.getWhatsapp());
        updateCliente.setStatus(cliente.getStatus());
        updateCliente.setProdutos(cliente.getProdutos());
        
        // soma o valor de todos os produtos
        Double total = cliente.getProdutos()
            .stream()
            .mapToDouble(Produtos::getValorProduto)
            .sum();
        updateCliente.setValorCompra(total);

        return this.save(updateCliente);
    }

    @Override
    public void delete(Long id) {
        this.repository.deleteById(id);
    }
    
}
