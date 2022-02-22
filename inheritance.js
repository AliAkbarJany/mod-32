class TeamMember {
    name;
    designation = "web development";
    address = "BD";

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}

class Support extends TeamMember {
    groupSupportTime;

    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    supportSession() {
        console.log(this.name, 'start a support session');
    }
}

const rafsan = new Support('rafsan janu talukder', 'bangladesh', 11);
console.log(rafsan);
rafsan.supportSession();

class StudentCare extends TeamMember {

    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
}

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);
alia.buildARoutine('ulta-palta-abul');


class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}
const sumon = new NeptuneDev('sumon ptoary', 'chaina', 'android studio');
console.log(sumon);
sumon.releaseApp('1.4.5');