const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function generatePasswords() {
    let password1Content = "";
    let password2Content = "";
    for (let i = 0; i < 16; i++) {
        password1Content += characters[Math.floor(Math.random() * characters.length)];
        password2Content += characters[Math.floor(Math.random() * characters.length)];
    }
    password1.textContent = password1Content;
    password2.textContent = password2Content;

}

function copyPassword1() {
    let copyText = document.getElementById("password1");
    navigator.clipboard.writeText(copyText.textContent);
    let copiedSpan = document.getElementById("copied1");
    // To show the element
    copiedSpan.style.visibility = "visible";

    // To hide the element again
    setTimeout(() => {
        copiedSpan.style.visibility = "hidden";
    }, 2000); // Adjust the time as needed
}

function copyPassword2() {
    let copyText = document.getElementById("password2");
    navigator.clipboard.writeText(copyText.textContent);
    let copiedSpan = document.getElementById("copied2");
    // To show the element
    copiedSpan.style.visibility = "visible";

    // To hide the element again
    setTimeout(() => {
        copiedSpan.style.visibility = "hidden";
    }, 2000); // Adjust the time as needed
}











