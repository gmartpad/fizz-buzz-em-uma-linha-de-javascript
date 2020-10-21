// Para realizar o FizzBuzz as regras são as seguintes

// Você iterará os valores de 1 a 100
// Quando o valor iterado for múltiplo de 3, você mostrará em seu output ou saída a string "Fizz"
// Quando o valor iterado for múltiplo de 5, você mostrará em seu output ou saída a string "Buzz"
// Quando o valor iterado for múltiplo de 3 e 5, você mostrará em seu output ou saída a string "FizzBuzz"
// Em todas as outras iterações, você mostrará o valor numérico do algarismo atualmente iterado

// Serão demonstradas algumas maneiras (não todas, pois existem inúmeras) de como realizar este desafio

// 1. UMA MANEIRA ERRADA E MEIO SUJA


// será criada uma variada i com o valor inicial 1
// o loop irá percorrer seu caminho, quando chegar ao final
// ele retornará e o valor de i passará pela checagem:
// i <= 100 (i é menor ou igual a 100?)
// Se a resposta for verdadeira (sim, i é menor ou igual a 100)
// o valor de i é aumentado em 1 (i++) e ele vai para o começo do loop novamente
// repetindo este processo até que a resposta de checagem
// seja falsa (não, i não é menor ou igual a 100)
// nesse instante, acabando assim com as iterações do loop

for(let i = 1; i <= 100; i++)
{

    // se o módulo (a sobra da divisão) de i por 15
    // for igual a zero, mostre no console a string "FizzBuzz"

    if(i % 15 == 0)
    {
        console.log("FizzBuzz");
    }

    // se o módulo (a sobra da divisão) de i por 3
    // for igual a zero, mostre no console a string "Fizz"

    if(i % 3 == 0)
    {
        console.log("Fizz");
    }

    // se o módulo (a sobra da divisão) de i por 5
    // for igual a zero, mostre no console a string "Buzz"

    if(i % 5 == 0)
    {
        console.log("Buzz");
    }

    // se o módulo (a sobra da divisão) de i por 3, por 5 e por 15
    // não for igual a zero, mostre no console o valor numérico iterado atualmente

    if( (i % 3 != 0) && (i % 5 != 0) && (i % 15 != 0) )
    {
        console.log(i);
    }

}

// A maneira acima está errada pelo motivo de, 
// quando ocorrer de uma número ser múltiplo de 3 e 5
// ao mesmo tempo, ele ainda assim dá o console.log
// do módulo apenas de 3 e apenas de 5 junto com o console.log
// do módulo de 15. criando uma situação onde
// será impresso:

FizzBuzz
Fizz
Buzz

// Onde era apenas para ser impresso:

FizzBuzz

// Podemos corrigir este erro deixando o código 
// um pouco mais enxuto e modular da seguinte maneira:


// 2. UMA MANEIRA ENXUTA E MODULAR


for(let i = 1; i <= 100; i++)
{

    // é criada uma variável chamada output
    // com o valor de uma string vazia designada a ela

    let output = "";

    // se o módulo (a sobra da divisão) de i por 3
    // for igual a zero, adicione ao valor 
    // da variável output a string "Fizz"

    if (i % 3 == 0) { output += "Fizz" };

    // se o módulo (a sobra da divisão) de i por 5
    // for igual a zero, adicione ao valor 
    // da variável output a string "Buzz"

    if (i % 5 == 0) { output += "Buzz" };

    // se o valor de output continuar sendo uma string
    // vazia, ou seja, o valor numérico atual não é
    // múltiplo nem de 3 e/ou nem de 5
    // atribua o valor numérico atual a output

    if (output == "") { output = i };


    // mostre no console o valor de output

    console.log(output);

}

// A maneira acima utiliza da variável output
// para que de acordo com o valor numerico de i
// as strings dos respectivos múltiplos sejam
// concatenados conforme a igualdade.
// Dessa forma não havendo mais de um console.log
// para cada iteração do valor de i.

// E caso você deseje fazer a comparação com múltiplos
// de outros números é só adicionar abaixo, utilizando
// a mesma estrutura.

// Ex.: 

    if (i % 3 == 0) { output += "Fizz" };
    if (i % 5 == 0) { output += "Buzz" };
    if (i % 10 == 0) { output += "Dozz" };

// Quando o valor iterado for 30
// aparecerá no console a string "FizzBuzzDozz"

// Mas com tudo isso, ainda há uma maneira de deixar
// isso mais enxuto ainda:


// 3. FIZZBUZZ EM UMA LINHA

for(let i = 0; i < 100;) console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);

// será criada uma variada i com o valor inicial 0.
// Após isso, ele executará o console.log()
// com o processamento da lógica de qual string será mostrada 
// no console ocorrendo da esquerda para a direita:

((++i%3?'':'Fizz')

// O valor de i é incrementado em 1,
// ou seja, na primeira iteração será
// 0 + 1
// e após o incremento o valor de i será
// avaliado e verificado se o módulo de i por 3
// é verdadeiro ou não

// o valor numérico 0 é um valor tratado como falso (em comparações não estritas)
// qualquer outro valor numérico é tratado como verdadeiro (em comparações não estritas)

// Ou seja, se o valor do módulo de i por 3
// não for 0, ele não é múltiplo de 3 e o resultado é tratado
// como um valor verdadeiro (pois não é 0)

// E se o valor do módulo de i por 3
// for 0, ele  é múltiplo de 3 e o resultado é tratado
// como um valor falso (pois é 0)

(++i%3 ? '' : 'Fizz' )

// Quando o módulo de i por 3 for falso (for 0)
// ele é múltiplo de 3 e o Fizz será adicionado
// a string que está sendo processada para
// logo logo aparecer no console


+(i%5?'':'Buzz')

// Há o sinal de +
// demonstrando concatenação com o valor
// que virá logo em seguida

// Se o valor do módulo de i por 5
// não for 0, ele não é múltiplo de 5 e o resultado é tratado
// como um valor verdadeiro (pois não é 0)

// E se o valor do módulo de i por 5
// for 0, ele é múltiplo de 5 e o resultado é tratado
// como um valor falso (pois é 0)

(i%5 ? '' : 'Buzz' )

// Quando o módulo de i por 5 for falso (for 0)
// ele é múltiplo de 5 e o Buzz será adicionado
// a string que está sendo processada para
// logo logo aparecer no console

// Caso deseje comparar com mais números
// é só adicionar um + e os parênteses com a comparação de sua escolha.

// Ex.: 

+ (i%9 ? '' : 'Nezz' )



||i)

// caso as comparações feitas com os módulos
// de i com os números 3 e 5 realizadas anteriormente
// tiverem resultado em uma string vazia ("")
// tal string vazia é considerada como um valor falso
// resultando em algo desse tipo

console.log(""||i)

// com isso o console.log irá ignorar o valor falso
// da string vazia e irá seguir para o valor após
// o operador || (que representa OU ou em inglês OR),
// que no caso é o valor numérico atualmente iterado.

// Ou seja, ou Fizz, ou Buzz, ou FizzBuzz ou é o número

// após o console.log(), o valor de i passará pela checagem
// i < 100
// se i for menor que 100, recomeça o loop de 1 linha novamente
// caso não for menor que 100, para por aí.


// Bem, espero ter ajudado você.

// Obrigado pela sua atenção, e até breve!