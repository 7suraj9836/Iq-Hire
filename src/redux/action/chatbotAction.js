import { toast } from "react-toastify";
import Utils from "../../utils/reduxUtils";


// export const jobDescriptionFileUpload = (id, value) => {
//     return async () => {
//       try {
//         const resData = await Utils.api.postApiCall(
//           Utils.EndPoint.companyInfo(id),
//           value,
//           "multi"
//         );
  
//         if (resData?.status === 201) {
//           toast.success(resData?.data?.message, {
//             autoClose: 2000,
//           });
//           return resData;
//         } else {
//           toast.error(resData?.data?.message, {
//             autoClose: 2000,
//           });
//         }
//       } catch (error) {
//         toast.error(error?.data?.message, {
//           autoClose: 2000,
//         });
//       }
//     };
//   };

export const chatbotData = (value,setLoading) => {
  console.log('value45',value);
  
  return async (dispatch) => {
    dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: true });
    // setLoading(true);
    try {
      const successCallback = (response) => {
        console.log('response12',response);
        if (response?.status === 200) {
          
          toast.success(response?.data?.message, {
            autoClose: 2000,
          });
          dispatch({ type: Utils.ActionName.CHATBOTDATA, payload: response?.data });
        } else {
          toast.error(response?.data?.message, {
            autoClose: 2000,
          });
        }
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
        // setLoading(false);
      };

      const errorCallback = (error) => {
        toast.error(error?.data?.message, {
          autoClose: 2000,
        });
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
        // setLoading(false);
      };

      await Utils.api.postApiCall(
        Utils.EndPoint.vacancyTextInfo,
      //  `https://iqhirevaccancy.dev.vinove.com/generate_vacancy_Text`,
      //  `https://iqhireapi.dev.vinove.com/ai/getVacancyText`,
        value,
        successCallback,
        errorCallback,
        ""
      );
    } catch (error) {
      toast.error(error?.data?.message, {
        autoClose: 2000,
      });
      dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
      // setLoading(false);
    }
  };
};

export const editedVacancyTextData = (value,setEditedVacancyText,setIsEditEnabled) => {
  console.log('value45',value);
  
  return async (dispatch) => {
    // dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: true });
    // setLoading(true);
    try {
      const successCallback = (response) => {
        console.log('response12',response);
        if (response?.status === 200) {
          
          toast.success(response?.data?.message, {
            autoClose: 2000,
          });
          dispatch({ type: Utils.ActionName.EDITED_VACANCY_TEXT, payload: response?.data });
          //  dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
          setEditedVacancyText(null);
          setIsEditEnabled(false);
        } else {
          toast.error(response?.data?.message, {
            autoClose: 2000,
          });
        }
       
      };

      const errorCallback = (error) => {
        toast.error(error?.data?.message, {
          autoClose: 2000,
        });
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
        // setLoading(false);
      };

      await Utils.api.putApiCall(
        Utils.EndPoint.editedVacancyText,
      //  `https://iqhirevaccancy.dev.vinove.com/generate_vacancy_Text`,
      //  `https://iqhireapi.dev.vinove.com/ai/getVacancyText`,
        value,
        successCallback,
        errorCallback,
        ""
      );
    } catch (error) {
      toast.error(error?.data?.message, {
        autoClose: 2000,
      });
      dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
      // setLoading(false);
    }
  };
};

// export const storeChatbotPayload=(payload)=>({
// type:Utils.ActionName.STORE_CHATBOT_PAYLOAD,
// payload
// })

export const toneOfVoice = (value) => {
  console.log('valuetov',value)
 return async (dispatch) => {
    dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: true });
    try {
      const successCallback = (response) => {
        if (response?.status === 200) {
          toast.success(response?.data?.message, {
            autoClose: 2000,
          });
          dispatch({ type: Utils.ActionName.TONE_OF_VOICE, payload: response?.data });
        } else {
          toast.error(response?.data?.message, {
            autoClose: 2000,
          });
        }
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
      };
       const errorCallback = (error) => {
        toast.error(error?.data?.message, {
          autoClose: 2000,
        });
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
      };

      await Utils.api.postApiCall(
        Utils.EndPoint.toneOfVoiceInfo,
        value,
        successCallback,
        errorCallback,
        ""
      );
    } catch (error) {
      toast.error(error?.data?.message, {
        autoClose: 2000,
      });
      dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
      // setLoading(false);
    }
  };
};

  export const jobDescriptionFileUpload = (value) => {
    return async () => {
      try {
        const successCallback = (response) => {
          if (response?.status === 201) {
            toast.success(response?.data?.message, {
              autoClose: 2000,
            });
          } else {
            toast.error(response?.data?.message, {
              autoClose: 2000,
            });
          }
        };
  
        const errorCallback = (error) => {
          toast.error(error?.data?.message, {
            autoClose: 2000,
          });
        };
  
        await Utils.api.postApiCall(
          Utils.EndPoint.chatbotFileUpload,
          // `https://iqhirepdf.dev.vinove.com/get_answers`,
          value,
          successCallback,
          errorCallback,
          "multi"
        );
      } catch (error) {
        toast.error(error?.data?.message, {
          autoClose: 2000,
        });
      }
    };
  };

  export const socialMediaTemplateData = (value) => {
    console.log('value45',value);
    
    return async (dispatch) => {
      dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: true });
      // setLoading(true);
      try {
        const successCallback = (response) => {
          console.log('response12',response);
          if (response?.status === 200) {
            
            toast.success(response?.data?.message, {
              autoClose: 2000,
            });
            dispatch({ type: Utils.ActionName.SOCIAL_MEDIA_TEMPLATE, payload: response?.data });
          } else {
            toast.error(response?.data?.message, {
              autoClose: 2000,
            });
          }
          dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
          // setLoading(false);
        };
  
        const errorCallback = (error) => {
          toast.error(error?.data?.message, {
            autoClose: 2000,
          });
          dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
          // setLoading(false);
        };
  
        await Utils.api.postApiCall(
          Utils.EndPoint.socialMediaTemplate,
          value,
          successCallback,
          errorCallback,
          ""
        );
      } catch (error) {
        toast.error(error?.data?.message, {
          autoClose: 2000,
        });
        dispatch({ type: Utils.ActionName.CHATBOTDATA_LOADING, payload: false });
        // setLoading(false);
      }
    };
  };

  export const getVacancyTextDataForShare = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Utils.api.getApiCall(
                Utils.EndPoint.vacancyTextInfoForShare(id),
                (resData) => { // Success callback
                    if (resData?.status === 200) {
                        toast.success(resData?.data?.message, {
                            autoClose: 2000,
                        });
                        console.log("resData", resData);
                        dispatch({ type: Utils.ActionName.SHARE_VACANCY_TEXT, payload: resData.data });
                        resolve(resData); 
                    } else {
                        toast.error(resData?.data?.message, {
                            autoClose: 2000,
                        });
                        reject(resData);
                    }
                },
                (error) => { 
                    toast.error(error?.data?.message, {
                        autoClose: 2000,
                    });
                    reject(error); 
                },
                false, 
                "" 
            );
        });
    };
};
