import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import './loader.scss'

const Loader = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
        <Box className='loader mx-auto'>
            <Box className='content'>
                <Typography variant='h4' className='fs-38 fw-600'>Getting</Typography>
                <Typography variant='h4' className='fs-58 fw-600'>Generated</Typography>
            </Box>
            <Box sx={{ display: 'block', alignItems: 'center',width: '90%',maxWidth:'857px' }} className='mx-auto mt-50'>
                    <Box sx={{ width: '100%',maxWidth:'857px' }}>
                        <Typography variant="body2" className='text-center text-orange fs-27 fw-600' >{`${Math.round(
                            progress,
                        )}%`}</Typography>
                    </Box>
                    <Box sx={{ width: '100%',maxWidth:'857px',marginTop:'20px' }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
            </Box>
                <Typography variant='h4' className='fs-37 fw-600 text-center mt-50'> 5x Higher Conversion with Neuromarketing</Typography>
        </Box>
  )
}

export default Loader;
