import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/img/logo.svg'
import { Card, FormControl, Grid, InputLabel, List, ListItem, Select } from '@mui/material';
import iqunderline from '../../assets/img/iqunderline.png'
import designimg from '../../assets/img/designimg.png'
import EastIcon from '@mui/icons-material/East';
import company from '../../assets/img/company.png';
import downarrow from '../../assets/img/downarrow.png';
import global from '../../assets/img/global.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Header from '../../components/header';
import Footer from '../../components/footer';
import postjob from '../../assets/img/postjob.png';
import InteractwithChatbot from '../../assets/img/Interact with Chatbot.svg'
import PreviewTemplate from '../../assets/img/Preview Template.svg'
import PreviewTemplate90 from '../../assets/img/Preview Template 90.svg'
import NeuromarketingInfusedContent from '../../assets/img/NeuromarketingInfusedContent.jfif'
import { Padding } from '@mui/icons-material';
import Vacancyimg from '../../assets/img/Vacancyimg.png'
import {Link} from 'react-router-dom';
import Start from '../../components/start';
const pages = ['Home', 'Who we Are', 'Services','Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Home = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const[visible, setVisible] = React.useState(true);
  const IsLoggedIn=localStorage?.getItem("accessToken");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
   <Box>
    <Header/>
    <Start visible={visible} setVisible={setVisible}/>
    <Box>
      <Box>
        <Grid container className='banner'> 
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
              <img src={iqunderline} className='mb-4'></img>
              <Typography variant='h3' className='fs-43 fw-600 mb-3 mx-auto' sx={{maxWidth:"1100px"}}>Precision-engineered AI platform revolutionizing your recruitment process.</Typography>
              <Typography variant='h4' className='fs-18 fw-500 mx-auto' sx={{maxWidth:"920px"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </Typography>
             
              <Box className='d-flex gap-10 justify-content-center' sx={{mt:"60px",mb:"10px"}}>
              <Link to={IsLoggedIn?'/chat-bot':'/signin'} className='d-flex Generate-Vacancy-btn' style={{gap:"2px",textDecoration:"none"}}>
                <Button className='primary-btn fs-16' sx={{px:"24px",borderRadius:"74px !important"}}>Generate Vacancy</Button><Button className='primary-btn' sx={{minWidth:'54px !important',height:'54px !important',borderRadius:"50% !important"}}><EastIcon/> </Button>
                </Link>
              </Box>
              
              
            </Grid>
        </Grid>
      </Box>
      <Box className="my-5 px-5">
        <Grid container> 
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center mx-auto mb-3'>          
            <Box>
              <div class="divider-text"><p className='px-3 m-0'><span className='text-orange p-0 fs-27 fw-700'>Used By 100+ Companies &nbsp;</span><span className='p-0 fs-27 fw-700'>From Startups To Large Enterprises</span></p></div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box className='d-flex flex-wrap gap-30 justify-space-between'>
              <Box className="service-card">
                <Box className='m-auto'>
                  <Typography variant='h1' className='fs-50 fw-600'>234+</Typography>
                  <Typography variant='h3' className='fs-16 fw-400' >Services</Typography>
                </Box>
              </Box>
              <Box className="service-card">
                <Box className='m-auto'>
                  <Typography variant='h1' className='fs-50 fw-600'>234+</Typography>
                  <Typography variant='h3' className='fs-16 fw-400' >Services</Typography>
                </Box>
              </Box>
              <Box className="service-card">
                <Box className='m-auto'>
                  <Typography variant='h1' className='fs-50 fw-600'>234+</Typography>
                  <Typography variant='h3' className='fs-16 fw-400' >Services</Typography>
                </Box>
              </Box>
              <Box className="service-card">
                <Box className='m-auto'>
                  <Typography variant='h1' className='fs-50 fw-600'>234+</Typography>
                  <Typography variant='h3' className='fs-16 fw-400' >Services</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="my-5  px-5">
        <Grid container> 
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='mx-auto'>          
            <Box className='text-start'>
              <Typography variant='h1' className='fs-48 fw-600'>Post <span className='text-orange'>your Job</span></Typography>
              <Typography variant='h1' className='fs-48 fw-600'>With Artificial Intelligence</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='mt-3'>
                <Typography variant='h4' className='fs-18 fw-500 text-gray'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </Typography>
                <Box className="d-flex mt-5 gap-30">
                  <Box>
                    <img src={InteractwithChatbot} />
                  </Box>
                  <Box className='d-flex flex-column justify-content-around'>
                    <Typography variant='h3' className='fs-22 fw-600'>Interact with Chatbot</Typography>
                    <Typography variant='h3' className='fs-18 fw-500' sx={{color: '#1E293B'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </Typography>
                  </Box>
                </Box>
                <Box className="d-flex mt-5 gap-30">
                  <Box>
                    <img src={PreviewTemplate} />
                  </Box>
                  <Box className='d-flex flex-column justify-content-around'>
                    <Typography variant='h3' className='fs-22 fw-600'>Interact with Chatbot</Typography>
                    <Typography variant='h3' className='fs-18 fw-500' sx={{color: '#1E293B'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </Typography>
                  </Box>
                </Box>
                <Box className="d-flex mt-5 gap-30">
                  <Box>
                    <img src={PreviewTemplate90} />
                  </Box>
                  <Box className='d-flex flex-column justify-content-around'>
                    <Typography variant='h3' className='fs-22 fw-600'>Interact with Chatbot</Typography>
                    <Typography variant='h3' className='fs-18 fw-500' sx={{color: '#1E293B'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </Typography>
                  </Box>
                </Box>
                <Box className='d-flex gap-10' sx={{mt:"60px",mb:"10px"}}>
                  <Button className='primary-btn-outline' sx={{px:"24px"}}>Try for Free</Button><Button className='primary-btn-outline' sx={{minWidth:'fit-content !important'}}><EastIcon></EastIcon> </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='text-end'>  
                <Box className="postjob-card">
                  <img src={postjob}></img>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="my-5 px-5">
        <Grid container> 
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center mx-auto mb-3'>          
            <Box>
              <Typography variant='h4' className='fs-22 fw-500' sx={{color:"#2C2C2D"}}>Subscription Plan</Typography>
              <Box class="divider-text"><p className='px-3 m-0'><span className='p-0 fs-48 fw-700'>Our&nbsp;</span><span className='text-orange p-0 fs-48 fw-700'>Subscription Plan</span></p></Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box className="SubscriptionPlan">
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
        </Grid>
      </Box>

      <Box className="my-5 px-5">
        <Grid container> 
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-start mx-auto mb-3'>
            <Box>
              <p className='px-3 m-0 d-flex flex-wrap'><span className='p-0 fs-48 fw-700'>Tapping&nbsp;</span><span className='text-orange p-0 fs-48 fw-700'>Intelligence&nbsp;</span><span className='p-0 fs-48 fw-700'>Through Talent</span></p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='mx-auto mb-3'>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex flex-wrap gap-20 justify-content-center'>
                <Card className='d-flex gap-20 article' sx={{padding: '36px 24px 45px 55px'}}>
                  <Box sx={{width: '264px',height: '243px'}} className='d-flex'>
                    <img className='m-auto' style={{width: '264px',height: 'auto',objectFit: 'cover'}} src={NeuromarketingInfusedContent} />
                  </Box>
                  <Box className='gap-20 d-flex flex-column text-start'>
                    <Typography>Neuromarketing-Infused Content</Typography>
                    <Typography>The AI chatbot leverages neuromarketing principles to create compelling and  psychologically engaging job descriptions</Typography>
                    <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                  </Box>
                </Card>
                <Card className='d-flex gap-20 article' sx={{padding: '36px 24px 45px 55px'}}>
                  <Box sx={{width: '264px',height: '243px'}} className='d-flex'>
                    <img className='m-auto' style={{width: '264px',height: 'auto',objectFit: 'cover'}} src={NeuromarketingInfusedContent} />
                  </Box>
                  <Box className='gap-20 d-flex flex-column text-start'>
                    <Typography>Neuromarketing-Infused Content</Typography>
                    <Typography>The AI chatbot leverages neuromarketing principles to create compelling and  psychologically engaging job descriptions</Typography>
                    <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                  </Box>
                </Card>
                <Card className='d-flex gap-20 article' sx={{padding: '36px 24px 45px 55px'}}>
                  <Box sx={{width: '264px',height: '243px'}} className='d-flex'>
                    <img className='m-auto' style={{width: '264px',height: 'auto',objectFit: 'cover'}} src={NeuromarketingInfusedContent} />
                  </Box>
                  <Box className='gap-20 d-flex flex-column text-start'>
                    <Typography>Neuromarketing-Infused Content</Typography>
                    <Typography>The AI chatbot leverages neuromarketing principles to create compelling and  psychologically engaging job descriptions</Typography>
                    <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                  </Box>
                </Card>
                <Card className='d-flex gap-20 article' sx={{padding: '36px 24px 45px 55px'}}>
                  <Box sx={{width: '264px',height: '243px'}} className='d-flex'>
                    <img className='m-auto' style={{width: '264px',height: 'auto',objectFit: 'cover'}} src={NeuromarketingInfusedContent} />
                  </Box>
                  <Box className='gap-20 d-flex flex-column text-start'>
                    <Typography>Neuromarketing-Infused Content</Typography>
                    <Typography>The AI chatbot leverages neuromarketing principles to create compelling and  psychologically engaging job descriptions</Typography>
                    <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="my-5">
        <Grid container> 
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
    </Box>
    <Footer/>
   </Box>
  )
}

export default Home
