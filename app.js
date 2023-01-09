let result = document.getElementById('ressult')

try {
    result.innerHTML = "Je ne comporte aucune erreur"
}
catch (e) {
    alert("L'élément " + result + " n'existe pas !")
}