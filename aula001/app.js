// Boas práticas
/*Consistência de código;
Melhores práticas;
Escalabilidade;
Fácil manutenção;
Uniformidade entre projetos.
*/

// Case sensitive
/*O JavaScript é totalmente case-sensitive.
Isso significa que letras maiúsculas e minúsculas são tratadas como caracteres completamente diferentes. Essa regra se aplica a tudo no código, incluindo:
Variáveis: nome, Nome e NOME seriam três variáveis distintas.
Funções: Uma função chamada calcularTotal() é diferente de calculartotal().
Palavras-chave: A palavra-chave if deve ser escrita em minúsculas. Escrever If ou IF causará um erro.
Propriedades e Métodos: document.getElementById é diferente de document.getElementbyid.
*/
console.log("olá mundo!")

// Sintaxe básica e comentário
/*Comentários são trechos de texto que o navegador ignora. Eles são usados para explicar o código, deixar anotações ou desativar temporariamente uma parte do código (para "debugar").
Existem dois tipos principais:
Comentário de Linha Única (//)
Começa com duas barras (//) e faz com que o restante daquela linha seja ignorado.
Começa com /* e termina com */
/*Tudo o que estiver entre eles, mesmo em várias linhas, é ignorado.

A "sintaxe" é o conjunto de regras que define como um programa em JavaScript deve ser escrito.
Aqui estão os blocos de construção mais essenciais:
Variáveis (let, const)
São "caixas" para armazenar valores.
Use let para variáveis que podem mudar de valor.
Use const para constantes (valores que não podem mudar).
Tipos de Dados Primitivos
String: Texto, sempre entre aspas (" ou '). Ex: "Olá, mundo!"
Number: Números, com ou sem casas decimais. Ex: 100, 3.14
Boolean: Valores de verdadeiro ou falso. Ex: true, false
Operadores
Atribuição (=): Define o valor de uma variável. Ex: let x = 10;
Aritméticos (+, -, *, /): Usados para matemática. Ex: let soma = 10 + 5;
Comparação (===, !==, >, <): Usados para comparar valores (resultam em true ou false). Ex: idade > 18
Estruturas de Controle (if / else)
Permitem que seu código tome decisões.
Funções (function)
São blocos de código reutilizáveis que executam uma tarefa.
Ponto e Vírgula (;)
Usado para separar instruções (comandos).
Embora o JavaScript tenha um recurso de "inserção automática de ponto e vírgula", é uma boa prática sempre terminar suas instruções com ; para evitar erros inesperados.
Case-Sensitive (Como você perguntou antes)
minhaVariavel e minhavariavel são duas variáveis diferentes.
*/


// Declaração de variáveis(var, let, const)
/*var (A Forma Antiga)
Antes de 2015, var era a única maneira de declarar uma variável. Seu principal problema é o escopo de função.
Escopo de Função: Uma variável declarada com var é "visível" em qualquer lugar dentro da função onde foi criada, não importa o bloco ({...}).
Hoisting (Içamento): Declarações var são "movidas" para o topo de seu escopo e inicializadas com undefined.
let (A Forma Moderna "Variável")
let foi introduzido para corrigir o problema do var. Ele usa escopo de bloco.

Escopo de Bloco ({...}): Uma variável let só existe e é acessível dentro do bloco em que foi declarada (seja um if, for, while ou apenas chaves {}).
Reatribuição: Você pode alterar o valor dela.
Sem Redeclaração: Você não pode declarar a mesma variável let duas vezes no mesmo escopo.

const (A Forma Moderna "Constante")
const é exatamente como let (tem escopo de bloco), mas com uma regra extra: ela não pode ser reatribuída.
Escopo de Bloco ({...}): Igual ao let.
Sem Reatribuição: O valor deve ser definido na declaração e nunca mais pode ser alterado.
*/
let nome = "Igor"
console.log("olá " + nome)
nome = "Lima"
console.log(nome)
const idade = 20
console.log(idade) 

// Console e Debug
console.warn("atenção")
console.info("informações")
console.error("erro")
//Tipos de dados
/*
inteiro - int
real - float
booleano - bool
texto - string
*/

//string
let cidade = "Americana"

//number
let salario ="2000"

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição

//     Operadores aritméticos

//     Operadores relacionais

//     Operadores lógicos

// Estrutura
//     Estrutura de controle/decisão

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas
 