function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct Output: Hello, Jane, Doe
console.log(greeter(user.join(' '))); // Correct output after converting array to string