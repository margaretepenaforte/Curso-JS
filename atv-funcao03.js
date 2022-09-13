function Valor(){
  return "Valor do IRPF";
}
console.log(Valor);


function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(3, 4));


const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
