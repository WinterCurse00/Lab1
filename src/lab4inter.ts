interface Person {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}
interface PersonJob extends Person {
    profession: string;
    salary: number;
}

const user: PersonJob = {
    name: "Agachi Daniel",
    age: 22,
    email: "daniel.agachi@iis.utm.md",
    address: "Independentii 4",
    phone: "0896534223",
    profession: "Engineer",
    salary: 5000
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.address);
console.log(user.phone);
console.log(user.profession);
console.log(user.salary + "$");
