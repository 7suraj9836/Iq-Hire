import Utils from ".";
// import { logOut } from "../components/header/action";

const loginApiCall = (endPoint, params, successCallback, errorCallback) => {
  Utils.constants.axiosLogin
    .post(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === "ECONNABORTED") {
        errorCallback({
          statusCode: 408,
          message: "Request timed out. Please try again.",
        });
      }
      else if (!error.response) {
        errorCallback({
          statusCode: 503,
          message: "Service unavailable. Please try again later.",
        });
      } else {
        errorCallback({
          statusCode: error.response.status,
          message: error.response.data.message || "An error occurred. Please try again.",
        });
      }
    });
};

const deleteApiCall = (endPoint, params, successCallback, errorCallback) => {
  Utils.constants.axios
    .delete(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error?.response?.status == 401) {
        localStorage.setItem("accessToken", "");
        window.location.reload();
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      }
      else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const postApiCall = (endPoint, params, successCallback, errorCallback, headerType) => {
  let headers;
  if (headerType === "multi") {
    headers = { "Content-Type": "multipart/form-data" };
  } else {
    headers = { "Content-Type": "application/json" };
  }
  Utils.constants.axios
    .post(endPoint, params, { headers })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error?.response) {
        errorCallback(error.response);
      } else {
        errorCallback({
          data: {
            message: "Please try again later",
          },
        });
      }
    });
};



const getApiCall = (endPoint,successCallback,errorCallback,IsArrayBuffer = false,params = "") => {
  Utils.constants.axios
    .get(Utils.constants.apiUrl + endPoint + params, {
      responseType: IsArrayBuffer ? "arraybuffer" : "json",
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          errorCallback(error.response);
        } else {
          errorCallback({
            data: {
              statusCode: error.response.status,
              message: error.response.data?.message || "An error occurred. Please try again later.",
            },
          });
        }
      } else {
        errorCallback({
          data: {
            statusCode: 500,
            message: "Network error or no response from server",
          },
        });
      }
    });
};

const patchApiCall = (
  endPoint,
  body = {},
  successCallback,
  errorCallback,
  IsArrayBuffer = false,
  headerType
) => {
  let headers;
  if (headerType == "multi") {
    headers = { "Content-Type": "multipart/form-data" };
  } else {
    headers = {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
      "Content-Type": "application/json"
    };
  }
  Utils.constants.axios
    .patch(Utils.constants.apiUrl + endPoint, body, {
      headers,
      responseType: IsArrayBuffer ? "arraybuffer" : "",
    })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      // Handling errors
      if (error?.response?.status == 401) {
        localStorage.setItem("accessToken", "");
        window.location.reload();
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};

const putApiCall = (
  endPoint,
  body = {},
  headerType
) => {
  let headers;
  if (headerType === "multi") {
    headers = { "Content-Type": "multipart/form-data" };
  } else {
    headers = {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
      "Content-Type": "application/json",
    };
  }
  return Utils.constants.axios.put(Utils.constants.apiUrl + endPoint, body, {
    headers,
  });
};





const api = {
  getApiCall,
  postApiCall,
  deleteApiCall,
  patchApiCall,
  putApiCall,
  loginApiCall,
};

export default api;