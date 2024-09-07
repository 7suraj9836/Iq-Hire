import Utils from "../../utils/reduxUtils";
import { toast } from "react-toastify";

// export const profile = (id,value, navigate) => {
//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             Utils.api.putApiCall(
//                 Utils.EndPoint.personalInfo(id),
//                 value,
//                 (resData) => {
//                     if (resData?.status === 201) {
//                         toast.success(resData?.data?.message, {
//                             autoClose: 2000,
//                         });
//                         resolve(resData); 
//                     } else {
//                         toast.error(resData?.data?.message, {
//                             autoClose: 2000,
//                         })
//                     }
//                 },
//                 (error) => {
//                     toast.error(error?.data?.message, {
//                         autoClose: 2000,
//                     });
//                 }
//             );
//         });
//     };
// };


//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             Utils.api.putApiCall(
//                 Utils.EndPoint.companyInfo(id),
//                 value,
//                 (resData) => {
//                     if (resData?.status === 201) {
//                         toast.success(resData?.data?.message, {
//                             autoClose: 2000,
//                         });
//                         resolve(resData); // Resolve the promise when successful
//                     } else {
//                         toast.error(resData?.data?.message, {
//                             autoClose: 2000,
//                         })
//                     }
//                 },
//                 (error) => {
//                     toast.error(error?.data?.message, {
//                         autoClose: 2000,
//                     });
//                 }
//             );
//         });
//     };
// };

// export const companyInfo = (id, value) => {
//     return async (dispatch) => {
//       try {
//         const resData = await Utils.api.putApiCall(
//           Utils.EndPoint.companyInfo(id),
//           value,
//           false,
//           "application/json"
//         );
  
//         if (resData?.status === 201) {
//           toast.success(resData?.data?.message, {
//             autoClose: 2000,
//           });
//           dispatch(getProfileInfo(id));
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

export const profile = (id, value, navigate) => {
    return async (dispatch) => {
      try {
        const resData = await Utils.api.putApiCall(
          Utils.EndPoint.personalInfo(id),
          value,
          "application/json"
        );
  
        if (resData?.status === 201) {
          toast.success(resData?.data?.message, {
            autoClose: 2000,
          });
          return resData; // Return the response data when successful
        } else {
          toast.error(resData?.data?.message, {
            autoClose: 2000,
          });
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Network error or no response from server",
          {
            autoClose: 2000,
          }
        );
      }
    };
  };
  
  
export const companyInfo = (id, value) => {
    return async (dispatch) => {
      try {
        const resData = await Utils.api.putApiCall(
          Utils.EndPoint.companyInfo(id),
          value,
          "application/json"
        );
  
        if (resData?.status === 201) {
          toast.success(resData?.data?.message, {
            autoClose: 2000,
          });
          dispatch(getProfileInfo(id));
          return resData;
        } else {
          toast.error(resData?.data?.message, {
            autoClose: 2000,
          });
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.setItem("accessToken", "");
            window.location.reload();
          }
          toast.error(error.response.data?.message || "Please try again later", {
            autoClose: 2000,
          });
        } else {
          toast.error("Network error or no response from server", {
            autoClose: 2000,
          });
        }
      }
    };
  };
  


export const clientInfo = (id,value, navigate) => {
   return async (dispatch) => {
        try {
          const resData = await Utils.api.putApiCall(
            Utils.EndPoint.clientInfo(id),
            value,
            "application/json"
          );
    
          if (resData?.status === 201) {
            toast.success(resData?.data?.message, {
              autoClose: 2000,
            });
            dispatch(getProfileInfo(id));
            return resData;
          } else {
            toast.error(resData?.data?.message, {
              autoClose: 2000,
            });
          }
        } catch (error) {
          if (error.response) {
            if (error.response.status === 401) {
              localStorage.setItem("accessToken", "");
              window.location.reload();
            }
            toast.error(error.response.data?.message || "Please try again later", {
              autoClose: 2000,
            });
          } else {
            toast.error("Network error or no response from server", {
              autoClose: 2000,
            });
          }
        }
      };

};

export const getProfileInfo = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Utils.api.getApiCall(
                Utils.EndPoint.profileInfo(id),
                (resData) => { // Success callback
                    if (resData?.status === 200) {
                        toast.success(resData?.data?.message, {
                            autoClose: 2000,
                        });
                        console.log("resData", resData);
                        dispatch({ type: Utils.ActionName.PROFILEINFO, payload: resData.data });
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





//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             Utils.api.getApiCall(
//                 Utils.EndPoint.profileInfo(id),
//                 "",
//                 (resData) => {
//                     if (resData?.status === 200) {
//                         toast.success(resData?.data?.message, {
//                             autoClose: 2000,
//                         });
//                         console.log("resData",resData)
//                         dispatch({ type: Utils.ActionName.PROFILEINFO, payload: resData.data });
//                         resolve(resData); // Resolve the promise when successful
//                     } else {
//                         toast.error(resData?.data?.message, {
//                         autoClose: 2000,
//                         })
//                     }
//                 },
//                 (error) => {
//                     toast.error(error?.data?.message, {
//                         autoClose: 2000,
//                     });
//                 }
//             );
//         });
//     };
// };