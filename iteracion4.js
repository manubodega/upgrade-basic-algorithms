//.............................EJERCICIO 1.1................................//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log(avengers[0])

//.............................EJERCICIO 1.2................................//
avengers[0] = "IRONMAN"
console.log(avengers[0])

//.............................EJERCICIO 1.3................................//
alert(avengers.length)

//.............................EJERCICIO 1.4................................//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//.............................EJERCICIO 1.5................................//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0] + "  " + rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//.............................EJERCICIO 1.6................................//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]
rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)
