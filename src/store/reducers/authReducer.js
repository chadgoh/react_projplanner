const initState = {
    authError: null
}


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login Failed'

            };
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            };

        case 'SIGNOUT_SUCCESS':
            console.log('Signed out')
            return state;

        case 'SIGNUP_SUCCESS':
            console.log("Sign up success")
            return {
                ...state,
                authError: null
            };
            case 'SIGNUP_ERROR':
                    console.log("Sign up Failed")
                    return {
                        ...state,
                        authError: action.err.message
                    };
        default:
            return state;
    }

}


export default authReducer