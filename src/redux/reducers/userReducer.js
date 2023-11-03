const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        case "REMOVE_USER":
            return state.filter((user) => user.id !== action.payload);

        default:
            return state;
    }
}

export default userReducer;