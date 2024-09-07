import Utils from "../../utils/reduxUtils";

const { PROFILE,COMPANYINFO,PROFILEINFO,CLIENTINFO } = Utils.ActionName;

const initialState = {
  personalInfoDetails:[],
  companyInfoDetails:[],
  profileInfoDetails: {},
  clientInfoDetails:{}
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return { ...state, ...action.payload };
    case COMPANYINFO:
      return { ...state, ...action.payload };
    case PROFILEINFO:
      console.log("action",action.payload)
      return { ...state, profileInfoDetails: {...state.profileInfoDetails, ...action.payload.data }};
      // return {...state,...action.payload}
    case CLIENTINFO:
        console.log("action",action.payload)
        return { ...state, clientInfoDetails: {...state.clientInfoDetails, ...action.payload.data }};  
    default:
      return state;
  }
};
