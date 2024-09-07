import { Box, Button, Divider,Grid,TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { clientInfo, companyInfo, getProfileInfo } from "../../redux/action/profileAction";
import { clientInfoValidationSchema } from "../../utils/validation";
import { toast } from "react-toastify";
const ClientInformation = () => {
  const profileInfo=useSelector(state=>state?.profileReducer?.profileInfoDetails?.clientInfo);
  const userData = useSelector(state => state?.authenticationReducer?.data?.user);
  const [entries,setEntries]=useState(profileInfo);
  const[filterNewlyAddedData,setFilterNewlyAddedData]=useState();
  const dispatch = useDispatch();

  const initialValues={
    name:"",
    url:"",
    description:""
  }
  // let filterNewlyAddedData;
  useEffect(()=>{
    dispatch(getProfileInfo(userData?._id));
   },[])
   useEffect(()=>{
       
   },[entries])

  const onSubmit=(values,{setSubmitting,resetForm})=>{
    // setEntries((prevEntries)=>[...prevEntries,values]);
    const newEntries = [...entries, values];
    setEntries(newEntries);
    setFilterNewlyAddedData(newEntries.filter((item) => !item._id));
    resetForm();
    setSubmitting(false);
  }
  const handleUpdate = () => {
    // Your PUT API logic here,
    // const filterNewlyAddedDatas=entries.filter((item)=>!item._id)
    // setFilterNewlyAddedData(filterNewlyAddedDatas);
    const lastEntry = entries[entries.length - 1];
    console.log('lastEntry12',lastEntry);
    if (!lastEntry || !lastEntry.name || !lastEntry.url || !lastEntry.description) {
      toast.error('Please make sure all fields are filled before adding to the list.');
      return;
    }
    console.log('initialValues12',initialValues)
    if(filterNewlyAddedData.length==0){
      toast.error('Please click on add button to add it in the list first');
      return;
    }
    console.log('filterNewlyAddedData12',filterNewlyAddedData);
    if(userData?._id && filterNewlyAddedData?.length>0){
      dispatch(clientInfo(userData?._id,filterNewlyAddedData)).then(()=>{
        setFilterNewlyAddedData([]);
      })
    }
    // setTimeout(()=>{
    //   dispatch(getProfileInfo(userData?._id));
    // },2000)
  }
  return (    
    <Box sx={{ boxShadow: "0px 9.63px 35.53px -24.81px #757576",padding:"32px 75px 62px 27px",borderRadius:"0px 21.75px 21.75px 21.75px"}}>
       <Formik
        initialValues={initialValues}
        validationSchema={clientInfoValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className="d-flex justify-content-between">
                  <Typography className="color-primary fs-22 fw-600" variant="h3">Other Company Information</Typography>
                  <Button className="primary-btn-outline gap-10 fw-600" type="submit">
                    <AddIcon />
                    Add
                  </Button>
                </Box>
                <Divider sx={{ marginTop: "13px", marginBottom: "35px", border: "1px solid #B5B1B1" }} />
               <Box sx={{ gap: "20px", marginBottom: "20px" }} className="flex-wrap">
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company Name</Typography>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company URL</Typography>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company Description</Typography>
                  </Box>
                </Box>
                {entries.map((entry, index) => (<>
                  <Box key={index} sx={{ gap: "20px", marginBottom: "20px" }} className="flex-wrap">
                    <Box sx={{ width: "290px", flexGrow: 1 }}>
                      <Typography className="w-100 field-radious-30">{entry.name}</Typography>
                    </Box>
                    <Box sx={{ width: "290px", flexGrow: 1 }}>
                      <Typography className="w-100 field-radious-30">{entry.url}</Typography>
                    </Box>
                    <Box sx={{ width: "290px", flexGrow: 1 }}>
                      <Typography className="w-100 field-radious-30">{entry.description}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ marginTop: "13px", marginBottom: "35px", border: "1px solid #B5B1B1" }} />
                  </>
                ))}
                  <Box sx={{ gap: "20px" }} className="flex-wrap">
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company Name</Typography>
                    <Field
                      name="name"
                      as={TextField}
                      className="w-100 field-radious-30"
                      id="outlined-basic"
                      placeholder="Enter Company name"
                      variant="outlined"
                    />
                    <Box sx={{ color: 'red' }}>
                      <ErrorMessage name="name" component="div" />
                    </Box>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company URL</Typography>
                    <Field
                      name="url"
                      as={TextField}
                      className="w-100 field-radious-30"
                      id="outlined-basic"
                      placeholder="Enter Company URL"
                      variant="outlined"
                    />
                    <Box sx={{ color: 'red' }}>
                      <ErrorMessage name="url" component="div" />
                    </Box>
                  </Box>
                  <Box sx={{ width: "290px", flexGrow: 1 }}>
                    <Typography className='fs-14 fw-500'>Company Description</Typography>
                    <Field
                      name="description"
                      as={TextField}
                      className="w-100 field-radious-30"
                      id="outlined-basic"
                      placeholder="Enter Description"
                      variant="outlined"
                    />
                    <Box sx={{ color: 'red' }}>
                      <ErrorMessage name="description" component="div" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
               <Grid item xs={12} sx={{ marginTop: "74px" }}>
                <Box className="flex-wrap text-end justify-content-end ml-auto w-100 gap-10">
                  <Button className="primary-btn fs-14" sx={{ width: "144px" }} type="reset">Cancel</Button>
                  <Button className="primary-btn-outline fs-14" sx={{ width: "144px" }} onClick={handleUpdate} disabled={isSubmitting}>Update</Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik> 
   
    </Box>
  )
}
export default ClientInformation;


