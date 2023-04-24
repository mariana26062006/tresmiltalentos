let nome
let idade 
console.log(typeof nome);
console.log(typeof idade);
nome = prompt("qual seu nome?")
idade = prompt("qual sua idade?")
console.log("Olá", nome, ", você tem", idade, "anos")

// 2 Porque não definiui o tipo da variável

estáUsandoChinelo = prompt("você esta usando chinelo?")
éRico = prompt("você é rico?")
usaOculos = prompt("você usa oculos?")
console.log("Você está de chinelo hoje? -", estáUsandoChinelo)
console.log("você é rico? -", éRico)
console.log("você usa oculos? -", usaOculos)

// 3

let a =10
let b = 25
let m = a 
a = b
b = m
console.log("o novo valor de a é", a)
console.log("o novo valor de b é", b)