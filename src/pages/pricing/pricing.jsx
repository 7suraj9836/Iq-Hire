import React, { useState } from 'react';
import Header from '../../components/header';
import { Box, Button, Card, CardContent, FormControl, FormHelperText, Grid, InputLabel, List, ListItem, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import iqunderline from '../../assets/img/iqunderline.png';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import '../pricing/pricing.scss';
import Vacancyimg from '../../assets/img/Vacancyimg.png'
import Footer from '../../components/footer';
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Paper from '@mui/material/Paper';
const Pricing = () => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [value, setValue] = useState(0); // Set default value to 10
    const plans = [
        {
          title: "Basic",
          price: "Basic",
          features: [
            { text: "Lorem ipsum dolor", available: true },
            { text: "sed do eiusmod tempor incididunt", available: true },
            { text: "Duis aute irure dolor in reprehenderit", available: false },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "2", available: true },
          ],
        },
        {
          title: "Premium",
          price: "Premium",
          features: [
            { text: "Lorem ipsum dolor", available: true },
            { text: "sed do eiusmod tempor incididunt", available: true },
            { text: "Duis aute irure dolor in reprehenderit", available: false },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "2", available: true },
          ],
        },
        {
          title: "Enterprise",
          price: "Enterprise",
          features: [
            { text: "Lorem ipsum dolor", available: true },
            { text: "sed do eiusmod tempor incididunt", available: true },
            { text: "Duis aute irure dolor in reprehenderit", available: false },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "Ut enim ad minim veniam", available: true },
            { text: "2", available: true },
          ],
        },
      ];
  return (
    <Box>
        <Header/>
        <Box>
       
            <Grid container className='banner-pricing'> 
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                        <img src={iqunderline} className='mb-4'></img>
                        <Typography variant='h3' className='fs-43 fw-600 mb-3 mx-auto text-white' sx={{maxWidth:"300px"}}>Pricing plans for all of you  </Typography>
                        <Typography variant='h4' className='fs-18 fw-500 mx-auto text-white' sx={{maxWidth:"690px"}}>Nisi nulla minim deserunt adipisicing est consectetur sint labore commodo tempor tempor nisi. Deserunt tempor laboris aute labore.</Typography>
                    </Grid>
            </Grid>
       
  
            <Grid container className="mb-5 px-5"> 
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box className="SubscriptionPlan mt-0">
                        <Box className="SubscriptionPlan-card">
                            <Button className='most-popular-btn'>
                            MOST POPULAR
                            </Button>
                            <Typography className=' m-0 cost'><span className='text-orange p-0 fs-36 fw-700'>$50&nbsp;</span><span className='p-0 fs-17 fw-700' style={{color:"#848199"}}>/month</span></Typography>
                            <Typography variant='h4' className='title'>Base</Typography>
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
                        <Box className="SubscriptionPlan-card">
                            <Button className='most-popular-btn'>
                            MOST POPULAR
                            </Button>
                            <Typography className=' m-0 cost'><span className='text-orange p-0 fs-36 fw-700'>$200&nbsp;</span><span className='p-0 fs-17 fw-700' style={{color:"#848199"}}>/month</span></Typography>
                            <Typography variant='h4' className='title'>Enterprise</Typography>
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
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center mx-auto mb-3'>          
                        <Box>
                            <Box class="divider-pricing-text nolegend"><p className='px-3 m-0'>
                                <span className='text-black p-0 fs-18 fw-500'>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                    value={value}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value={0}>
                                        <em>View Full plan comparison</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Without label</FormHelperText> */}
                                </FormControl>
                                </span></p>
                            </Box>
                        </Box>
                    </Grid>

            </Grid>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper} sx={{boxShadow:"none !important"}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='fs-16 fw-600 border-0' sx={{width:"30%"}}></TableCell>
                                    <TableCell className='fs-16 fw-600 border-0' align="center">
                                        <Box className='flex-column align-items-center'>BASIC       
                                            <Button className='primary-btn-outline fs-16 text-capitalize' sx={{width:"150px"}}>Choose Plan</Button> 
                                        </Box>
                                    </TableCell>
                                    <TableCell className='fs-16 fw-600 border-0' align="center">      
                                        <Box className='flex-column align-items-center'>Premium       
                                            <Button className='primary-btn fs-16 text-capitalize' sx={{width:"150px"}}>Choose Plan</Button> 
                                        </Box> 
                                    </TableCell>
                                    <TableCell className='fs-16 fw-600 border-0' align="center">      
                                        <Box className='flex-column align-items-center'>ENTERPRISE       
                                            <Button className='primary-btn-outline fs-16 text-capitalize' sx={{width:"150px"}}>Choose Plan</Button> 
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody mt={2}>
                    
                                <TableRow
                                // key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    <Box className='flex-column' sx={{gap:"30px"}}>
                                        <Box>
                                            <Typography variant='h5' className='fs-18 fw-500'>All Facilities </Typography> 
                                            <Typography variant='h5' className='fs-16 fw-400'>Edit, Export , Share</Typography> 
                                        </Box>
                                       <Typography variant='h5' className='fs-18 fw-500'>Lorem ipsum dolor </Typography> 
                                       <Typography variant='h5' className='fs-18 fw-500'>sed do eiusmod tempor incididunt</Typography> 
                                       <Typography variant='h5' className='fs-18 fw-500'>Duis aute irure dolor in reprehenderit in </Typography> 
                                       <Typography variant='h5' className='fs-18 fw-500'>Ut enim ad minim veniam</Typography> 
                                       <Box>
                                        <Typography variant='h5' className='fs-18 fw-500'>Ut enim ad minim veniam</Typography> 
                                        <Typography variant='h5' className='fs-16 fw-400'>Atmos available on select titles only</Typography> 
                                       </Box>
                                    </Box> 
                                </TableCell>
                                <TableCell align="center">
                                    <Box className='pricing-table-box'>
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'>Basic</Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className=' fs-20 text-center fw-600' sx={{color:"#BEBEBE"}}><CloseIcon></CloseIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-18 text-center fw-600' sx={{opacity:"0.5"}}>2</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum dolor user</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum</Typography> 
                                    </Box> 
                                </TableCell>
                                <TableCell align="center">  
                                     <Box className='pricing-table-box'>
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'>Premium</Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className=' fs-20 text-center fw-600' sx={{color:"#BEBEBE"}}><CloseIcon></CloseIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-18 text-center fw-600' sx={{opacity:"0.5"}}>2</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum dolor user</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum</Typography> 
                                    </Box> 
                                </TableCell>
                                <TableCell align="center">   
                                    <Box className='pricing-table-box'>
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'>ENTERPRISE</Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-20 text-center fw-600'><CheckIcon></CheckIcon></Typography> 
                                       <Typography variant='h5' className=' fs-20 text-center fw-600' sx={{color:"#BEBEBE"}}><CloseIcon></CloseIcon></Typography> 
                                       <Typography variant='h5' className='text-orange fs-18 text-center fw-600' sx={{opacity:"0.5"}}>2</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum dolor user</Typography> 
                                       <Typography variant='h5' className=' fs-18 text-center fw-500'>Lorem ipsum</Typography> 
                                    </Box> 
                                </TableCell>

                                </TableRow>
                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
  
            <Grid container className='mt-150'> 
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                                <Card className='GenerationJobVacancy' sx={{padding: '36px 24px 45px 55px'}}>
                                <Box className='gap-20 d-flex flex-column text-start m-auto'>
                                    <Typography variant='h4' className='fs-22 fw-500'>Interested?</Typography>
                                    <Typography variant='h4' className='fs-55 fw-500'>Generation Job Vacancy</Typography>
                                    <Typography variant='h4' className='fs-16 fw-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Typography>
                                    <Box className='d-flex gap-10'>
                                    <Button className='primary-btn-outline' sx={{px:"24px"}}>Try for Free</Button><Button className='primary-btn-outline' sx={{minWidth:'fit-content !important'}}><EastIcon></EastIcon> </Button>
                                    </Box>
                                </Box>
                                </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <img style={{width: '100%',height: '100%',objectFit: 'cover'}} src={Vacancyimg} />
                </Grid>
            </Grid>
        </Box>
        <Footer sx={{mt:"70px"}} />
    </Box>
  )
}

export default Pricing
