package com.banco.conta.model;

public class ContaBancaria {
    private String titular;
    private int numero;
    private double saldo;

    public ContaBancaria(String titular, int numero){
        this.titular = titular;
        this.numero = numero;
        this.saldo = 0.0;
    }

    public String getTitular(){ return titular;}
    public int getNumero(){ return numero;}
    public double getSaldo(){ return saldo;}

    public void depositar(double valor){
        if(valor > 0){
            saldo += valor;
        }
    }

    public void sacar(double valor){
        if(valor > 0 && saldo >= valor) {
            saldo -= valor;
        }
    }
}
