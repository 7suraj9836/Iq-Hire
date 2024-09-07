const EndPoint = {
   login: "auth/recruiter-login",
   signup: "auth/recruiter-registeration",
   forgot: "/v1/auth/forgot-password",
   verifyOTP: "/v1/auth/verify-otp",
   resendOTP: "/v1/auth/resend-otp",
   resetPassword: "/v1/auth/reset-password",
   contactUs: "feedback",
   personalInfo:(id) => `/recruiter/personal-info/${id}`,
   companyInfo:(id) => `/recruiter/company-info/${id}`,
   profileInfo:(id) => `/recruiter/${id}`,
   clientInfo:(id) => `/recruiter/client-info/${id}`,
   vacancyTextInfo:"/ai/getVacancyText",
   chatbotFileUpload:"/ai/getAnswersFromDocument",
   toneOfVoiceInfo:"/ai/toneOfVoice",
   editedVacancyText:"/vacancy-text/update",
   socialMediaTemplate:"/ai/socialMediaTemplate",
   vacancyTextInfoForShare:(id) => `/vacancy-text/get/${id}`,
};

export default EndPoint;