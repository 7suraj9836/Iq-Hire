import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    Box, Button, Checkbox, FormControl, FormControlLabel, Grid,
    IconButton, InputAdornment, OutlinedInput, Stack, Typography,
    Tabs, Tab,
    FormHelperText
} from '@mui/material';
import { Link } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/action/authAction';
import { useNavigate } from 'react-router-dom';
import loginimg from '../../assets/img/login-img.png';
import logo from "../../assets/img/logo.svg";
import google from "../../assets/img/Google.svg";
import { agencyValidationSchema, corporateValidationSchema } from "../../utils/validation";
import { styled } from '@mui/material/styles';
import "../auth/auth.scss";
import { trimValue } from '../../utils/utilityFunctions/trimValue';

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
    fontWeight: 'bold',
    flex: 1,
    '&.Mui-selected': {
        backgroundColor: '#F89B53',
        color: theme.palette.common.white,
    },
    '&:not(.Mui-selected)': {
        color: '#F89B53',
    },
}));

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0); // 0 for Agency, 1 for Corporate

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const agencyInitialValues = {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        password: '',
        terms: false,
    };

    const companyInitialValues = {
        firstName: '',
        lastName: '',
        companyName: '',
        companyWebsite: '',
        email: '',
        password: '',
        terms: false,
    };

    const onSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);
        const trimmedValues=trimValue(values);
        const { terms, ...payload } = trimmedValues // Exclude `terms` from the payload
        let type = selectedTab == 0 ? "agency" : "corporate";
        payload.type = type;
        dispatch(signup(payload, navigate));
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleInputChange = (e, setFieldValue, field) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9]*$/.test(value)) {
          setFieldValue(field, value);
        }
      };

     


    return (
        <Grid container sx={{ padding: "50px" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ padding: "50px" }}>
                <Box sx={{ maxWidth: '410px' }}>
                    <Stack>
                        <Link to={"/"}><img style={{ marginBottom: '50px' }} width={162} height={66} src={logo} alt="logo" /></Link>
                        <Box style={{ border: "1px solid #F89B53", borderRadius: "30px", marginBottom: "20px" }}>
                            <CustomTabs value={selectedTab} onChange={handleTabChange} aria-label="signup tabs">
                                <CustomTab label="Agency Recruiter" />
                                <CustomTab label="Corporate Recruiter" />
                            </CustomTabs>
                        </Box>
                        <Typography variant='h4' className='text-orange fs-20 fw-700 mb-2'>Sign Up</Typography>
                        <Typography variant='h4' className='fs-14 fw-500' sx={{ color: '#1E293B' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </Typography>
                    </Stack>

                    {selectedTab === 0 && (
                        <Formik initialValues={agencyInitialValues} validationSchema={agencyValidationSchema} onSubmit={onSubmit}>
                            {({ isSubmitting,setFieldValue,errors,touched }) => (
                                <Form>
                                    <Stack className='d-flex flex-column gap-20 mt-4'>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>First Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="firstName"
                                                placeholder='Enter first name'
                                                onChange={(e) => handleInputChange(e, setFieldValue, 'firstName')}
                                            />
                                            <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Last Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="lastName"
                                                placeholder='Enter last name'
                                                onChange={(e) => handleInputChange(e, setFieldValue, 'lastName')}
                                            />
                                            <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Recruitment Agency Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="companyName"
                                                placeholder='Enter name'
                                            />
                                            <ErrorMessage name="companyName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Email</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="email"
                                                placeholder='Example@email.com'
                                            />
                                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl variant="outlined">
                                            <Typography className='fs-14 fw-500'>Password</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='At least 8 characters'
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
                                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        {
                                            !errors.password  &&  <FormHelperText>Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.
                                            </FormHelperText>
                                        }
                                        {/* <Link className='fs-14 fw-600 text-orange text-decoration-none text-end cursor-pointer'>Forgot Password?</Link> */}
                                        <Button type="submit" className="primary-btn" disabled={isSubmitting}>Sign up</Button>
                                    </Stack>
                                    <Stack>
                                        <Typography className='my-3'>
                                            <FormControlLabel
                                                className='fs-12 fw-400 mr-1'
                                                control={<Field as={Checkbox} name="terms" />}
                                                label="Yes, I agree to the"
                                            />
                                            <Link className='fs-12 fw-500 text-orange text-decoration-none text-end cursor-pointer'>Terms of service & privacy policy</Link>
                                            <ErrorMessage name="terms" component="div" style={{ color: 'red' }} />
                                        </Typography>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    )}

                    {selectedTab === 1 && (
                        <Formik initialValues={companyInitialValues} validationSchema={corporateValidationSchema} onSubmit={onSubmit}>
                            {({ isSubmitting,setFieldValue,errors }) => (
                                <Form>
                                    <Stack className='d-flex flex-column gap-20 mt-4'>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>First Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="firstName"
                                                placeholder='Enter first name'
                                                onChange={(e) => handleInputChange(e, setFieldValue, 'firstName')}
                                            />
                                            <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Last Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="lastName"
                                                placeholder='Enter last name'
                                                onChange={(e) => handleInputChange(e, setFieldValue, 'lastName')}
                                            />
                                            <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Company Name</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="companyName"
                                                placeholder='Enter Company Name'
                                            />
                                            <ErrorMessage name="companyName" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Company Website</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="companyWebsite"
                                                placeholder='Enter Company Website'
                                            />
                                            <ErrorMessage name="companyWebsite" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl>
                                            <Typography className='fs-14 fw-500'>Email</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="email"
                                                placeholder='Example@email.com'
                                            />
                                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        <FormControl variant="outlined">
                                            <Typography className='fs-14 fw-500'>Password</Typography>
                                            <Field
                                                as={OutlinedInput}
                                                className='field-radious-30'
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='At least 8 characters'
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
                                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                                        </FormControl>
                                        {
                                            !errors.password  &&  <FormHelperText>Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.
                                            </FormHelperText>
                                        }
                                        {/* <Link className='fs-14 fw-600 text-orange text-decoration-none text-end cursor-pointer'>Forgot Password?</Link> */}
                                        <Button type="submit" className="primary-btn" disabled={isSubmitting}>Sign up</Button>
                                    </Stack>
                                    <Stack>
                                        <Typography className='my-3'>
                                            <FormControlLabel
                                                className='fs-12 fw-400 mr-1'
                                                control={<Field as={Checkbox} name="terms" />}
                                                label="Yes, I agree to the"
                                            />
                                            <Link className='fs-12 fw-500 text-orange text-decoration-none text-end cursor-pointer'>Terms of service & privacy policy</Link>
                                            <ErrorMessage name="terms" component="div" style={{ color: 'red' }} />
                                        </Typography>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    )}

                    <Stack>
                        <Typography className='fs-14 fw-400 text-center text-black my-3'>Already have an account? <Link className='fs-14 fw-500 text-orange text-decoration-none text-end cursor-pointer' to="/signin">Login</Link></Typography>
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

export default Signup;