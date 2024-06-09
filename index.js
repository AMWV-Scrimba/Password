const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];



function generatePasswords() {
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let password1Content = "";
    let password2Content = "";
    for (let i = 0; i < 16; i++) {
        password1Content += characters[Math.floor(Math.random() * characters.length)];
        password2Content += characters[Math.floor(Math.random() * characters.length)];
    }
    password1.textContent = password1Content;
    password2.textContent = password2Content;
}
