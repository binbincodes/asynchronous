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

// const token = ~~[Math.random() * 123456]

// const pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
function login(username, callback) {
    setTimeout(() => {
        callback({ token, username })
    }, 200)

}

function getUser(token, callback) {
    if (token)
        setTimeout(() => {
            callback({ apiKey: "xkey123" })
        }, 500)
}

function getPictures(apiKey, callback) {
    console.log('processing pictures now....')
    if (apiKey)
        setTimeout(() => {
            callback({pic: pictures}) 
        }, 1500)

}

login("sabrina", function (response) {
    const { token } = response
    getUser(token, function (response) {
        const { apiKey } = response
        getPictures(apiKey, function (response) {
            const {pic} = response
            console.log(pic)
    })
})
});

// console.log(user.token)
// // const apiKey = getUser(user.token);
// console.log(apiKey);

// const getUserPicture = getPictures(apiKey)
// console.log(getUserPicture)
