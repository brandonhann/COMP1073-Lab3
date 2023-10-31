function Burger({
    // default values
    bun = '',
    vegetables = [],
    cheeses = [],
    sauces = [],
    pattyType = '',
    pattyCount = 0,
    extras = []
} = {}) {
    // burger props
    this.bun = bun;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.pattyType = pattyType;
    this.pattyCount = pattyCount;
    this.extras = extras;

    // description of the burger
    this.desc = function () {
        let sentence = `This is a ${this.pattyCount}-patty ${this.pattyType} burger with a ${this.bun} bun.`;

        if (this.vegetables.length > 0) {
            sentence += ` It has ${this.vegetables.join(', ')}.`;
        }
        if (this.cheeses.length > 0) {
            sentence += ` Cheeses included are: ${this.cheeses.join(', ')}.`;
        }
        if (this.sauces.length > 0) {
            sentence += ` Sauces added are: ${this.sauces.join(', ')}.`;
        }
        if (this.extras.length > 0) {
            sentence += ` Extras include: ${this.extras.join(', ')}.`;
        }

        return sentence;
    };
}

// for extra functionality I added randomization of the burger properties
Burger.randomize = function () {
    const buns = ['plain', 'whole grain', 'gluten-free', 'sesame seed'];
    const vegetables = ['lettuce', 'tomato', 'onion', 'pickles'];
    const cheeses = ['cheddar', 'swiss', 'mozzarella'];
    const sauces = ['mayo', 'ketchup', 'mustard', 'relish'];
    const pattyTypes = ['beef', 'chicken', 'vegetarian'];
    const pattyCounts = [1, 2, 3];
    const extras = ['pickles', 'hot peppers', 'olives', 'bacon'];

    // get a random item from an array
    const getRandomSingle = (array) => array[Math.floor(Math.random() * array.length)];

    // get a random number of items from an array
    const getRandomMultiple = (array) => array.filter(() => Math.random() > 0.5);

    // return a new burger with random props
    return new Burger({
        bun: getRandomSingle(buns),
        vegetables: getRandomMultiple(vegetables),
        cheeses: getRandomMultiple(cheeses),
        sauces: getRandomMultiple(sauces),
        pattyType: getRandomSingle(pattyTypes),
        pattyCount: getRandomSingle(pattyCounts),
        extras: getRandomMultiple(extras)
    });
};

// create a burger
const getRandomBurger = Burger.randomize();

// log the description
console.log(getRandomBurger.desc());