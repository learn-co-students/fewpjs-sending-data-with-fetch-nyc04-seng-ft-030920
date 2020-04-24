function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(r => r.json())
    .then((user) => {
        // console.log(user.id)
        createUserId(user)
    })
    .catch((error) => {
        let errorMessage = document.createElement("p")
        errorMessage.innerHTML = error.message
        let indexScript = document.querySelector("script")
        indexScript.prepend(errorMessage)
    })
}


function createUserId(user) {
    let userId = document.createElement("p")
    userId.innerHTML = user.id
    let indexScript = document.querySelector("script")
    indexScript.prepend(userId)
}