import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/img/login-img.png';
import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/Google.svg";
import "../auth/auth.scss";
import { loginValidationSchema } from "../../utils/validation";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/action/authAction';

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = async(values,{setSubmitting}) => {
        try {
            await dispatch(login(values, navigate));
           
        } catch (error) {
            console.log('error12',error);
        }  
        finally{
            setSubmitting(false);
            console.log("entered finally")
        }
    };

    const handleGoogleSignIn=()=>{
        const googleApiAuthUrl="https://iqhireapi.dev.vinove.com/auth/google";
        window.location.href=googleApiAuthUrl;
    }

    return (
        <Grid container sx={{ padding: "50px" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ padding: "50px" }}>
                <Box sx={{ maxWidth: '393px' }}>
                    <Stack>
                    <Link to={"/"}><img style={{ marginBottom: '50px' }} width={162} height={66} src={logo} alt="logo" /></Link>
                        <Box>
                            <Typography variant='h4' className='text-orange fs-20 fw-700 mb-2'>Sign in</Typography>
                            <Typography variant='h4' className='fs-14 fw-500' sx={{ color: '#1E293B' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Typography>
                        </Box>
                    </Stack>
                    <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={onSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                    <FormControl>
                                        <Typography className='fs-14 fw-500'>Email</Typography>
                                        <Field
                                            as={OutlinedInput}
                                            className='field-radious-30'
                                            name="email"
                                            placeholder='Example@email.com'
                                            autoComplete="off"
                                        />
                                        <ErrorMessage name="email" component={FormHelperText} style={{ color: 'red' }} />
                                    </FormControl>
                                    <FormControl variant="outlined">
                                        <Typography className='fs-14 fw-500'>Password</Typography>
                                        <Field
                                            as={OutlinedInput}
                                            className='field-radious-30'
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='At least 8 characters'
                                            autoComplete="off"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        <ErrorMessage name="password" component={FormHelperText} style={{ color: 'red' }} />
                                    </FormControl>
                                    <Link className='fs-14 fw-600 text-orange text-decoration-none text-end cursor-pointer' to="/forgotpassword">Forgot Password?</Link>
                                    <Button type="submit" className="primary-btn" disabled={isSubmitting}>{isSubmitting?"Loading...":"Login"}</Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                    <Box>
                        <div className="divider-text"><span>or</span></div>
                    </Box>
                    <Stack>
                        <Button className='google-btn text-center w-100' onClick={handleGoogleSignIn} >
                            <img src={google} alt="google" />
                            <Typography className='fs-14 fw-400 text-center text-black'>Sign in with Google</Typography>
                        </Button>
                    </Stack>
                    <Stack>
                        <Typography className='fs-14 fw-400 text-center text-black my-3'>Don't you have an account?<Link className='fs-14 fw-500 text-orange text-decoration-none text-end cursor-pointer' to="/signup">Sign up</Link></Typography>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='d-md-flex d-none'>
                <Box className='login-img-box'>
                    <img src={loginimg} alt="login" />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Signin;