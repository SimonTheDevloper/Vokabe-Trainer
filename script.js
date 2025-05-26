    let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
    let randomGermanWord;

    const germanText = document.getElementById('germanText');
    const englishText = document.getElementById('englishText');
    const vocabularyList = document.getElementById('vocabularyList');
    const word = document.getElementById('word');
    const text = document.getElementById('text');
    const germanTextInput = document.getElementById('germanTextInput');

    function checkJSONWörterBuchStatus() {
        if (Object.keys(dictionary).length === 0) {
            document.getElementById('vokabelAbfrageForm').style.display = 'none';
            document.getElementById('empty-message').style.display = 'block';
        } else {
            document.getElementById('vokabelAbfrageForm').style.display = 'block';
            document.getElementById('empty-message').style.display = 'none';
            nextVocabulary();
        }
    }

    function addVocabulary() {
        const german = germanText.value.trim();
        const english = englishText.value.trim();

        if (!german || !english) {
            alert("Bitte beide Felder ausfüllen.");
            return;
        }

        dictionary[german] = english;
        localStorage.setItem('dictionary', JSON.stringify(dictionary));
        germanText.value = '';
        englishText.value = '';
        render();
    }

    function render() {
        vocabularyList.innerHTML = '';
        for (let key in dictionary) {
            vocabularyList.innerHTML += `<li class="Vokabelliste">${key} - ${dictionary[key]}</li>`;
        }
    }

    function nextVocabulary() {
        let keys = Object.keys(dictionary);
        randomGermanWord = keys[Math.floor(Math.random() * keys.length)];
        word.innerHTML = `${dictionary[randomGermanWord]}?`;
    }

    function compare() {
        const userInput = germanTextInput.value.trim();
        if (userInput === randomGermanWord) {
            text.innerHTML = '✅ Richtig!!';
        } else {
            text.innerHTML = `❌ Falsch! Richtige Antwort: ${randomGermanWord}`;
        }
        germanTextInput.value = '';
        nextVocabulary();
    }

n
    
