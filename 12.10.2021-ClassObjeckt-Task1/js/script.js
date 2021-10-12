class CityFact {
    constructor(Name, Population, Continent) {
        this.name = Name,
            this.population = Population,
            this.continent = Continent;
    }
}

let obj = new CityFact("Paris", "2,146,526", "Europe");

let task = (obj) => {
    let result = "";

    result = `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;

    return result;
};

alert(task(obj))