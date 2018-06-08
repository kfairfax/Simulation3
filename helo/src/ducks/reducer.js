let initialState = {
    username: '',
    id: '',
    profilePic: ''
};

const GET_USER="GET_USER";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
        return Object.assign({}, state, {
            id: action.payload.id, 
            username: action.payload.username, 
            profilePic: action.payload.profilePic
        })

        default:
            return state
    }
}

export function getUser(user) {
    return {
        type: GET_USER,
        payload: {
            id: user.id,
            username: user.username,
            profilePic: user.profilePic
        }
    }
}





