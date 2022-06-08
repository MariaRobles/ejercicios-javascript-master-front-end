console.log("************** DELIVERABLE 01 *********************");

const nombres: string[] = ["Mary", "José", "Silvia", "Lola"];

//Head

const getFirstName = ([primero]:string[]):string => primero; 
console.log(getFirstName(nombres));

//Tail

const tail = ([ , ...rest]):void => {    
    console.log(...rest);   
}

tail(nombres);   

//Init

const init = (array:string[]):void => {
  array.pop(); 
  console.log(array);
}

init(nombres);

//Last

const getLastName = (...arg):void => {
  console.log(arg[arg.length - 1]);
};
  
getLastName(...nombres);
