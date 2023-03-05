const usersComponent = document.querySelector('.users')
const search = document.getElementById('search-users')
const cards = Array.from(document.querySelectorAll('.card'))
let value = undefined;
let userNumber = document.getElementById('number-of-users-in-list')

search.addEventListener('input', filterUser)

setUpUserListLength()

function filterUser(e) {
    value = e.target.value.toLowerCase()
    
    const filteredCards = cards.filter(card => {
    const username = card.children[1].children[0].textContent.toLowerCase()

    if (username.includes(value)) {
        return true
    }
    return false
})

    addFilteredUsersToDOM(filteredCards)
    setNumberOfUsersInList(filteredCards)
}

function addFilteredUsersToDOM(filteredCards) {
    usersComponent.textContent = ''

    filteredCards.forEach(fc => {
        usersComponent.append(fc)
    })
}

function setNumberOfUsersInList(filteredCards) {
    userNumber.textContent = 'Users: '
    userListLength = userNumber.textContent + " " + filteredCards.length + " / " + cards.length
    userNumber.textContent = userListLength
}

function setUpUserListLength() {
    userNumber.textContent = 'Users: '  + " " + cards.length + " / " + cards.length
}