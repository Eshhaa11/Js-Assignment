//4. Delete the address property in Person
//b) Access the address property, what does it display? Explain


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        city: 'India',
        street: 'Pramukh road',
        zipCode: '20018'
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};


delete person.address;

console.log(person.address); 
//It displays undefined
//Explanation:
//Because the address property doesnt exist anymore.

