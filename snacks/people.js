const people = [

    {name: 'Giuseppe', surname: 'Lisi', age: '25'},
    {name: 'Annalisa', surname: 'Moro', age: '25'},
    {name: 'Alessia', surname: 'Androne', age: '20'},
    {name: 'Andrea', surname: 'Basili', age: '16'},
    {name: 'Fabio', surname: 'Moro', age: '25'},
    {name: 'Riccardo', surname: 'Rossi', age: '14'},
    {name: 'Carlos', surname: 'Castagnaro', age: '24'},
    {name: 'Rita', surname: 'Fabiani', age: '16'},
    {name: 'Carlo', surname: 'Natale', age: '17'}

];

const canDrive = people.map(person => {
    return person.age >= 18 ? {...person, 'can-drive': 'Può guidare'} : {...person, 'can-drive' : 'Non può guidare'}
});

console.log(canDrive);
