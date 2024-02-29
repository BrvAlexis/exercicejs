// Fonction pour simuler la conversation avec le bot adolescent
function chatBotAdo(userInput) {
    // Règle 4: Si on lui envoie un message vide
    if (userInput.trim() === "") {
        return "t'es en PLS ?";
    }

    // Règle 2: Si on lui hurle trop dessus
    if (userInput === userInput.toUpperCase()) {
        return "Pwa, calme-toi...";
    }

    // Règle 1: Si on lui pose une question
    if (userInput.endsWith("?")) {
        return "Ouais Ouais...";
    }

    // Règle 3: Si la phrase contient le mot "Fortnite"
    if (userInput.toLowerCase().includes("fortnite")) {
        return "on s' fait une partie soum-soum ?";
    }

    // Règle 5: Pour tout autre phrase
    return "balek.";
}

// Interaction avec l'utilisateur via la fenêtre prompt
let userInput = prompt("Parle au bot adolescent :");

// Affichage de la réponse du bot en console
console.log(chatBotAdo(userInput));
