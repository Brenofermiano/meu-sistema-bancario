package com.banco.conta.controller;

import com.banco.conta.model.ContaBancaria;
import com.banco.conta.dto.ContaDTO;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/conta")
@CrossOrigin(origins = "http://localhost:5173") // libera só pro seu frontend
public class ContaController {

    private Map<String, ContaBancaria> contas = new HashMap<>();

    @PostMapping("/criar")
    public String criaConta(@RequestBody ContaDTO dto) {
        if (contas.containsKey(dto.getTitular())) {
            return "Erro: Já existe uma conta com esse titular.";
        }
        contas.put(dto.getTitular(), new ContaBancaria(dto.getTitular(), dto.getNumero()));
        return "Conta criada com sucesso para " + dto.getTitular() + "!";
    }

    @PostMapping("/depositar")
    public String depositar(@RequestBody ContaDTO dto) {
        ContaBancaria conta = contas.get(dto.getTitular());
        if (conta != null) {
            conta.depositar(dto.getValor());
            return "Depósito de R$" + dto.getValor() + " realizado na conta de " + dto.getTitular();
        }
        return "Erro: Conta não encontrada para o titular: " + dto.getTitular();
    }

    @PostMapping("/sacar")
    public String sacar(@RequestBody ContaDTO dto) {
        ContaBancaria conta = contas.get(dto.getTitular());
        if (conta != null) {
            conta.sacar(dto.getValor());
            return "Saque de R$" + dto.getValor() + " realizado da conta de " + dto.getTitular();
        }
        return "Erro: Conta não encontrada para o titular: " + dto.getTitular();
    }

    @GetMapping("/saldo")
    public String saldo(@RequestParam String titular) {
        ContaBancaria conta = contas.get(titular);
        if (conta != null) {
            return "Saldo da conta de " + titular + ": R$" + conta.getSaldo();
        }
        return "Erro: Conta não encontrada para o titular: " + titular;
    }
}
