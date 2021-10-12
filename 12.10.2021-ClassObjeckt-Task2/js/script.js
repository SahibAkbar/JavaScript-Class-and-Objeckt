class Student {
    constructor(Name) {
        this.name = Name;
    }
}
let ad = new Student("Tosu");
let ad1 = new Student("Rasim");
let ad2 = new Student("Qasim");

let method = [ad, ad1, ad2];

let task = (obj) => {
    let adName = [];

    for (let i = 0; i < obj.length; i++) {
        adName.push(obj[i].name);
    }

    return adName;
};

alert(task(method))