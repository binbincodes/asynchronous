function satu() {
    console.log("satu");
}
function dua() {
    console.log('function 2 mau di eksekusi...')
    setTimeout(() => {
        console.log("dua");
    }, 3000)

}
function tiga() {
    console.log("tiga");
}

satu();
dua();
tiga();

const token = ~~[Math.random() * 123456]
function login(username) {
    return {token, username}
}

function getUser(token) {
    if(token)
    return {apiKey: "xkey123"}
}

const user = login("sabrina");

console.log(user);

const apiKey = getUser(user.token);
console.log(apiKey);