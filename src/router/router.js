import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Home from '../pages/home/home';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import Forgotpassword from '../pages/auth/forgotpassword';
import Resetpassword from '../pages/auth/resetpassword';
import Contactus from '../pages/contactus/contactus';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/profile/Profile';
import OurWork from '../pages/ourwork/ourwork';
import Loader from '../components/Loader';
import Vacancy from '../pages/job/vacancy';
import Uploadsocialmedia from '../pages/socialmedia/uploadsocialmedia';
import ChatbotQuestions from '../pages/chatbot/chatbotQuestions';
import Socialmediapopup from '../components/socialmediapopup';
import ServiceTerms from '../pages/terms/serviceterm';
import PrivacyTerm from '../pages/terms/privacyterm';
import Feedback from '../pages/feedback/feedback';
import Dashboard from '../pages/dashboard/dashboard';
import Article from '../pages/ourwork/article';
import Payment from '../pages/payment/payment';
import Pricing from '../pages/pricing/pricing';
import ShareJob from '../pages/job/shareJob';
import PdfTemplate from '../pages/job/pdfTemplate';
const Router = () => {
  const navigate=useNavigate();
  // useEffect(() => {
  //     navigate('/')
  //   }, [])
  return (
    <Routes>
      {/* <Route exact path="/chat-bot" element={<MyChatBot />} /> */}
      <Route exact path="/chat-bot" element={<ChatbotQuestions/>} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/forgotpassword" element={<Forgotpassword />} />
      <Route exact path="/resetpassword" element={<Resetpassword />} />
      <Route exact path="/sharejob/:id" element={<ShareJob />} />
      <Route exact path="/contactus" element={<PrivateRoute element={Contactus} />} />
      {/* Add protected routes here */}
      <Route path="/profile" element={<PrivateRoute element={Profile} />} />
      <Route path="/ourwork" element={<OurWork />} />
      <Route path="/pdfTemplate" element={< PdfTemplate/>} />
      <Route path="/Loader" element={<PrivateRoute element={Loader} />} />
      <Route path="/job/vacancy" element={<PrivateRoute element={Vacancy} />} />
      <Route path="/job/upload" element={<PrivateRoute element={Uploadsocialmedia} />} />
      <Route path="/job/socialmediapopup" element={<PrivateRoute element={Socialmediapopup} />} />
      <Route path="/terms/service" element={<PrivateRoute element={ServiceTerms} />} />
      <Route path="/terms/privacy" element={<PrivateRoute element={PrivacyTerm} />} />
      <Route path="/job/socialmediapopup" element={<PrivateRoute element={Socialmediapopup} />} />
      <Route path="/feedback" element={<PrivateRoute element={Feedback} />} />
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      <Route path="/article" element={<PrivateRoute element={Article} />} />
      <Route path="/payment" element={<PrivateRoute element={Payment} />} />
      <Route path="/pricing" element={<PrivateRoute element={Pricing} />} />
      {/* // <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;