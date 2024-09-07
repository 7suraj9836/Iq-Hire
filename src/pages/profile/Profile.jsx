import { Avatar, Badge, Box, Button, Card, Divider, Grid, IconButton, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import PersonalInformation from './PersonalInformation';
import ClientInformation from './ClientInformation';
import CompanyInformation from './CompanyInformation';
import { Margin } from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileInfo } from '../../redux/action/profileAction';
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

const Profile = () => {
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
            <Card>
              
            </Card>
            <Box sx={{ boxShadow: "0px 9.63px 35.53px -24.81px #757576",padding:"44px 33px 62px 35px",borderRadius:"0px 21.75px 21.75px 21.75px"}}>
                <Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='text-center'>
                        <Box className="text-center profileavatar mx-auto">
                            <Avatar className='m-auto ' >
                            </Avatar>
                            <Button className="primary-btn " sx={{minWidth:"fit-content"}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1678 3.44704L12.1941 2.42009C12.4081 2.20614 12.6983 2.08594 13.0009 2.08594C13.3034 2.08594 13.5936 2.20614 13.8076 2.42009C14.0215 2.63405 14.1417 2.92423 14.1417 3.22681C14.1417 3.52939 14.0215 3.81957 13.8076 4.03353L7.34715 10.494C7.02551 10.8154 6.62887 11.0517 6.19304 11.1814L4.55953 11.6681L5.04624 10.0346C5.17599 9.5988 5.41226 9.20216 5.73371 8.88053L11.1678 3.44704ZM11.1678 3.44704L12.7727 5.05196M11.8601 9.2346V12.1244C11.8601 12.4875 11.7159 12.8357 11.4592 13.0924C11.2025 13.3491 10.8543 13.4933 10.4913 13.4933H4.10324C3.74019 13.4933 3.39202 13.3491 3.13531 13.0924C2.87859 12.8357 2.73438 12.4875 2.73438 12.1244V5.73639C2.73437 5.37335 2.87859 5.02517 3.13531 4.76846C3.39202 4.51175 3.74019 4.36753 4.10324 4.36753H6.99307" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Button>
                        </Box>
                        <Box>
                            <Typography className="text-orange fs-16 fw-600" variant="h3">{userData?.fullName}</Typography>
                            <Typography className="color-secondary fs-12 fw-500" variant="h3">{userData?.email}</Typography>
                        </Box>
                        <Box sx={{marginTop:"46px",textAlign:"start"}}>
                            <Typography className="color-secondary fs-16 fw-500" variant="h3"><PermIdentityOutlinedIcon/> &nbsp; My Profile</Typography>
                            <Divider sx={{border:"1px solid #717171",marginBlock:"13px"}} />
                            <Typography className="color-secondary fs-16 fw-500" variant="h3"
                            ><LogoutOutlinedIcon/>&nbsp; Log Out</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomTabs value={selectedTab} onChange={handleTabChange} aria-label="profile tabs">
                <CustomTab tabIndex={0} label="Personal Information" />
                <CustomTab tabIndex={1} label="Company Information" />
                <CustomTab tabIndex={2} label="Client's Information" />
            </CustomTabs>
            {selectedTab === 0 && (
                <PersonalInformation/>

            )}
                        {selectedTab === 1 && (
                <CompanyInformation/>
            )}
                        {selectedTab === 2 && (
                <ClientInformation/>
            )}
        </Grid>
    </Grid>
</Box>

</>
  )
}

export default Profile
