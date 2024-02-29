
function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}


let user = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertit la chaîne de caractères en un nombre entier en utilisant parseInt
let userNumber = parseInt(user);

let result = factorialize(userNumber);

console.log("Le résultat est : " + result);


