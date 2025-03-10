# Async JavaScript - Promise & Async/Await Example

## 📌 Introduction
This project demonstrates how asynchronous JavaScript works using **Promises** and **Async/Await**. The example simulates a user authentication flow, retrieving a token, obtaining an API key, and fetching images asynchronously.

---

## 🛠️ Features
- **Token Generation**: Generates a random token upon login.
- **User Authentication**: Simulates user login with a callback and Promise.
- **API Key Retrieval**: Retrieves an API key after login.
- **Image Fetching**: Fetches an array of images using an API key.
- **Callback vs Promise vs Async/Await**: Shows different ways to handle asynchronous operations.

---

## 🔧 Code Breakdown

### 1️⃣ **Synchronous Function Execution**
```javascript
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
```
🔹 *Output order:* `satu`, `tiga`, then after 3 seconds `dua` executes (due to `setTimeout`).

### 2️⃣ **Using Callbacks**
```javascript
function login(username, callback) {
    setTimeout(() => {
        callback({ token, username })
    }, 200)
}
```
🔹 *Simulates a login process and returns a token.*

```javascript
function getUser(token, callback) {
    if (token)
        setTimeout(() => {
            callback({ apiKey: "xkey123" })
        }, 500)
}
```
🔹 *Uses the token to fetch an API key.*

```javascript
function getPictures(apiKey, callback) {
    console.log('processing pictures now....')
    if (apiKey)
        setTimeout(() => {
            callback({ pic: pictures })
        }, 1500)
}
```
🔹 *Uses the API key to fetch images asynchronously.*

### 3️⃣ **Using Promises**
```javascript
function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username !== "sabrina") reject('sorry wrong data')
            resolve({ token })
        }, 200)
    })
}
```
🔹 *Replaces callback with Promise for better readability.*

```javascript
function getUser(token) {
    return new Promise((resolve, reject) => {
        if (!token) reject("no token")
        setTimeout(() => {
            resolve({ apiKey: "xkey123" })
        }, 500)
    })
}
```
🔹 *Handles API key retrieval using Promise.*

```javascript
function getPictures(apiKey) {
    return new Promise((resolve, reject) => {
        if (!apiKey) reject("no apiKey, cannot access!")
        setTimeout(() => {
            resolve({ pic: pictures })
        }, 1500)
    })
}
```
🔹 *Handles fetching images asynchronously.*

### 4️⃣ **Using Async/Await**
```javascript
async function userDisplay() {
    try {
        const { token } = await login("sabrina")
        const { apiKey } = await getUser(token)
        const { pic } = await getPictures(apiKey)

        console.log(`
        Token Anda: ${token}
        API Key Anda: ${apiKey}
        Hasil Request Gambar Anda: ${pic}
    `)
    } catch (err) {
        console.log(err)
    }
}

userDisplay();
```
🔹 *Uses async/await for better readability and error handling.*

---

## 🚀 How It Works
1. The user **logs in**, generating a token.
2. The system **retrieves an API key** using the token.
3. Using the API key, it **fetches a list of images**.
4. The process is handled using **Callbacks, Promises, and Async/Await**.

---

## 🎯 Expected Output
```plaintext
satu
function 2 mau di eksekusi...
tiga
processing token user now...
processing apiKey now...
processing pictures now....
dua

Token Anda: 12345
API Key Anda: xkey123
Hasil Request Gambar Anda: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
```

---

## 📝 Notes
- **Callbacks** can lead to callback hell (nested functions).
- **Promises** improve readability but can still be complex.
- **Async/Await** makes the code cleaner and more synchronous-like.

---
