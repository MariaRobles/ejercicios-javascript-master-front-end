console.log("************** DELIVERABLE 02 *********************");

const array1:string[] = ["hola", "que "];
const array2:string[] = ["tal", "profe? "];
const array3:string[] = ["multiple", "array"];

const concat = ([...a]:string[], [...b]:string[]):void => {
  console.log("Contact: " +  a.join(' ') + b.join(' ')) 
};
concat(array1, array2);

