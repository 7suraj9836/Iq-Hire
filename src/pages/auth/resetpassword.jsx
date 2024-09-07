import { Box, Button, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import loginimg from '../../assets/img/login-img.png';
import "../auth/auth.scss";
import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/Google.svg";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import arrow from "../../assets/img/arrow.svg";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { resetPasswordValidationSchema } from '../../utils/validation';

const Resetpassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

   
  return (
    // <Grid container sx={{padding:"50px"}}>
    //     <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  sx={{padding:"50px"}}>
    //         <Box  sx={{maxWidth: '393px'}}>
    //             <Stack>
    //             <Link to={"/"}><img style={{ marginBottom: '70px' }} width={162} height={66} src={logo} alt="logo" /></Link>
    //                 <Box>
    //                     <Typography variant='h4'className='text-orange fs-20 fw-700 mb-2'>Reset Password?</Typography>
    //                     <Typography variant='h4' className='fs-14 fw-500' sx={{color: '#1E293B'}}>
    //                     Your new password must be different from previously used passwords
    //                     </Typography>
    //                 </Box>
    //             </Stack>
    //             <Stack className='d-flex flex-column gap-20 mt-4'>
    //                 <FormControl>
    //                 {/* <Typography className='fs-14 fw-500'>Password</Typography> */}
    //                 <OutlinedInput
    //                         className='field-radious-30'
    //                         id="outlined-adornment-password"
    //                         type={showPassword ? 'text' : 'password'}
    //                         placeholder='Enter new password'
    //                         endAdornment={
    //                         <InputAdornment position="end">
    //                             <IconButton
    //                             aria-label="toggle password visibility"
    //                             onClick={handleClickShowPassword}
    //                             onMouseDown={handleMouseDownPassword}
    //                             edge="end"
    //                             >
    //                             {showPassword ? <VisibilityOff /> : <Visibility />}
    //                             </IconButton>
    //                         </InputAdornment>
    //                         }
    //                         // label="Password"
    //                     />
    //                     <FormHelperText>Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.</FormHelperText>
    //                 </FormControl>
    //                 <FormControl variant="outlined">
    //                     {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
    //                     {/* <Typography className='fs-14 fw-500'>Password</Typography> */}
    //                     <OutlinedInput
    //                         className='field-radious-30'
    //                         id="outlined-adornment-password"
    //                         type={showPassword ? 'text' : 'password'}
    //                         placeholder='Enter confirm password'
    //                         endAdornment={
    //                         <InputAdornment position="end">
    //                             <IconButton
    //                             aria-label="toggle password visibility"
    //                             onClick={handleClickShowPassword}
    //                             onMouseDown={handleMouseDownPassword}
    //                             edge="end"
    //                             >
    //                             {showPassword ? <VisibilityOff /> : <Visibility />}
    //                             </IconButton>
    //                         </InputAdornment>
    //                         }
    //                         // label="Password"
    //                     />
    //                     <FormHelperText>Confirm password must match the new password.</FormHelperText>

    //                 </FormControl>
    //                     <Button className="primary-btn">Set new password</Button>
    //                     <Link className='fs-14 fw-600 text-orange text-decoration-none text-start cursor-pointer' to="/signin"> <img src={arrow}></img>Back to login</Link>
    //             </Stack>
    //         </Box>
    //     </Grid>
    //     <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='d-md-flex d-none'>
    //         <Box className='login-img-box'>
    //             <img src={loginimg}></img>
    //         </Box>
    //     </Grid>
    // </Grid>
    <Grid container sx={{ padding: "50px" }}>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ padding: "50px" }}>
        <Box sx={{ maxWidth: '393px' }}>
            <Stack>
                <Link to={"/"}><img style={{ marginBottom: '70px' }} width={162} height={66} src={logo} alt="logo" /></Link>
                <Box>
                    <Typography variant='h4' className='text-orange fs-20 fw-700 mb-2'>Reset Password?</Typography>
                    <Typography variant='h4' className='fs-14 fw-500' sx={{ color: '#1E293B' }}>
                        Your new password must be different from previously used passwords
                    </Typography>
                </Box>
            </Stack>
            <Formik
                initialValues={{ newPassword: '', confirmPassword: '' }}
                validationSchema={resetPasswordValidationSchema}
                onSubmit={(values) => {
                    // Handle form submission
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Stack className='d-flex flex-column gap-20 mt-4'>
                            <FormControl>
                                <Field
                                    as={OutlinedInput}
                                    className='field-radious-30'
                                    name="newPassword"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter new password'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {!errors?.newPassword && (<FormHelperText>Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.
                                    </FormHelperText>)
                                }
                                
                                <ErrorMessage name="newPassword" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <FormControl variant="outlined">
                                <Field
                                    as={OutlinedInput}
                                    className='field-radious-30'
                                    name="confirmPassword"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter confirm password'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText>Confirm password must match the new password.</FormHelperText>
                                <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
                            </FormControl>
                            <Button type="submit" className="primary-btn">Set new password</Button>
                            <Link className='fs-14 fw-600 text-orange text-decoration-none text-start cursor-pointer' to="/signin">
                                <img src={arrow} alt="arrow" /> Back to login
                            </Link>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Box>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='d-md-flex d-none'>
        <Box className='login-img-box'>
            <img src={loginimg} alt="login" />
        </Box>
    </Grid>
</Grid>
  )
}

export default Resetpassword
