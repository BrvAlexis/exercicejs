// Fonction qui convertit un ARN en une chaîne d'acides aminés
function arnToProteine(arn) {
    // Dictionnaire des acides aminés et de leurs codons correspondants Un objet codonToAmino qui associe chaque codon à son acide aminé correspondant.
    const codonToAmino = {
        "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine",
        "AGU": "Sérine", "AGC": "Sérine",
        "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
        "UUA": "Leucine", "UUG": "Leucine",
        "UUU": "Phénylalanine", "UUC": "Phénylalanine",
        "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine",
        "AGA": "Arginine", "AGG": "Arginine",
        "UAU": "Tyrosine", "UAC": "Tyrosine"
    };

    // Découpe l'ARN en codons de 3 lettres  Utilisation de la méthode match avec une expression régulière pour découper l'ARN en codons de 3 lettres
    const codons = arn.match(/.{1,3}/g);

    // Traduit chaque codon en acide aminé  Utilisation de la méthode map pour traduire chaque codon en son acide aminé correspondant à l'aide du dictionnaire.
    const proteine = codons.map(codon => codonToAmino[codon]);

    return proteine.join('-'); // Utilisation de la méthode join pour former une chaîne unique avec des acides aminés séparés par des tirets.
}

// ARN à traduire en protéines
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

// Traduit et imprime le résultat en console
console.log("ARN 1 :", arnToProteine(arn1));
console.log("ARN 2 :", arnToProteine(arn2));