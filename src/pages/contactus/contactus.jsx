import { Box, Button, Card, FormControl, FormHelperText, Grid, OutlinedInput, Stack, Typography } from '@mui/material';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Header from '../../components/header';
import Footer from '../../components/footer';
import contactusimg from '../../assets/img/contactusimg.png';
import { contactUsValidationSchema } from "../../utils/validation";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { feedback } from '../../redux/action/contactUsAction';
import "../contactus/contactus.scss";

const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
};

const Contactus = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        dispatch(feedback(values, navigate))
            .then(() => {
                setSubmitting(false);
                resetForm();  // Reset the form after a successful API hit
            })
            .catch(() => {
                setSubmitting(false);
            });
    };

    return (
        <Box>
            <Header />
            <Box className='p-5 position-relative'>
                <Card className='contactus'>
                    <Typography variant='h4' className='fs-18 fw-600 cstm-pr-2'>SEND US A MESSAGE</Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={contactUsValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ borderBottom: "1px solid #C6C6C6" }}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='cstm-pr-2'>
                                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                                    <FormControl>
                                                        <Typography className='fs-14 fw-500'>Full Name</Typography>
                                                        <Field
                                                            as={OutlinedInput}
                                                            className='field-radious-30'
                                                            id="name"
                                                            name="name"
                                                            placeholder='Enter full name'
                                                        />
                                                        <ErrorMessage name="name" component={FormHelperText} style={{ color: 'red' }} />
                                                    </FormControl>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='cstm-pr-2'>
                                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                                    <FormControl>
                                                        <Typography className='fs-14 fw-500'>Primary Email</Typography>
                                                        <Field
                                                            as={OutlinedInput}
                                                            className='field-radious-30'
                                                            id="email"
                                                            name="email"
                                                            placeholder='Enter primary email'
                                                            type="email"
                                                        />
                                                        <ErrorMessage name="email" component={FormHelperText} style={{ color: 'red' }} />
                                                    </FormControl>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='cstm-pr-2'>
                                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                                    <FormControl>
                                                        <Typography className='fs-14 fw-500'>Mobile Number</Typography>
                                                        <Field
                                                            as={OutlinedInput}
                                                            className='field-radious-30'
                                                            id="phone"
                                                            name="phone"
                                                            placeholder='Enter phone number'
                                                        />
                                                        <ErrorMessage name="phone" component={FormHelperText} style={{ color: 'red' }} />
                                                    </FormControl>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='cstm-pr-2'>
                                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                                    <FormControl>
                                                        <Typography className='fs-14 fw-500'>Company Name</Typography>
                                                        <Field
                                                            as={OutlinedInput}
                                                            className='field-radious-30'
                                                            id="company"
                                                            name="company"
                                                            placeholder='Enter Company name'
                                                        />
                                                        <ErrorMessage name="company" component={FormHelperText} style={{ color: 'red' }} />
                                                    </FormControl>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='cstm-pr-2'>
                                                <Stack className='d-flex flex-column gap-20 mt-4'>
                                                    <FormControl>
                                                        <Typography className='fs-14 fw-500'>Your Message</Typography>
                                                        <Field
                                                            as={OutlinedInput}
                                                            className='field-radious-30'
                                                            id="message"
                                                            name="message"
                                                            placeholder='Enter your description....'
                                                            multiline
                                                            rows={1}
                                                        />
                                                        <ErrorMessage name="message" component={FormHelperText} style={{ color: 'red' }} />
                                                    </FormControl>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='cstm-pr-2'>
                                                <Button className='primary-btn w-100 my-4' type="submit" disabled={isSubmitting}>Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='' sx={{ borderBottom: "1px solid #C6C6C6" }}>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Card>
                <img className='contactusimg' src={contactusimg} />
            </Box>
            <Footer />
        </Box>
    );
}

export default Contactus;