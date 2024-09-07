import { Box, Button, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo.svg'
import './dashboard.scss'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cardssigned from '../../assets/img/svg/Cardssigned.svg';
import Cardssignedbookmark from '../../assets/img/svg/Cardssignedbookmark.svg';
import nodata from '../../assets/img/nodata.png';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Dashboard = () => {
  return (
    <Box className="dashboard">
        <Box className="drawer flex-column">
            <Stack sx={{paddingInline:"10%"}}>
                <List>
                    <ListItem>
                    <img width={174} src={logo} className='' />

                    </ListItem>
                    <ListItem>
                        <GridViewIcon/>
                        Dashboard
                    </ListItem>
                    <ListItem className=''>
                    <svg className='svg' style={{margin:"2px"}} width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 6.26074L9.99997 10.983M9.99997 10.983L1.49997 6.26074M9.99997 10.983L10 20.483M19 15.0415V6.92444C19 6.5818 19 6.41048 18.9495 6.25768C18.9049 6.1225 18.8318 5.99842 18.7354 5.89373C18.6263 5.77539 18.4766 5.69219 18.177 5.52579L10.777 1.41468C10.4934 1.25712 10.3516 1.17834 10.2015 1.14745C10.0685 1.12012 9.93146 1.12012 9.79855 1.14745C9.64838 1.17834 9.50658 1.25712 9.22297 1.41468L1.82297 5.52579C1.52345 5.69219 1.37369 5.77539 1.26463 5.89373C1.16816 5.99842 1.09515 6.1225 1.05048 6.25768C1 6.41048 1 6.5818 1 6.92444V15.0415C1 15.3842 1 15.5555 1.05048 15.7083C1.09515 15.8435 1.16816 15.9676 1.26463 16.0723C1.37369 16.1906 1.52345 16.2738 1.82297 16.4402L9.22297 20.5513C9.50658 20.7089 9.64838 20.7876 9.79855 20.8185C9.93146 20.8459 10.0685 20.8459 10.2015 20.8185C10.3516 20.7876 10.4934 20.7089 10.777 20.5513L18.177 16.4402C18.4766 16.2738 18.6263 16.1906 18.7354 16.0723C18.8318 15.9676 18.9049 15.8435 18.9495 15.7083C19 15.5555 19 15.3842 19 15.0415Z" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Drafted job vancancies
                    </ListItem>
                    <ListItem className='active'>
                        <GroupOutlinedIcon/>
                        Validated Job Vacancies
                    </ListItem>
                </List>
            </Stack>
            <Stack sx={{paddingInline:"10%"}} className='mt-auto'>
                <List>

                    <ListItem className=''>
                        <SettingsOutlinedIcon/>
                        Settings
                    </ListItem>
                    <ListItem >
                        <LogoutOutlinedIcon sx={{transform: "scaleX(-1)"}}/>
                        Logout
                    </ListItem>
                </List>
            </Stack>
        </Box>
        <Box className="dashboard-content flex-column">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box className="cstm-card cardheader">
                        <Button className='primary-btn arrowbtn'><KeyboardArrowLeftIcon className='fs-40'/> </Button>
                        <Typography>h1</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      

                        <Box className="cstm-card flex-column">
                            <Box className="d-flex gap-15">
                                <Box>
                                    <img src={Cardssigned}/>
                                </Box>
                                <Box>
                                    <Typography variant='h4' className='fs-16 fw-500'>Amount Vacancies Text Generated</Typography>
                                    <Typography variant='h4' className='fs-24 fw-400'>00</Typography>
                                </Box>
                            </Box>
                            <Box className="mt-auto">
                                <Link className='text-orange fs-14 fw-500 text-underline-none d-flex' style={{maxWidth:"fit-content"}}>View All <ArrowForwardIosIcon className='fs-10 my-auto'/></Link>
                            </Box>
                        </Box>
                
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box className="cstm-card flex-column">
                            <Box className="d-flex gap-15">
                                <Box>
                                    <img src={Cardssignedbookmark}/>
                                </Box>
                                <Box>
                                    <Typography variant='h4' className='fs-16 fw-500'>Amount of Credits Left</Typography>
                                    <Typography variant='h4' className='fs-24 fw-400'>00</Typography>
                                </Box>
                            </Box>
                            <Box className="mt-auto">
                                <Link className='text-orange fs-14 fw-500 text-underline-none d-flex' style={{maxWidth:"fit-content"}}>View All <ArrowForwardIosIcon className='fs-10 my-auto'/></Link>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box className="cstm-card flex-column">
                            <Box className="d-flex gap-15">
                                <Box>
                                    <img src={Cardssigned}/>
                                </Box>
                                <Box>
                                    <Typography variant='h4' className='fs-16 fw-500'>Drafted Job Vacancies</Typography>
                                    <Typography variant='h4' className='fs-24 fw-400'>00</Typography>
                                </Box>
                            </Box>
                            <Box className="mt-auto">
                                <Link className='text-orange fs-14 fw-500 text-underline-none d-flex' style={{maxWidth:"fit-content"}}>View All <ArrowForwardIosIcon className='fs-10 my-auto'/></Link>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{paddingTop:"16px",height:"100%",flex:'1 1 auto'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='h-100'>
                    <Box className="cstm-card flex-column">
                        <Box id="table">
                            
                        </Box>
                        <Box className="m-auto text-center">
                            <img width={200} height={110} src={nodata} />
                            <Typography variant='h4' className='fs-18 fw-500 text-center mt-10' sx={{maxWidth:"300px",color:"#E1E1E1"}}>No data found</Typography>
                            <Typography variant='h4' className='fs-14 fw-400 text-center mt-10' sx={{maxWidth:"300px",color:"#A6A6A7"}}>Lorem ipsum dolor sit amet, consec  consec  onsec onsec</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    </Box>
  )
}

export default Dashboard
