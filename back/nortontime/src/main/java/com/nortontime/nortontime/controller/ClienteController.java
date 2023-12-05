package com.nortontime.nortontime.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nortontime.nortontime.model.Cliente;
import com.nortontime.nortontime.repository.ClienteRepository;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository repositorio;

    // retorna um atendente especifico por id
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getCliente (@PathVariable long id){
        Optional<Cliente> obj = repositorio.findById((long) id);
        if(obj.isPresent())    
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.notFound().build();    // codigo 404
    }

    // Adiciona um cliente
    @PostMapping
    public ResponseEntity<Cliente> postCliente (@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED).body(repositorio.save(cliente));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Cliente cliente) {
        if (cliente != null && cliente.getEmail() != null && cliente.getSenha() != null) {
            return ResponseEntity.ok("Login bem-sucedido para " + cliente.getEmail());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

    // Atualiza um cliente
    @PutMapping
    public ResponseEntity<Cliente> putAtendente (@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.OK).body(repositorio.save(cliente));
    }

    // Remove um cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Cliente> deleteCliente (@PathVariable long id){
        repositorio.deleteById(id);
        return ResponseEntity.noContent().build();   //codigo 204
        }
    
}
