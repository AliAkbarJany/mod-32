class Support {
    name;
    designation = 'web develop';
    address = 'BD';
    constructor(person, address) {
        this.name = person;
        this.address = address;
    }

    supportSession() {
        console.log(this.name, 'start a support session')
    }
}

const amir = new Support('amir khan', 'bangladesh');
console.log(amir);
amir.supportSession();


const rafsan = new Support('rafsan jany');
console.log(rafsan);
rafsan.supportSession();
