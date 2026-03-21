package com.github.batistaw.crmBridge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.batistaw.crmBridge.model.Usuario;
import com.github.batistaw.crmBridge.security.service.JwtService;
import com.github.batistaw.crmBridge.service.UsuarioService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UsuarioService usuarioService;
    private final JwtService jwtService;

    public AuthController(UsuarioService usuarioService, JwtService jwtService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Usuario usuario) {
        try {
            Usuario usuarioEncontrado = usuarioService.findByEmail(usuario.getEmail());
            if (!usuarioService.senhaValida(usuario.getSenha(), usuarioEncontrado.getSenha())) {
                return ResponseEntity.status(401).body("Email ou senha inválidos!");
            }
            String token = jwtService.gerarToken(
                usuarioEncontrado.getEmail(),
                usuarioEncontrado.getRole().name()
            );
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Email ou senha inválidos!");
        }
    }

    @PostMapping("/registro")
    public ResponseEntity<String> registrar(@RequestBody Usuario usuario) {
        try {
            usuarioService.save(usuario);
            return ResponseEntity.ok("Registrado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao registrar: " + e.getMessage());
        }
    }
}
