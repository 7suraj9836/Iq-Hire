import React from 'react'
import Header from '../../components/header'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import worst from "../../assets/img/svg/worst.svg";
import bad from "../../assets/img/svg/bad.svg";
import okay from "../../assets/img/svg/okay.svg";
import good from "../../assets/img/svg/good.svg";
import excellent from "../../assets/img/svg/excellent.svg";
import './feedback.scss';
const Feedback = () => {
  return (
    <>
    <Header></Header>
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mb-40 mt-40">
          <Typography variant="h2" className="fs-38 fw-600 text-center text-orange">
          Share your feedback with us  
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='px-5'>
            <Box sx={{background:"#FDFCFC",borderRadius:"20px",paddingTop:"80px",paddingBottom:"80px"}} className='text-center flex-wrap justify-content-center gap-20'>
                <Card className='emoji-card'>
                    <Button>
                        <img src={worst} />
                    </Button>
                    <Typography variant='h4' className='fs-18 fw-600'>It was worst</Typography>
                </Card>
                <Card className='emoji-card'>
                    <Button>
                        <img src={bad} />
                    </Button>
                    <Typography variant='h4' className='fs-18 fw-600'>It was Bad</Typography>
                </Card>
                <Card className='emoji-card'>
                    <Button>
                        <img src={okay} />
                    </Button>
                    <Typography variant='h4' className='fs-18 fw-600'>It was Okay</Typography>
                </Card>
                <Card className='emoji-card'>
                    <Button>
                        <img src={good} />
                    </Button>
                    <Typography variant='h4' className='fs-18 fw-600'>It was Good</Typography>
                </Card>
                <Card className='emoji-card'>
                    <Button>
                        <img src={excellent} />
                    </Button>
                    <Typography variant='h4' className='fs-18 fw-600'>It was Excellent</Typography>
                </Card>
                <Box className='text-center mt-40 w-100'>
                    <Button className='primary-btn fs-14'>Send feedback</Button>
                </Box>
            </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Feedback
