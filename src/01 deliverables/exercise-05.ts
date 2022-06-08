console.log("************** DELIVERABLE 05 *********************");


class SlothMachine {
    counter: number;

    constructor(){
        this.counter = 0;
    }

    //type Jugar = string & number; 

    play = () =>  {
        const results: boolean[] = [];
        for (var i = 0; i < 3; i++) {
            const rand: boolean = (Math.random() < 0.5); //random boolean
            results.push(rand);
        }
        console.log("resultado de la tirada = ", results);
        const price:boolean = results.every(value => value === true);
        if (price){
            console.log("Congratulations!!!. You won ", this.counter, "coins!!" );
            this.counter = 0;
        } else {
            console.log("Good luck next time!!");
            this.counter = this.counter += 1;
        }
        console.log("saldo = ", this.counter);
    }  
}


const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();



// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 3 coins!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 2 coins!!"