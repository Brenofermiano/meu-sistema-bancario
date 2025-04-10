package com.banco.conta.dto;

public class ContaDTO {
    private String titular;
    private int numero;   // usado apenas em /criar
    private double valor; // usado em /depositar e /sacar

    // Getters e Setters
    public String getTitular() { return titular; }
    public void setTitular(String titular) { this.titular = titular; }

    public int getNumero() { return numero; }
    public void setNumero(int numero) { this.numero = numero; }

    public double getValor() { return valor; }
    public void setValor(double valor) { this.valor = valor; }
}
