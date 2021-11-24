let usersArray = []

export const useUsers = () => {
    return usersArray.slice()
}

export const getUsers = () => {
    return fetch('http://localhost:8088/users')
        .then(dirtyUsers => dirtyUsers.json())
        .then(cleanUsers => {
            usersArray = cleanUsers
        })

}
