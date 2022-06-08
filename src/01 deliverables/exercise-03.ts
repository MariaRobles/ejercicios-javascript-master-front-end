console.log("************** DELIVERABLE 03 *********************");

//clone

interface person {
    name: string;
    surname: string;
    country: string;
};

const yo: person = { 
    name: "Maria", 
    surname: "Navarrete", 
    country: "SPA" 
};

const clone = (source:person) => {
  const copyPerson = {...source};
  return copyPerson;
}
console.log(clone(yo));

//merge

interface intA {
    name : string;
    surname: string;
    country: string;
}

interface intB {
    name: string;
    age: number;
    married: boolean;
}
