import {  Box, Button, Card, Divider, Grid, IconButton, InputAdornment, List, ListItem, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { styled } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfo } from '../../redux/action/profileAction';  
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MailOutline from '@mui/icons-material/MailOutline';
import visa from '../../assets/img/svg/visa.svg';
import mastercard from '../../assets/img/svg/mastercard.svg';
import "../payment/payment.scss";

const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    display: 'flex',
    justifyContent: 'flex-start',
});

const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    padding: theme.spacing(1),
    borderRadius: '30px',
    fontStyle: "Montserrat",
    fontWeight: '600',
    flex: 1,
    '&.Mui-selected': {
        // backgroundColor: '#F89B53',
        boxShadow: "-0.09px 3.63px 35.53px -17.81px #757576",
        borderRadius:"16px 16px 0px 0px !important",
        color: "#F89B53",
        maxWidth:"fit-content",
        padding:"10px 26px",
    },
    '&:not(.Mui-selected)': {
        color: '#7C7C7C',
        fontWeight: '500',
        maxWidth:"fit-content",
        padding:"10px 26px",

    },
}));
const Payment = () => {

    const dispatch=useDispatch();
    const userData = useSelector(state => state?.authenticationReducer?.data?.user);
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

useEffect(()=>{
    dispatch(getProfileInfo(userData?._id));
},[userData?._id])

  return (
    <>
    <Header/>
    <Box>
        <Grid container className='mt-4' sx={{padding:"21px 39px 21px 42px"}}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='px-3'>

                        <Box className="SubscriptionPlan" sx={{boxShadow:"none !important"}}>
                            <Box className="SubscriptionPlan-card active">
                                <Button className='most-popular-btn'>
                                MOST POPULAR
                                </Button>
                                <Typography className=' m-0 cost'><span className='text-orange p-0 fs-36 fw-700'>$100&nbsp;</span><span className='p-0 fs-17 fw-700' style={{color:"#848199"}}>/month</span></Typography>
                                <Typography variant='h4' className='title'>Pro</Typography>
                                <Typography variant='h4' className='sub-title'>Lorem ipsum dolor sit amet, consectetur</Typography>
                                <List>
                                <ListItem><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#F3E8DF"/>
                                    <path d="M15.7722 6.83362L10.068 14.5745C9.93197 14.7549 9.72912 14.8732 9.50503 14.9027C9.28094 14.9321 9.05441 14.8703 8.87634 14.7311L4.80301 11.4745C4.44356 11.1868 4.38536 10.6622 4.67301 10.3028C4.96066 9.94334 5.48523 9.88514 5.84468 10.1728L9.24134 12.8903L14.4305 5.84778C14.6007 5.59244 14.8974 5.45127 15.2029 5.48032C15.5083 5.50936 15.7731 5.70393 15.8921 5.98676C16.0111 6.2696 15.965 6.59494 15.7722 6.83362Z" fill="#F89B53"/>
                                    </svg>
                                    All limited links</ListItem>
                                <ListItem><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#F3E8DF"/>
                                <path d="M15.7722 6.83362L10.068 14.5745C9.93197 14.7549 9.72912 14.8732 9.50503 14.9027C9.28094 14.9321 9.05441 14.8703 8.87634 14.7311L4.80301 11.4745C4.44356 11.1868 4.38536 10.6622 4.67301 10.3028C4.96066 9.94334 5.48523 9.88514 5.84468 10.1728L9.24134 12.8903L14.4305 5.84778C14.6007 5.59244 14.8974 5.45127 15.2029 5.48032C15.5083 5.50936 15.7731 5.70393 15.8921 5.98676C16.0111 6.2696 15.965 6.59494 15.7722 6.83362Z" fill="#F89B53"/>
                                </svg>
                                Own analytics platform</ListItem>
                                <ListItem><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#F3E8DF"/>
                                <path d="M15.7722 6.83362L10.068 14.5745C9.93197 14.7549 9.72912 14.8732 9.50503 14.9027C9.28094 14.9321 9.05441 14.8703 8.87634 14.7311L4.80301 11.4745C4.44356 11.1868 4.38536 10.6622 4.67301 10.3028C4.96066 9.94334 5.48523 9.88514 5.84468 10.1728L9.24134 12.8903L14.4305 5.84778C14.6007 5.59244 14.8974 5.45127 15.2029 5.48032C15.5083 5.50936 15.7731 5.70393 15.8921 5.98676C16.0111 6.2696 15.965 6.59494 15.7722 6.83362Z" fill="#F89B53"/>
                                </svg>
                                Chat support</ListItem>
                                <ListItem><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#F3E8DF"/>
                                <path d="M15.7722 6.83362L10.068 14.5745C9.93197 14.7549 9.72912 14.8732 9.50503 14.9027C9.28094 14.9321 9.05441 14.8703 8.87634 14.7311L4.80301 11.4745C4.44356 11.1868 4.38536 10.6622 4.67301 10.3028C4.96066 9.94334 5.48523 9.88514 5.84468 10.1728L9.24134 12.8903L14.4305 5.84778C14.6007 5.59244 14.8974 5.45127 15.2029 5.48032C15.5083 5.50936 15.7731 5.70393 15.8921 5.98676C16.0111 6.2696 15.965 6.59494 15.7722 6.83362Z" fill="#F89B53"/>
                                </svg>
                                Optimize hashtags</ListItem>
                                <ListItem><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#F3E8DF"/>
                                <path d="M15.7722 6.83362L10.068 14.5745C9.93197 14.7549 9.72912 14.8732 9.50503 14.9027C9.28094 14.9321 9.05441 14.8703 8.87634 14.7311L4.80301 11.4745C4.44356 11.1868 4.38536 10.6622 4.67301 10.3028C4.96066 9.94334 5.48523 9.88514 5.84468 10.1728L9.24134 12.8903L14.4305 5.84778C14.6007 5.59244 14.8974 5.45127 15.2029 5.48032C15.5083 5.50936 15.7731 5.70393 15.8921 5.98676C16.0111 6.2696 15.965 6.59494 15.7722 6.83362Z" fill="#F89B53"/>
                                </svg>
                                Unlimited users</ListItem>  
                                </List>
                                <Button className='primary-btn-outline w-100'>Choose plan</Button>
                            </Box>
                        </Box>
            </Grid>
        
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Card sx={{px:6,py:3,borderRadius:5}}>
                            <Typography variant='h3' className='fs-22 fw-600'>Payment</Typography>
                            <Divider className='mt-15 mb-20' sx={{opacity:1}} aria-hidden="true" />
                            <Box className='d-flex justify-content-between'>
                                <Typography variant='h3' className='fs-14 fw-400'>Your Plan Subscription (Inc.360 Credit)</Typography>
                                <Typography variant='h3' className='fs-14 fw-400'>$ 445</Typography>
                            </Box>
                            <Box className='d-flex justify-content-between mt-10'>
                                <Typography variant='h3' className='fs-14 fw-400'>2 bundles (50 Credits)</Typography>
                                <Typography variant='h3' className='fs-14 fw-400'>$ 100</Typography>
                            </Box>
                            <Box className='d-flex justify-content-between mt-20'>
                                <Typography variant='h3' className='fs-14 fw-600'>Subtotal</Typography>
                                <Typography variant='h3' className='fs-14 fw-700'>$ 545</Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
                        <Card sx={{px:6,py:3,borderRadius:5}}>
                            <CustomTabs value={selectedTab} onChange={handleTabChange} aria-label="profile tabs">
                                <CustomTab tabIndex={0} label="Personal Information" />
                                <CustomTab tabIndex={1} label="Company Information" />
                                <CustomTab tabIndex={2} label="Client's Information" />
                            </CustomTabs>
                            <Divider className=' mb-40' sx={{opacity:1}} aria-hidden="true" />

                            {selectedTab === 0 && (
                                             <Grid container spacing={2}>
                                             <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                     
                                                 
                                                         <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                                 
                                                     
                                                                     <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                         <Typography className='fs-14 fw-500'>Primary Email</Typography>
                                                                         <TextField
                                                                             placeholder='Enter primary email'
                                                                                 className='w-100 input-field'
                                                                                 variant="outlined"
                                                                                 label=""
                                                                                 type="text"
                                                                                 InputProps={{
                                                                                 }}
                                                                             />
                                                                     </Box>
                                                         </Box>
                                     
                                 
                                             </Grid>
                                             <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                     
                                                 
                                     <Box sx={{ gap: "20px" }} className="flex-wrap">
                                             
                                 
      
                                                 <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                     <Typography className='fs-14 fw-500'>Name on Card</Typography>
                                                     <TextField
                                                     placeholder='Enter full name'
                                                             className='w-100 input-field'
                                                             variant="outlined"
                                                             label=""
                                                             type="text"
                                                             InputProps={{
                                                             }}
                                                         />
                                                 </Box>
                                 
                                     
         
                                     </Box>
                 
             
                                             </Grid>
                                             <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                                         
                                                                     
                                                         <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                                 
                             
                                                         
                                                                     <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                         <Typography className='fs-14 fw-500'>Country of Region</Typography>
                                                                         <TextField
                                                                                 placeholder="Select country"
                                                                                 className='w-100 input-field'
                                                                                 variant="outlined"
                                                                                 label=""
                                                                                 type="text"
                                                                                 InputProps={{
                                                                                 }}
                                                                             />
                                                                     </Box>
                                                 
                                                         </Box>
                                     
                                 
                                             </Grid>
                                             <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                                         
                                                                     
                                                         <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                                 
                                                     
                                             
                                                                     <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                         <Typography className='fs-14 fw-500'>Primary Email</Typography>
                                                             
                                                                             <TextField
                                                                             className='w-100 input-field'
                                                                             variant="outlined"
                                                                             label=""
                                                                             type="text"
                                                                             InputProps={{
                                                                             endAdornment: (
                                                                                 <>
                                                                 
                                                                                 <InputAdornment position="end">
                                                                                     <IconButton>
                                                                                     <img width={30} height={20} src={mastercard} />
                                                                                     </IconButton>
                                                                                     <IconButton>
                                                                                     <img width={30} height={20} src={visa} />
                                                                                     </IconButton>
                                                                                 </InputAdornment>
                                                                                 </>
                                                                             ),
                                                                             }}
                                                                         />
                                                                     </Box>
                                 
                                                         </Box>
                                     
                                 
                                             </Grid>
                                             <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                         
                                                                     
                                                         <Box sx={{ gap: "20px" }} className="d-flex">
                                                                 
                                                                     <Box sx={{ width: "190px", }}>
                                                                         <Typography className='fs-14 fw-500'>Active Date</Typography>
                                                             
                                                                             <TextField
                                                                             className='input-field'
                                                                             variant="outlined"
                                                                             label=""
                                                                             type="date"
                                                             
                                                                         />
                                                                     </Box>
                                                                     <Box sx={{ width: "120px", }}>
                                                                         <Typography className='fs-14 fw-500'>CVV</Typography>
                                                             
                                                                             <TextField
                                                                             className='input-field'
                                                                             variant="outlined"
                                                                             label=""
                                                                             type="password"
                                                             
                                                                         />
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
                         

                            )}
                                        {selectedTab === 1 && (
                                <Box>
                                    2
                                </Box>
                            )}
                                        {selectedTab === 2 && (
                                      <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                
                                            
                                                    <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                            
                                                
                                                                <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                    <Typography className='fs-14 fw-500'>Primary Email</Typography>
                                                                    <TextField
                                                                        placeholder='Enter primary email'
                                                                            className='w-100 input-field'
                                                                            variant="outlined"
                                                                            label=""
                                                                            type="text"
                                                                            InputProps={{
                                                                            }}
                                                                        />
                                                                </Box>
                                                    </Box>
                                
                            
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                
                                            
                                <Box sx={{ gap: "20px" }} className="flex-wrap">
                                        
                            
 
                                            <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                <Typography className='fs-14 fw-500'>Name on Card</Typography>
                                                <TextField
                                                placeholder='Enter full name'
                                                        className='w-100 input-field'
                                                        variant="outlined"
                                                        label=""
                                                        type="text"
                                                        InputProps={{
                                                        }}
                                                    />
                                            </Box>
                            
                                
    
                                </Box>
            
        
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    
                                                                
                                                    <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                            
                        
                                                    
                                                                <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                    <Typography className='fs-14 fw-500'>Country of Region</Typography>
                                                                    <TextField
                                                                            placeholder="Select country"
                                                                            className='w-100 input-field'
                                                                            variant="outlined"
                                                                            label=""
                                                                            type="text"
                                                                            InputProps={{
                                                                            }}
                                                                        />
                                                                </Box>
                                            
                                                    </Box>
                                
                            
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    
                                                                
                                                    <Box sx={{ gap: "20px" }} className="flex-wrap">
                                                            
                                                
                                        
                                                                <Box sx={{ width: "290px", flexGrow: 1 }}>
                                                                    <Typography className='fs-14 fw-500'>Primary Email</Typography>
                                                        
                                                                        <TextField
                                                                        className='w-100 input-field'
                                                                        variant="outlined"
                                                                        label=""
                                                                        type="text"
                                                                        InputProps={{
                                                                        endAdornment: (
                                                                            <>
                                                            
                                                                            <InputAdornment position="end">
                                                                                <IconButton>
                                                                                <img width={30} height={20} src={mastercard} />
                                                                                </IconButton>
                                                                                <IconButton>
                                                                                <img width={30} height={20} src={visa} />
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                            </>
                                                                        ),
                                                                        }}
                                                                    />
                                                                </Box>
                            
                                                    </Box>
                                
                            
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                    
                                                                
                                                    <Box sx={{ gap: "20px" }} className="d-flex">
                                                            
                                                                <Box sx={{ width: "190px", }}>
                                                                    <Typography className='fs-14 fw-500'>Active Date</Typography>
                                                        
                                                                        <TextField
                                                                        className='input-field'
                                                                        variant="outlined"
                                                                        label=""
                                                                        type="date"
                                                        
                                                                    />
                                                                </Box>
                                                                <Box sx={{ width: "120px", }}>
                                                                    <Typography className='fs-14 fw-500'>CVV</Typography>
                                                        
                                                                        <TextField
                                                                        className='input-field'
                                                                        variant="outlined"
                                                                        label=""
                                                                        type="password"
                                                        
                                                                    />
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
                            )}
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default Payment
