import { login, logout } from "../api/authAPI";

const SET_AUTH = 'SET_AUTH';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ADD_USER = 'ADD_USER';

let initialState = {

    id: '',
    login: '',
    isAuth: 0,
    isFetching: false,
    users: []

}

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH: {
            return {

                ...state,
                ...action.profile

            }
        }
        case TOGGLE_IS_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }

        }
        case ADD_USER:

            return {
                ...state,
                users: [...users, action.user]
            }

        default:
            return state;

    }

}

export const setAuth = (profile) => ({ type: SET_AUTH, profile });

export const toggleFetch = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const addUser = (user) => ({ type: ADD_USER, user });

export const getSetAuth = () => (dispatch) => {

    // dispatch(toggleFetch(true));

    // getMe()
    //     .then((data) => {

    //         dispatch(toggleFetch(false));

    //         if (data.resultCode === 0) {

    //             let profile = {
    //                 id: data.data.id,
    //                 login: data.data.login,
    //                 email: data.data.email,
    //                 isAuth: 1
    //             };
    //             dispatch(setAuth(profile));

    //         } else {

    //             dispatch(setAuth({ id: '', login: '', email: '', isAuth: 0 }));

    //         }

    //     })

    dispatch(setAuth({ id: 12166, login: "Dossym", isAuth: 1 }));

}

export const loginUserThunk = (email, password) => (dispatch) => {

    // login(email, password)
    //     .then(data => {

    //         debugger
            
    //         if (data.resultCode === 0 && data.userId === 12166) {

    //             dispatch(setAuth({ id: data.userId, login: "Dossym", isAuth: 1 }));

    //         } else {

    //             logout();

    //         }

    //     })

    dispatch(setAuth({ id: 12166, login: "Dossym", isAuth: 1 }));

}

export const logoutThunk = () => (dispatch) => {

    logout()
        .then(data=>{

            if(data.resultCode === 0){

                dispatch(setAuth({ id: '', login: '', isAuth: 0 }));

            }

        })

}

export default usersPageReducer;