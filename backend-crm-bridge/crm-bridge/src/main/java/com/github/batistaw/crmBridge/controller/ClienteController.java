package com.github.batistaw.crmBridge.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.batistaw.crmBridge.model.Cliente;
import com.github.batistaw.crmBridge.service.ClienteService;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "http://localhost:5173")
public class ClienteController {

    private ClienteService clienteService;
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }
    
    @GetMapping("/")
    @ResponseBody
    public List<Cliente> findAll(){
        return clienteService.findAll();
    }

    @PostMapping("/save")
    public Cliente save(@RequestBody Cliente cliente ) {
        return this.clienteService.save(cliente);
    }

    @PostMapping("update/{id}")
    public Cliente update(@PathVariable Long id, @RequestBody Cliente cliente) {
        return this.clienteService.update(id, cliente);
    }

    @DeleteMapping("deletar/{id}")
    @ResponseBody
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.clienteService.delete(id);
        return ResponseEntity.ok().build();
    }
}
