interface person {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}
interface personjob extends person {
    occupation: string;
    salary: number;
}

const user: personjob = {
    name: "Agachi Daniel",
    age: 22,
    email: "daniel.agachi@iis.utm.md",
    address: "Independentii 4",
    phone: "0896534223",
    occupation: "Engineer",
    salary: 5000
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.address);
console.log(user.phone);
console.log(user.occupation);
console.log(user.salary + "$");
