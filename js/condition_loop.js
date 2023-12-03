// Ans1.
// Conditional statment in javascript allow you to make decision in your code based on whether a certain condition is true or false. The most comman conditional statments in javascript are 'if','else'
// # Syntax 
// if(condition){
//     code is execute if condition is true
// } else {
//     code is execute if condition is false
// }
// #example
const x=20
if(x>18) {
    console.log('you are adult')
} else {
    console.log('teenager')
}
console.log('Ans2')


const y=100
if(y>90){
    console.log('A Grade')
} else if (90>=y>70) {
    console.log('B Grade')
} else if (70>=y>50) {
    console.log('C Grade')
} else {
    console.log('F Grade')
}

console.log('Ans3')
//loops is js are used to repeatedly execute a block of code as long as a specified condition is true. They are essential for automating repetitve tasks,iterating over arrays, and handling scenarios where code needs to be executed multiple times.
//    1.'for' loop:
//        # syntax: 
        // for(initialization;Condition;increment/decrement) {
        //     code is executed in each iteration
        // }
        // # Example
         let i=0
        for(i;5>i;i++) {
            console.log(i);
        }
        // 2 'while' loop
        // syntex:
        // while(condition){
        //     code is execute as long as condition is true 
        // }
        // # example
        let p=0
        while(5>=p){
            console.log(p);
            p++
        }   
        // 3 'do ... while' loop
        // syntex:
        // do{
        //     code is executed at list once
        // } while(condition);
        // # example 
        let z=5;
        do {
             console.log(z);
             z--;
        } while (z>=0);

        console.log('Ans4')

        let w=10
        for(w++;25>=w;w++){
            console.log(w);
        }

        console.log('Ans5')

        let j=1
        while(25>=j){
            console.log(j);
            j++;
        }

        let f=25
        while(f>=1){
            console.log(f);
            f--;
        }