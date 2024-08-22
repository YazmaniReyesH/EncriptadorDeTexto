document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;

    if (!isValidInput(inputText)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    }

    let encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
    document.getElementById('input-text').value = '';

    showOutputElements();
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;

    if (!isValidInput(inputText)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    }

    let decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
    document.getElementById('input-text').value = '';

    showOutputElements();
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function isValidInput(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

function showOutputElements() {
    document.getElementById('no-message').style.display = 'none';
    document.getElementById('enter-text').style.display = 'none';
    document.getElementById('output-text').style.display = 'block';
    document.getElementById('copy-btn').style.display = 'block';
}