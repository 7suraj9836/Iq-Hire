import { Box, Button, Divider,  Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {personalInfoValidationSchema} from '../../utils/validation'
import { getProfileInfo, profile } from "../../redux/action/profileAction";
import { trimValue } from "../../utils/utilityFunctions/trimValue";


const PersonalInformation = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.authenticationReducer?.data?.user);
  const profileInfo = useSelector(state => state?.profileReducer.profileInfoDetails)
  console.log('profileInfo12',profileInfo);
  
useEffect(()=>{
  dispatch(getProfileInfo(userData?._id));
  },[])
  

  const initialValues = {
  fullName: profileInfo?profileInfo?.fullName:"",
  email: profileInfo?profileInfo?.email:"",
  alternativeEmail: profileInfo?profileInfo?.alternativeEmail:"",
  phone: profileInfo?profileInfo?.phone:""
};
const onSubmit = (values, { setSubmitting }) => {
  const trimmedValues=trimValue(values);
 setSubmitting(false);
  if (userData?._id) {
    dispatch(profile(userData?._id, trimmedValues));
  }
};

  return (
    <Box sx={{ boxShadow: "0px 9.63px 35.53px -24.81px #757576",padding:"32px 75px 62px 27px",borderRadius:"0px 21.75px 21.75px 21.75px"}}>
   
      <Formik
        initialValues={initialValues}
        validationSchema={personalInfoValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className="color-primary fs-22 fw-600" variant="h3">Personal Information</Typography>
                <Divider sx={{ marginTop: "13px", marginBottom: "35px", border: "1px solid #B5B1B1" }} />
                <Box sx={{ gap: "20px" }} className="flex-wrap">
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Full Name</Typography>
                    {/* <Field name="fullName" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter full name" variant="outlined" /> */}
                    <Field
                    as={TextField}
                    className="w-100 field-radious-30"
                    name="fullName"
                    placeholder='Enter full name'
                    />
                    <ErrorMessage name="fullName" component="div" className="error" style={{ color: 'red' }}/>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Primary Email</Typography>
                    <Field name="email" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter primary email" variant="outlined" />
                    <ErrorMessage name="email" component="div" className="error" style={{ color: 'red' }} />
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Alternative Email</Typography>
                    <Field name="alternativeEmail" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter alternative email" variant="outlined" />
                    <ErrorMessage name="alternativeEmail" component="div" className="error" style={{ color: 'red' }}/>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Mobile Number</Typography>
                    <Field name="phone" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter mobile number" variant="outlined" />
                    <ErrorMessage name="phone" component="div" className="error" style={{ color: 'red' }}/>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ marginTop: "74px" }}>
                <Box className="flex-wrap text-end justify-content-end ml-auto w-100 gap-10">
                  <Button className="primary-btn" sx={{ width: "144px" }} type="reset">Cancel</Button>
                  <Button className="primary-btn-outline" sx={{ width: "144px" }} type="submit" >Update</Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>

  );
};

export default PersonalInformation;
