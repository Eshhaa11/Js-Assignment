//3. a) Create a person (firstName, lastName, age) object, with a nested address (city, street, zipCode) object
 //b) Add a getFullName method on the person object that prints out the first name and last name
 //c) Access and display the address properties
 //d) Display the full name of Person object using the method you have created

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

console.log("City:", person.address.city);
console.log("Street:", person.address.street);
console.log("Zip Code:", person.address.zipCode);


console.log("Full Name:", person.getFullName());