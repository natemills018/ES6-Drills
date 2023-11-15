let nameList = [
    { firstName: "Nate", lastName: "Mills" },
    { firstName: "Courtney", lastName: "White" },
    { firstName: "Brad", lastName: "Pitt" },
    { firstName: "Matt", lastName: "Morgan" },
    { firstName: "Michelle", lastName: "Mills" },
    { firstName: "Roger", lastName: "Mills" }
]

let favMovie = (name = 'Tommy Wiseau', movie ='The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

let myPersonality = (alias, location, food) => console.log(`This is my ${alias}, this is where I want to go ${location}, and this is what I want to eat ${food}`);

let classArray = ['Batman','Circus','Popcorn'];

let classCopy = [...classArray];

let myName = ["Nate Mills"]

function wheresWaldo (waldo) {
    let waldoFound = [...waldo];
    for (let i = 0; i < waldo.length; i++) {
        console.log(waldoFound);
    }
}

wheresWaldo('Nate M');

let getFirstName = () => {
    for (let i = 0; i < nameList.length; i++) {
        const names = nameList[i];
        console.log(names.firstName)
    }
};

let getFirstNameConcise = name => console.log(name.firstName);

let doMath = (a,b) => ({
    exponent: a ^ b,
    product: a * b
});


let showMath = doMath(3,4);


function loggingTemplates () {
    console.log(`The this is the exponent of showMath ${showMath.exponent} and this is the ${showMath.product}`);
}

loggingTemplates();


//getFirstName();

getFirstNameConcise(nameList[3]);



favMovie('Nate Mills','Interstellar');


