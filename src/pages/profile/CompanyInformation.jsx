import { Box, Button, Divider,  Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { companyInfoValidationSchema } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { companyInfo, getProfileInfo } from "../../redux/action/profileAction";
import { trimValue } from "../../utils/utilityFunctions/trimValue";

const CompanyInformation = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.authenticationReducer?.data?.user);
  const profileInfo = useSelector(state => state?.profileReducer.profileInfoDetails?.companyInfo);
  const errorColor={
    color:'red'
  }
  const [logo, setLogo] = useState(null);
  const [logoName, setLogoName] = useState("");
  const [images, setImages] = useState([]);
  const [imageNames, setImageNames] = useState([]);
 const initialValues = {
    name: profileInfo?.name,
    url: profileInfo?.url,
    sector: profileInfo?.sector,
    mobile: profileInfo?.mobile,
    description: profileInfo?.description,
    country: profileInfo?.country,
    state: profileInfo?.state,
    city: profileInfo?.city,
    postalCode: profileInfo?.postalCode
  };
  useEffect(()=>{
    dispatch(getProfileInfo(userData?._id));
    
  },[])

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    const trimmedValues=trimValue(values);
    setSubmitting(false);
    if(userData?._id){
      dispatch(companyInfo(userData?._id,trimmedValues))
    }
    setTimeout(()=>{
      dispatch(getProfileInfo(userData?._id));
    },2000)
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    console.log("file",file)
    if (file) {
      setLogo(file);
      setLogoName(file.name);
    }
  };

  const handleImagesChange = (event) => {
    const files = Array.from(event.target.files);
    console.log("images",event.target.file);
  // Update images state to include newly selected files
     setImages(prevImages => [...prevImages, ...files]);
// Update imageNames state to include newly selected file names
     setImageNames(prevNames => [...prevNames, ...files.map(file => file.name)]);
  };
  console.log()
  const handleLogoReset = () => {
    setLogoName("");
    setLogo(null);
  };

  const handleImagesReset = () => {
    setImageNames([]);
    setImages([]);
  };
  console.log("logo",logo)
  return (
    <Box sx={{ boxShadow: "0px 9.63px 35.53px -24.81px #757576",padding:"32px 75px 62px 27px",borderRadius:"0px 21.75px 21.75px 21.75px"}}>
    <Formik
    initialValues={initialValues}
    validationSchema={companyInfoValidationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className="color-primary fs-22 fw-600" variant="h3">Self Company Information</Typography>
            <Divider sx={{ marginTop: "13px", marginBottom: "35px", border: "1px solid #B5B1B1" }} />
            <Box sx={{ gap: "20px" }} className="flex-wrap">
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Company Name</Typography>
                <Field name="name" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter Company name" variant="outlined" />
                <ErrorMessage name="name" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Company URL</Typography>
                <Field name="url" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter Company URL" variant="outlined" />
                <ErrorMessage name="url" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Sector of Business</Typography>
                <Field name="sector" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter sector of business" variant="outlined" />
                <ErrorMessage name="sector" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Mobile Number</Typography>
                <Field name="mobile" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter mobile number" variant="outlined" />
                <ErrorMessage name="mobile" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Company Description</Typography>
                <Field name="description" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter company description" variant="outlined" />
                <ErrorMessage name="description" component="div" className="error" style={errorColor}/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ marginTop: "45px" }}>
            <Typography className="color-primary fs-22 fw-600" variant="h3">Company Location</Typography>
            <Divider sx={{ marginTop: "13px", marginBottom: "35px", border: "1px solid #B5B1B1" }} />
            <Box sx={{ gap: "20px" }} className="flex-wrap">
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Select Country</Typography>
                <Field name="country" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Select country" variant="outlined" />
                <ErrorMessage name="country" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Select State</Typography>
                <Field name="state" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Select state" variant="outlined" />
                <ErrorMessage name="state" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Select City</Typography>
                <Field name="city" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Select city" variant="outlined" />
                <ErrorMessage name="city" component="div" className="error" style={errorColor}/>
              </Box>
              <Box sx={{ width: "290px", flexGrow: 1 }}>
                <Typography className='fs-14 fw-500'>Enter Postal Code</Typography>
                <Field name="postalCode" as={TextField} className="w-100 field-radious-30" id="outlined-basic" placeholder="Enter postal code" variant="outlined" />
                <ErrorMessage name="postalCode" component="div" className="error" style={errorColor}/>
              </Box>
              <Box className="w-100 flex-wrap" sx={{ gap: "46px" }}>
   <Box sx={{ width: "290px", flexGrow: 1, padding: "31px 10px 42px 41px", border: "1px dashed #636363", borderRadius: "11px" }}>
        <Typography className='fs-14 fw-500'>Add Company Logo</Typography>
        <Box className="flex-wrap text-start justify-content-start w-100 gap-10 mt-4">
          <input
            type="file"
            accept="image/*"
            id="logo-upload"
            style={{ display: 'none' }}
            onChange={handleLogoChange}
          />
          <label htmlFor="logo-upload">
            <Button component="span" className="primary-btn-outline" sx={{ width: "144px" }}>Upload</Button>
          </label>
          <Button className="primary-btn" sx={{ width: "144px" }} onClick={handleLogoReset}>Reset</Button>
          {logoName && <Typography className='fs-14 fw-400'>{logoName}</Typography>}
          <Typography className='fs-14 fw-400'>Allowed JPG or PNG. Max size of 800kB</Typography>
        </Box>
      </Box>
      {/* Add Company Images */}
      <Box sx={{ width: "290px", flexGrow: 1, padding: "31px 10px 42px 41px", border: "1px dashed #636363", borderRadius: "11px" }}>
        <Typography className='fs-14 fw-500'>Add Company Images</Typography>
        <Box className="flex-wrap text-start justify-content-start w-100 gap-10 mt-4">
          <input
            type="file"
            accept="image/*"
            id="images-upload"
            style={{ display: 'none' }}
            multiple
            onChange={handleImagesChange}
          />
          <label htmlFor="images-upload">
            <Button component="span" className="primary-btn-outline" sx={{ width: "144px" }}>Upload</Button>
          </label>
          <Button className="primary-btn" sx={{ width: "144px" }} onClick={handleImagesReset}>Reset</Button>
          {imageNames.length > 0 && <Typography className='fs-14 fw-400'>{imageNames.join(', ')}</Typography>}
          <Typography className='fs-14 fw-400'>Allowed JPG or PNG. Max size of 800kB</Typography>
        </Box>
      </Box>
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
  )
}

export default CompanyInformation
