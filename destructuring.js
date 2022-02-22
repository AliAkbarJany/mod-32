const fish = { name: 'hilsha', price: 2000, zone: 'padma', id: 989, color: 'silver' };

/* console.log(fish.zone);
console.log(fish.price, fish.name, fish.zone, fish.color);
console.log(fish.name); */

/* const fishId = fish.id;
const fishZone = fish.zone;
const fishName = fish.name; */

/* console.log(fishId);
console.log(fishId, fishZone);
console.log(fishId, fishName); */

const { price, id, zone, name } = fish;

console.log(price, id, zone, name);

const company = {
    Name: 'gp',
    ceo: { Name: 'amir', Id: 3, address: 'dhaka' },
    web: { work: 'website development', employee: 23 },
};

const work = company.web.work;
console.log(work);/* output==== website development  */

// const work = company.web;
// console.log(work);/* output===  { work: 'website development', employee: 23 } */

/* const Name = company.Name;
console.log(Name); */

/* const Name = company.ceo.Name;
console.log(Name);

const Id = company.ceo.Id;
console.log(Id); */

const { Name, Id } = company.ceo;
console.log(Name, Id);

const { employee } = company.web;
console.log(employee);
