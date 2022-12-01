// var operation = document.getElementById("calcul");
// function afficherOperation(n){

//     operation.value = operation.value + n;
// }

// function calcul(){
//     let a =  operation.value;
//     let b = eval(a);
//     operation.value = b;
// }

// function reinit(){
//     operation.value = "";
// }
// var main = document.getElementById("socle");
// main.addEventListener("click", afficherVal);

// let valeur = document.getElementsByClassName("btn");
// console.log(valeur);
// function afficherVal(){
//     // console.log("geggegegege");
//     for (let index = 0; index < 15; index++) {

//         function xx() {
//             console.log(valeur[index].textContent);
//         }
//         var valeur = document.getElementsByClassName("btn");
//         valeur[index].addEventListener("click", xx)
        
        
//     }
// }
// valeur[].addEventListener("click", afficherVal);

var main = document.getElementById("socle");
let valeur = document.getElementsByClassName("btn");

function afficherVal(){
    for (let index = 0; index < valeur.length; index++) {

        function display() {
            console.log(valeur[index].textContent);
            let n = valeur[index].textContent
            function afficherOperation(n){
                var operation = document.getElementById("calcul");
                operation.value = operation.value + n;
                
                let a = operation.value;
                let b = eval(a);
                console.log(b);
            }
            afficherOperation(n);
        }

        // var valeur = document.getElementsByClassName("btn");
        valeur[index].addEventListener("click", display);
        // valeur[9].addEventListener("click", calcul)

        // function calcul(){
        //     let a = operation.value;
        //     let b = eval(a);
        //     console.log(a);

        // }
    }
}
main.addEventListener("click", afficherVal());


                        

            // ----------------------------------------


            // n = valeur[index].textContent;
            // console.log(index);