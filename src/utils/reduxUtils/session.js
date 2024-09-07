import Utils from ".";
// import { UserData } from "../modal";

/**
 * get current language from locale
/**
 * set access token in axios instance header
 */
export const setAuthorizationToken = (token) => {
  if (token) {
    Utils.constants.axios.defaults.headers.common[
      "accesstoken"
    ] = `bearer ${token}`;

    Utils.constants.axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    Utils.constants.axios.defaults.headers.common["Authorization"] = "";
    delete Utils.constants.axios.defaults.headers.common["accesstoken"];
  }
};

export const getAccessToken = () => {
  let accessToken = sessionStorage.getItem("accessToken");
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }

  return accessToken;
};

/**
 * get user verify token form loclastorage
 */

/**
 * get user access token form sessionStorage
 */
export const setAccessToken = (accessToken) => {
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }
  return accessToken;
};
