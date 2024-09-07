import Utils from "../../utils/reduxUtils";

const {JOBDESCRIPTIONFILEUPLOAD,CHATBOTDATA,CHATBOTDATA_LOADING,TONE_OF_VOICE,STORE_CHATBOT_PAYLOAD,EDITED_VACANCY_TEXT,SOCIAL_MEDIA_TEMPLATE,SHARE_VACANCY_TEXT} = Utils.ActionName;

const initialState= {
    jobDescriptionFileUploadDetails:[],
    vacancyText:{},
    storeChatbotPayload:[],
    socialMediaText:[],
    chatbotDataLoading: false,
    shareVacancyText:[]
}

export const jobDescriptionFileUploadReducer=(state=initialState,action)=>{
  switch(action.type){
    case JOBDESCRIPTIONFILEUPLOAD:
        return {...state,
          jobDescriptionFileUploadDetails: [...state.jobDescriptionFileUploadDetails, ...action.payload]};
    case CHATBOTDATA_LOADING:
            return { ...state, chatbotDataLoading: action.payload };      
    case CHATBOTDATA:
      console.log("action12",action.payload);
      return {
        ...state,
        vacancyText: [action.payload], 
        chatbotDataLoading: false
      };
      
    case SHARE_VACANCY_TEXT:
      console.log("action12",action.payload);
      return {
        ...state,
        shareVacancyText: action.payload, 
        chatbotDataLoading: false
      };
      
    case EDITED_VACANCY_TEXT:
      console.log("action12",action.payload);
      return {
        ...state,
        vacancyText: [action.payload], // Replace the old data
        chatbotDataLoading: false
      };
      // case STORE_CHATBOT_PAYLOAD:
      //   return {
      //     ...state,
      //     storeChatbotPayload:[action.payload],
      //     chatbotDataLoading: false
      //   }
    case TONE_OF_VOICE:
        console.log("action12",action.payload);
        return {
          ...state,
          vacancyText: [action.payload], // Replace the old data
          chatbotDataLoading: false
        };
    case SOCIAL_MEDIA_TEMPLATE:
      return {
        ...state,
        socialMediaText:[action.payload],
        chatbotDataLoading:false
      }
     default:
        return state;   
  }
}

