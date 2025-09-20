document.addEventListener('DOMContentLoaded', () => {
    const textToTypeElement = document.getElementById('text-to-type');
    const userInputElement = document.getElementById('user-input');
    const timeElement = document.getElementById('time');
    const wpmElement = document.getElementById('wpm');
    const accuracyElement = document.getElementById('accuracy');
    const restartBtn = document.getElementById('restart-btn');

    const textSnippets = [
        "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet.",
        "A pirate's life is a life of adventure. We sail the seas in search of treasure and freedom.",
        "JavaScript is a versatile programming language that powers the dynamic behavior of websites.",
        "To be or not to be, that is the question. A famous line from Shakespeare's Hamlet.",
        "The sun always shines brightest after the rain. A little bit of optimism can go a long way.",
        "Heave ho, heave ho, a pirate's life for me. We pillage, we plunder, we rifle, and loot."
    ];

    let timer;
    let time = 60;
    let currentText = '';
    let currentIndex = 0;
    let mistakes = 0;
    let isTestStarted = false;

    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * textSnippets.length);
        return textSnippets[randomIndex];
    }

    function updateTextToType() {
        currentText = getRandomText();
        textToTypeElement.innerHTML = '';
        currentText.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.innerText = char;
            textToTypeElement.appendChild(charSpan);
        });
        userInputElement.value = '';
        currentIndex = 0;
        mistakes = 0;
        isTestStarted = false;
    }

    function handleInput() {
        if (!isTestStarted) {
            isTestStarted = true;
            startTimer();
        }

        const typedText = userInputElement.value;
        const typedChars = typedText.split('');
        const textChars = textToTypeElement.querySelectorAll('span');

        let correctCount = 0;
        mistakes = 0;

        textChars.forEach((charSpan, index) => {
            const typedChar = typedChars[index];
            if (typedChar == null) {
                charSpan.classList.remove('correct', 'incorrect');
            } else if (typedChar === charSpan.innerText) {
                charSpan.classList.add('correct');
                charSpan.classList.remove('incorrect');
                correctCount++;
            } else {
                charSpan.classList.add('incorrect');
                charSpan.classList.remove('correct');
                mistakes++;
            }
        });

        currentIndex = typedText.length;

        const accuracy = Math.round(((currentIndex - mistakes) / currentIndex) * 100) || 100;
        accuracyElement.innerText = accuracy;

        if (currentIndex === currentText.length) {
            endTest();
        }
    }

    function startTimer() {
        timer = setInterval(() => {
            time--;
            timeElement.innerText = time;
            if (time === 0) {
                endTest();
            }
            const elapsedTime = 60 - time;
            const wpm = Math.round((((currentIndex - mistakes) / 5) / elapsedTime) * 60) || 0;
            wpmElement.innerText = wpm;
        }, 1000);
    }

    function endTest() {
        clearInterval(timer);
        userInputElement.disabled = true;
    }

    function resetTest() {
        clearInterval(timer);
        time = 60;
        timeElement.innerText = time;
        wpmElement.innerText = 0;
        accuracyElement.innerText = 100;
        userInputElement.disabled = false;
        userInputElement.value = '';
        updateTextToType();
        userInputElement.focus();
    }

    userInputElement.addEventListener('input', handleInput);
    restartBtn.addEventListener('click', resetTest);

    resetTest();
});
