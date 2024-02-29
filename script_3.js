// Demande à l'utilisateur le nombre d'étages
let nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertit la saisie en un nombre entier
let nombreEtagesInt = parseInt(nombreEtages);

// Boucle pour chaque étage
 for (let i = 1; i <= nombreEtagesInt; i++) { //i : Représente le numéro de l'étage actuel dans la pyramide. La boucle itère sur chaque étage de 1 à nombreEtagesInt.
        let ligne = '';

 // Boucle pour ajouter les espaces
for (let j = 1; j <= nombreEtagesInt - i; j++) {//j : Représente le nombre d'espaces à ajouter avant les caractères # sur chaque ligne. Cette boucle itère de 1 à nombreEtagesInt - i, ce qui signifie qu'à chaque étage, le nombre d'espaces diminue car on monte dans la pyramide.
     ligne += ' ';
    }

// Boucle pour ajouter les caractères #
for (let k = 1; k <= i; k++) { //k : Représente le nombre de caractères # à ajouter sur chaque ligne. Cette boucle itère de 1 à i, ce qui signifie que le nombre de caractères # augmente à mesure que l'on monte dans la pyramide.
    ligne += '#';
     }

// Affiche la ligne dans la console
console.log(ligne);
}
