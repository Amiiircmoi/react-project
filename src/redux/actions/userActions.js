export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user
})

export const deleteUser = (id) => ({
    type: 'REMOVE_USER',
    payload: id
})