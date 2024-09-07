import Utils from "../../utils/reduxUtils";
import { toast } from "react-toastify";

export const login = (value, navigate) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Utils.api.loginApiCall(
                Utils.EndPoint.login,
                value,
                (resData) => {
                    toast.success("Login Successful", {
                        autoClose: 2000,
                    });
                    dispatch({
                        type: Utils.ActionName.LOGIN,
                        payload: resData,
                    });
                    localStorage.setItem(
                        "accessToken",
                        JSON.stringify(resData?.data?.user?.token)
                    )
                    navigate("/");
                    resolve(resData);
                },
                (error) => {
                    let errorMessage = "Try Again Later";
                    const errorData = error.message ? error.message : null;

                    if (error?.statusCode === 404) {
                        errorMessage = "User Not Found";
                    } else if (error?.statusCode === 401) {
                        errorMessage = "Invalid credentials";
                    } else if (errorData && errorData.message) {
                        errorMessage = errorData.message;
                    }
                    toast.error(errorMessage, {
                        autoClose: 2000,
                    });
                    reject(error); 
                }
            );
        });
    };
};

export const signup = (value, navigate) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Utils.api.postApiCall(
                Utils.EndPoint.signup,
                value,
                (resData) => {
                    if (resData.status === 200) {
                        toast.success("Signup Successful", {
                            autoClose: 2000,
                        });
                        dispatch({
                            type: Utils.ActionName.SIGNUP,
                            payload: resData,
                        });
                        // navigate("/signin");
                        resolve(resData); // Resolve the promise when successful
                    } else {
                        toast.error(resData.message, {
                            autoClose: 2000,
                        })
                    }
                },
                (error) => {
                    toast.error("This email address already exists, Please use a new email for registration ", {
                        autoClose: 2000,
                    });
                }
            );
        });
    };
};