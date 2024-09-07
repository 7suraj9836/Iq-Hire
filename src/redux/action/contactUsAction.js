import Utils from "../../utils/reduxUtils";
import { toast } from "react-toastify";
export const feedback = (value, navigate) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Utils.api.postApiCall(
                Utils.EndPoint.contactUs,
                value,
                (resData) => {
                    if (resData?.status === 201) {
                        toast.success(resData?.data?.message, {
                            autoClose: 2000,
                        });
                        resolve(resData); // Resolve the promise when successful
                    } else {
                        toast.error(resData?.data?.message, {
                            autoClose: 2000,
                        })
                    }
                },
                (error) => {
                    toast.error(error?.data?.message, {
                        autoClose: 2000,
                    });
                }
            );
        });
    };
};