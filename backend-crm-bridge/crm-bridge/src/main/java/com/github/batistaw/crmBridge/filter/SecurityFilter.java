package com.github.batistaw.crmBridge.filter;

import java.io.IOException;

import org.apache.el.stream.Optional;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.github.batistaw.crmBridge.model.Usuario;
import com.github.batistaw.crmBridge.service.JwtService;
import com.github.batistaw.crmBridge.service.UsuarioService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class SecurityFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UsuarioService usuarioService;

    

    public SecurityFilter(JwtService jwtService, UsuarioService usuarioService) {
        this.jwtService = jwtService;
        this.usuarioService = usuarioService;
    }



    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // pega o token do header
        String token = recuperarToken(request);

        // valida e autentica
        if (token != null && jwtService.tokenValido(token)) {
            String email = jwtService.extrairEmail(token);
            Usuario usuario = usuarioService.findByEmail(email);

            // registra o usuário autenticado no contexto do Spring
            UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(usuario, null, null);

            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        // continua a requisição
        filterChain.doFilter(request, response);
    }

    private String recuperarToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            return null;
        }

        // remove o "Bearer " e retorna só o token
        return header.replace("Bearer ", "");
    }
    
}
