const animals = [

  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
  { nome: "tigre", famiglia: "felidi", classe: "mammiferi" },
  { nome: "volpe", famiglia: "canidi", classe: "mammiferi" },
  { nome: "aquila", famiglia: "accipitridi", classe: "uccelli" },
  { nome: "squalo bianco", famiglia: "lamnidi", classe: "pesci" },
  { nome: "rana", famiglia: "ranidi", classe: "anfibi" },
  { nome: "cobra", famiglia: "elapidi", classe: "rettili" },
  { nome: "orso", famiglia: "ursidi", classe: "mammiferi" }

]

const mammiferi = animals.filter(animal => animal.classe === 'mammiferi');

console.log(mammiferi);
