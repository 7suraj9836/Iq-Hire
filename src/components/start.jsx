import { Box, Button, Dialog, DialogTitle, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './popup.scss'
import start from "../assets/img/start.jfif"
import CancelIcon from '@mui/icons-material/Cancel';
const Start = ({ visible, setVisible}) => {
    const handleClose = () => {
        setVisible(false);
      };
    useEffect(() => {
        console.log(visible);
    })
  return (
    <Dialog onClose={handleClose} open={visible} className='startpopup'>
        <CancelIcon className="close" onClick={handleClose}/>
        {/* <DialogTitle>Set backup account</DialogTitle> */}
        <Box className="d-flex">
            <Box className="content">
                <Typography variant='h2' className='text-black fs-40 fw-400 mb-25'>Let’s Start <span className='text-orange fw-500'>Lorem ipsum dolor</span>  </Typography>
                <Typography variant='h4' className='text-black fs-24 fw-500 mb-35'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Typography>
                <Button onClick={handleClose} className='primary-btn' sx={{width:"144px"}}>Start</Button>
            </Box>
            <Box className="img">
                <img src={start} />
            </Box>
        </Box>
  </Dialog>
  )
}

export default Start
