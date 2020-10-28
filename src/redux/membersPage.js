import { addMember, getAllMembers } from "../api/membersApi";
const ADD_USER = 'ADD_USER';
const SET_MEMBERS = 'SET_MEMBERS';
const TOGGLE_ERROR = 'TOGGLE_ERROR';

let initialState = {

    members: [],
    error: 0,

}

const membersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:

            return {
                ...state,
                members: [...state.members, action.member]
            }

        case SET_MEMBERS:
            return {
                ...state,
                members: action.members
            }
        case TOGGLE_ERROR:
            return {
                ...state,
                error: action.bool
            }
        default:
            return state;

    }

}

export const setUsers = (members) => ({type: SET_MEMBERS, members})

export const addUser = (member) => ({ type: ADD_USER, member });

export const setError = (bool) => ({type: TOGGLE_ERROR, bool})

export const addUserThunk = (member) => (dispatch) => {
    
    addMember(member)
        .then(data => {
            debugger
            if(!data.error){
                dispatch(addUser(data))
            }else{
                console.log(data.error + " add member")
            }

        })

}

export const getSetUsersThunk = (token) => (dispatch) => {

    debugger
    getAllMembers(token)
        .then(data => {
            debugger
            if(!data.error){

                dispatch(setUsers(data))

            }else{

                console.log(data.error + " get members")
                dispatch(setUsers([]))

            }

        })

}

export default membersReducer;