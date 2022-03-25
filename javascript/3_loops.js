//Crie um objeto que contenha como propriedades da sua banda favorita
//Crie um Loop que mostre os nomes dos integrantes, não os papeis.
const integrantes ={
  vocalista: 'paulo ricardo'
  guitarrista:"pereira",
  baixista:"Guilherme",
  baterista: 'vinicius'
};


for (var i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}

for( let integrantes of integrantes) console.log(integrantes);
for( let integrantes in integrantes) console.log(integrantes);