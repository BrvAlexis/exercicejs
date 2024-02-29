const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// Question 1: Filtre les entrepreneurs nés dans les années 70
// Utilise la méthode filter pour créer un nouveau tableau avec les entrepreneurs nés dans les années 1970
const entrepreneurs70s = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log("Entrepreneurs nés dans les années 70 :", entrepreneurs70s);

// Question 2: Array contenant le prénom et le nom des entrepreneurs
// Utilise la méthode map pour créer un nouveau tableau avec des objets contenant le prénom et le nom
const namesArray = entrepreneurs.map(entrepreneur => ({ first: entrepreneur.first, last: entrepreneur.last }));
console.log("Array avec prénom et nom des entrepreneurs :", namesArray);

// Question 3: Calcul de l'âge actuel de chaque inventeur
// Obtient l'année actuelle
const currentYear = new Date().getFullYear();
//utilise map pour créer un tableau avec les noms et âges des entrepreneurs
const agesArray = entrepreneurs.map(entrepreneur => ({
  name: `${entrepreneur.first} ${entrepreneur.last}`,
  age: currentYear - entrepreneur.year
}));
console.log("Âge actuel de chaque inventeur :", agesArray);

// Question 4: Trie les entrepreneurs par ordre alphabétique du nom de famille
// Utilise la méthode sort pour trier les entrepreneurs par ordre alphabétique du nom de famille
const sortedEntrepreneurs = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log("Entrepreneurs triés par ordre alphabétique du nom de famille :", sortedEntrepreneurs);