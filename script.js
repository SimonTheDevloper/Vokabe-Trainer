let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};

function checkJSONWörterBuchStatus(){
    	if(Object.keys(dictionary).length == 0) {
        console.log("Wörter-Buch ist leer");
        document.getElementById('vokabelAbfrageForm').style.display = 'none'; // Verstecke das Formular
        document.getElementById('empty-message').style.display = 'block';  // Zeige die Leere-Meldung

    } else {
        console.log("Wörter-Buch ist NICHT leer!");
        document.getElementById('vokabelAbfrageForm').style.display = 'block'; // Zeige das Formular
        document.getElementById('empty-message').style.display = 'none';   // Verstecke die Leere-Meldung
        nextVocabulary(); // Rufe nextVocabulary auf, wenn das Wörterbuch nicht leer ist
    }
}
let randomGermanWord;

function addVocabulary() {
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary(){
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}?`;
}

function compare(){
    if(germanText.value == randomGermanWord) {
        text.innerHTML = 'Richtig!!';
    } else {
        text.innerHTML = 'Falsch!!';
    }
    germanText.value = '';
    nextVocabulary();
}