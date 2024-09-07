import { Box, Button, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel,  OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import loginimg from '../../assets/img/login-img.png';
import "../auth/auth.scss";
import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/Google.svg";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import arrow from "../../assets/img/arrow.svg";
const Forgotpassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <Grid container sx={{padding:"50px"}}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  sx={{padding:"50px"}}>
            <Box  sx={{maxWidth: '393px'}}>
                <Stack>
                <Link to={"/"}><img style={{ marginBottom: '70px' }} width={162} height={66} src={logo} alt="logo" /></Link>
                    <Box>
                        <Typography variant='h4'className='text-orange fs-20 fw-700 mb-2'>Forgot Password</Typography>
                        <Typography variant='h4' className='fs-14 fw-500' sx={{color: '#1E293B'}}>
                            Enter your email and we'll send you instructions to reset your password.
                        </Typography>
                    </Box>
                </Stack>
                <Stack className='d-flex flex-column gap-20 mt-4'>
                    <FormControl>
                        <Typography className='fs-14 fw-500'>Email</Typography>
                        <OutlinedInput
                            className='field-radious-30'
                            id="outlined-adornment-password"
                            placeholder='Example@email.com'
                        />
                        <FormHelperText></FormHelperText>
                    </FormControl>
          
                        <Button className="primary-btn" onClick={()=>navigate("/resetpassword")}>Send  reset link</Button>
                        <Link className='fs-14 fw-600 text-orange text-decoration-none text-start cursor-pointer'  to="/signin">
                         <img src={arrow}></img>
                        
                        Back to login</Link>
                </Stack>

            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='d-md-flex d-none'>
            <Box className='login-img-box'>
                <img src={loginimg}></img>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Forgotpassword
