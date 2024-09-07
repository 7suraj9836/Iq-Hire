import { Box, Button, Grid, List, ListItem } from '@mui/material'
import React from 'react'
import logo from '../../src/assets/img/logo.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router';
import '../assets/styles/footer.scss';
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='px-5'>
          <img width={138} height={52} src={logo} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='px-5'>
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <List>
                <ListItem className='fs-16 fw-500 gap-10'>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content', borderColor: "#ffffff !important" }}>
                    <PhoneIcon></PhoneIcon>
                  </Button>
                  Tax No.  NL8662145B01</ListItem>
                <ListItem className='fs-16 fw-500 gap-10'>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <PhoneIcon></PhoneIcon>
                  </Button>KvK No.  NL8662145B01</ListItem>
                <ListItem className='fs-16 fw-500 gap-10'>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <HomeIcon></HomeIcon>
                  </Button>
                  Snekertrekweg 61, <br></br>8912 AA LEEUWARDEN <br></br> The Netherlands</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <List>
                <ListItem className='fs-18 fw-700'>Who We Are</ListItem>
                <ListItem className='fs-16 fw-500'>Our Work</ListItem>
                <ListItem className='fs-16 fw-500' onClick={() => navigate('/contactus')} sx={{ cursor: "pointer" }}>Contact Us</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={3} xl={3}>
            <List>
              <ListItem className='fs-18 fw-700'>Others</ListItem>
              <ListItem className='fs-16 fw-500'>Your Feedback </ListItem>
              <ListItem className='fs-16 fw-500'>
                <Box className='flex-wrap' sx={{gap: "6px"}}>    
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <TwitterIcon/>
                  </Button>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <FacebookIcon/>
                  </Button>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <LinkedInIcon/>
                  </Button>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <YouTubeIcon/>
                  </Button>
                  <Button className='primary-btn-outline' sx={{ minWidth: 'fit-content' }}>
                    <InstagramIcon/>
                  </Button>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <List className='d-flex flex-wrap'>
              <ListItem className='fs-14 fw-600' sx={{ color: '#2C2C2D !important', opacity: "0.5", width: "fit-content" }}>Copyright ©2024. All Rights Reserved.</ListItem>
              <ListItem className='fs-14 fw-600' sx={{ color: '#2C2C2D !important', opacity: "0.5", width: "fit-content",cursor: "pointer" }} onClick={() => navigate('/terms/privacy')} >Privacy statement</ListItem>
              <ListItem className='fs-14 fw-600' sx={{ color: '#2C2C2D !important', opacity: "0.5", width: "fit-content",cursor: "pointer" }} onClick={() => navigate('/terms/service')} >Terms of Service</ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box >
  )
}

export default Footer
