package com.github.batistaw.crmBridge.service;

import java.util.List;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.github.batistaw.crmBridge.model.Usuario;
import com.github.batistaw.crmBridge.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(PasswordEncoder passwordEncoder, UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void save(Usuario usuario) {
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        usuarioRepository.save(usuario);
    }

    public boolean senhaValida(String senhaDigitada, String SenhaBancoDados) {
        return passwordEncoder.matches(senhaDigitada, SenhaBancoDados);
    }

    public Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("usuário não encontrado"));
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }
}
