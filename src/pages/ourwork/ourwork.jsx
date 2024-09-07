import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import iqunderline from '../../assets/img/iqunderline.png';
import ourwork from '../../assets/img/ourwork.jfif';
import  '../../pages/ourwork/ourwork.scss';
import message from "../../assets/icons/message.png";
import Vacancyimg from '../../assets/img/Vacancyimg.png';
import img1 from '../../assets/img/companylogs/img (1).png';
import img2 from '../../assets/img/companylogs/img (2).png';
import img3 from '../../assets/img/companylogs/img (3).png';
import img4 from '../../assets/img/companylogs/img (4).png';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Link } from 'react-router-dom';

const OurWork = () => {
  return (
    <>
    <Header />
    <Box >
        <Grid container> 
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='text-start px-5 pt-5'>
              <img src={iqunderline} className='mb-4'></img>
              <Typography variant='h3' className='fs-40 fw-700 mb-3 text-orange'>Who we are</Typography>
              <Typography variant='h4' className='fs-17 fw-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </Typography>
              <Box className='d-flex gap-10 justify-content-start' sx={{mt:"60px",mb:"10px"}}>
                <Button className='primary-btn' sx={{px:"24px"}}>Let start</Button><Button className='primary-btn' sx={{minWidth:'fit-content !important'}}><EastIcon></EastIcon> </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <img style={{width:"100%",borderRadius:"88px 0 0 0 "}} src={ourwork} />
            </Grid>
        </Grid>
        <Grid container className='px-5'>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className=' pt-5 pb-5'>
              <Typography variant='h4' className='fs-22 fw-500'> In sights</Typography>
              <Typography variant='h3' className='fs-40 fw-600 mb-3 text-orange'>Our work</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className='card flex-row'>
                <Box className="Content">
                  <Box>
                    <Typography variant='h4' className='fs-28 fw-600'> Lorem</Typography>
                    <Typography variant='h4' className='fs-28 fw-600'>Ipsum is simply dummy text </Typography>
                  </Box>
                  <Typography variant='h4' className='fs-14 fw-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. </Typography>
                  <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                </Box>
              
                  <img className='mt-auto' width={93} height={93} src={message} />
            
           
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className='card flex-row'>
                <Box className="Content">
                  <Box>
                    <Typography variant='h4' className='fs-28 fw-600'> Lorem</Typography>
                    <Typography variant='h4' className='fs-28 fw-600'>Ipsum is simply dummy text </Typography>
                  </Box>
                  <Typography variant='h4' className='fs-14 fw-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. </Typography>
                  <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                </Box>
      
                  <img className='mt-auto' width={93} height={93} src={message} />
               
           
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className='card flex-row'>
                <Box className="Content">
                  <Box>
                    <Typography variant='h4' className='fs-28 fw-600'> Lorem</Typography>
                    <Typography variant='h4' className='fs-28 fw-600'>Ipsum is simply dummy text </Typography>
                  </Box>
                  <Typography variant='h4' className='fs-14 fw-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. </Typography>
                  <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                </Box>
             
                  <img className='mt-auto' width={93} height={93} src={message} />
              
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className='card flex-row'>
                <Box className="Content">
                  <Box>
                    <Typography variant='h4' className='fs-28 fw-600'> Lorem</Typography>
                    <Typography variant='h4' className='fs-28 fw-600'>Ipsum is simply dummy text </Typography>
                  </Box>
                  <Typography variant='h4' className='fs-14 fw-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. </Typography>
                  <Link className='text-orange fs-18 fw-500 text-underline-none' style={{maxWidth:"fit-content"}}>Read More <EastIcon></EastIcon></Link>
                </Box>
      
                  <img className='mt-auto' width={93} height={93} src={message} />
           
              </Card>
            </Grid>
        </Grid>
        <Grid container className=''>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <img style={{width:"100%",height:"auto"}} src={Vacancyimg}/>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className='px-5 d-flex'>
            <Box className="m-auto" sx={{maxWidth:"536px"}}>
              <Typography variant='h3' className='fs-16 fw-500 mb-15 text-orange '>Lorem ipsum</Typography>
              <Typography variant='h3' className='fs-28 fw-600 mb-15 text-orange '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
              <Typography variant='h3' className='fs-16 fw-500 mb-15 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='mt-120 mb-120'>
            <Typography variant='h3' className='fs-33 fw-600 mb-30 text-black text-center '>Our Partnership and Collabratiors</Typography>
            <Typography variant='h3' className='fs-14 fw-600 mb-50 text-black text-center mx-auto' sx={{maxWidth:"555px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</Typography>
            <Box className="partners">
              <img  src={img4} />
              <img  src={img1} />
              <img  src={img2} />
              <img  src={img3} />
              <img  src={img4} />
              <img  src={img1} />
              <img  src={img2} />
              <img  src={img3} />
            </Box>
          </Grid>
        </Grid>
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
    </>
  )
}

export default OurWork
