const token = ~~[Math.random() * 123456]
const pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]

// promise
function login(username, callback) {
    console.log('processing token user now...')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username !== "sabrina") failed('sorry wrong data')
            success({token})
        }, 200)
    })
}

function getUser(token, callback) {
    console.log('processing apiKey now...')
    return new Promise((success, failed) => {
        if (!token) failed("no token")
        if (token)
            setTimeout(() => {
                callback({ apiKey: "xkey123" })
            }, 500)
    })

}

function getPictures(apiKey, callback) {
    console.log('processing pictures now....')
    if (apiKey)
        setTimeout(() => {
            callback({ pic: pictures })
        }, 1500)

}

const user = login("sabrina")
user.then(function (response) {
    const { token } = response
    getUser(token). then(function (response){
        const { apiKey } = response
        console.log(apiKey)
    }).catch(err => console.error(err))
}).catch(err => console.error(err))