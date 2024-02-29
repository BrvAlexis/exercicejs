const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  // Question 1: Est-ce que tous les livres ont été au moins empruntés une fois?
const allBooksRented = books.every(book => book.rented > 0); // Utilise la méthode every pour vérifier si tous les livres ont été empruntés au moins une fois.
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? :", allBooksRented);

// Question 2: Livre le plus emprunté
const mostRentedBook = books.reduce((max, book) => (book.rented > max.rented) ? book : max); // Utilise la méthode reduce pour trouver le livre avec le nombre maximal d'emprunts.
console.log("Livre le plus emprunté :", mostRentedBook);

// Question 3: Livre le moins emprunté
const leastRentedBook = books.reduce((min, book) => (book.rented < min.rented) ? book : min); 
console.log("Livre le moins emprunté :", leastRentedBook);

// Question 4: Trouve le livre avec l'ID: 873495
const bookWithId873495 = books.find(book => book.id === 873495);// Utilise la méthode find pour trouver le livre avec l'ID spécifique
console.log("Livre avec l'ID 873495 :", bookWithId873495);

// Question 5: Supprime le livre avec l'ID: 133712
const indexToRemove = books.findIndex(book => book.id === 133712); // Utilise findIndex pour obtenir l'index du livre avec l'ID spécifique, puis splice pour le supprimer
books.splice(indexToRemove, 1); // Supprime le livre avec l'ID spécifié, même s'il n'existe pas
console.log("Livre avec l'ID 133712 supprimé  :", books);

// Question 6: Trie les livres par ordre alphabétique
// Utilise sort directement sur tous les livres 
const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", sortedBooks);
