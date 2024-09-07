import Utils from "../../utils/reduxUtils";

const {
    LOGIN,
    SIGNUP,
    FORGOT,
    VERIFYOTP,
} = Utils.ActionName;

const initialState = {};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, ...action.payload };
        case SIGNUP:
            return { ...state, ...action.payload };
        case FORGOT:
            return { ...state, ...action.payload };
        case VERIFYOTP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};