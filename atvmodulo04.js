
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno);


var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
function retornaEstado (value){
    if (value.charAt(0) == "S") 
    return value;
}
var resultado = estados.filter(retornaEstado);
console.log(resultado);


var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function retornaEletronico (value){
    if (value.categoria == "Eletrônico")
    return value;
}
var produtosEletronico = produtos.filter(retornaEletronico);
produtosEletronico.forEach(produtoEletro => { 
    console.log(produtoEletro);
})
/* saída:
Object {descricao: "Smartphone", categoria: "Eletrônico"}
Object {descricao: "Notebook", categoria: "Eletrônico"}
*/