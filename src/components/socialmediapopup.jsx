import { Box, Button, Dialog, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ColorizeIcon from '@mui/icons-material/Colorize';
import plogo from "../assets/img/plogo.png"
import CancelIcon from '@mui/icons-material/Cancel';
import { MuiColorInput } from 'mui-color-input';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import sliderimg1 from '../assets/img/start.jfif';
import sliderimg2 from '../assets/img/sliderimg2.jfif';
import sliderimg3 from '../assets/img/sliderimg3.jfif';
import sliderimg4 from '../assets/img/sliderimg4.jfif';
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
const Socialmediapopup = ({open,onClose,uploadedImage,selectedImages,logo}) => {
        const [loading, setLoading] = useState(true);
        const [value, setValue] = React.useState('#4543a8');
        const gliderRef = useRef(null);
        const {socialMediaText,chatbotLoading}=useSelector((state)=>state?.jobDescriptionFileUploadReducer)
    
        useEffect(() => {
          if (open) {
              setTimeout(()=>{
                  new Glider(gliderRef.current, {
                      slidesToShow: 1,
                      scrollLock: true,
                      draggable: true,
                      dots: '#dots',
                      arrows: {
                        prev: '.glider-prev',
                        next: '.glider-next'
                      }
                    });
              },100)
             
              setLoading(false);
          }
        }, [open]);
        console.log("uploadedImage",uploadedImage,selectedImages,logo);
        let templateImages=[];  
        if(uploadedImage!=null){
            templateImages=[...selectedImages,...uploadedImage];
            //  templateImages=[...selectedImages,uploadedImage];
            }
         else{
            templateImages=[...selectedImages]
         }   
          

          const handleColorChange = (newValue) => {
            setValue(newValue)
          }
       
  return (
    // loading?<></>:
    <>
    <Dialog onClose={onClose} open={open} className='startpopup'>
        <CancelIcon className="close" onClick={onClose}/>
        <Box>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{background:"#FFE9D9"}}>
                    <Box>
                        <Box className='px-30'>
                            <Box className='mx-auto mt-30 mb-30' sx={{maxWidth:"440px"}}>
                                <Box class="glider-contain">
                                    <Box class="glider bg-white" ref={gliderRef}>
                                        <Box>
                                            <Box className='p-30'>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>Do you want to play a key role in the digital transformation of a leading elderly care organization? Are you someone who feels comfortable taking responsibility, can work well independently and likes to explore new areas? Do you want to grow and develop the organization, while ensuring streamlined and manageable processes? Then we are looking for you!</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>To further strengthen the ICT team within ZINN, the organization for high-quality (home) care, housing and well-being of the elderly in Groningen, we are looking for an Information Management Advisor! We are looking for a colleague who advises and supports in the field of information provision and technology, and who occupies a key position between various departments. Through sharp analyses, you know how to translate needs into solutions while safeguarding information security and privacy</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2'>Spreekt dit je aan en wil je meer informatie over deze interessante en uitdagende functie neem dan contact met mij op via 06-15208859. Of maak gebruik van deze link voor meer informatie</Typography>
                                            </Box>
                                            <Box className='glider-img-box '>
                                                    <Box className='layer d-flex' sx={{background:value?value:"rgb(12, 0, 129 , .6)"}}>
                                                        <Box className='m-auto px-30'>
                                                            <Typography variant='h4' className='fs-25 fw-700 text-white mb-20'>Vacature</Typography>
                                                            <Typography variant='h4' className='fs-15 fw-500 text-white mb-20'>Madewerker finace</Typography>
                                                            <ul className='text-white' style={{padding:"0 0 0 15px"}}>
                                                                <li className='fs-12 fw-600'>Financial administrative </li>
                                                                <li className='fs-12 fw-600'>20 uur per week </li>
                                                                <li className='fs-12 fw-600'>Excel/Yardi </li>
                                                            </ul>
                                                            <Typography variant='h4' className='fs-16 fw-500 text-orange'> <PlaceIcon className='text-white'/> Haaren</Typography>
                                                        </Box>
                                                    </Box>
                                                <img src={logo} className='logo'/>
                                                <img className='main-img' src={templateImages[0]} />
                                            </Box>
                                            <Box className='d-flex gap-10 px-30 py-10'>
                                                <img src={plogo} />
                                                <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                                <Typography variant='h4' className='fs-13 fw-500 text-orange my-auto'>The Netherlands</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box className='p-30'>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>Do you want to play a key role in the digital transformation of a leading elderly care organization? Are you someone who feels comfortable taking responsibility, can work well independently and likes to explore new areas? Do you want to grow and develop the organization, while ensuring streamlined and manageable processes? Then we are looking for you!</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>To further strengthen the ICT team within ZINN, the organization for high-quality (home) care, housing and well-being of the elderly in Groningen, we are looking for an Information Management Advisor! We are looking for a colleague who advises and supports in the field of information provision and technology, and who occupies a key position between various departments. Through sharp analyses, you know how to translate needs into solutions while safeguarding information security and privacy</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2'>Spreekt dit je aan en wil je meer informatie over deze interessante en uitdagende functie neem dan contact met mij op via 06-15208859. Of maak gebruik van deze link voor meer informatie</Typography>
                                            </Box>
                                            <Box className='glider-img-box '>
                                                    <Box className='layer d-flex' sx={{background:value?value:"rgb(12, 0, 129 , .6)"}}>
                                                        <Box className='m-auto px-30'>
                                                            <Typography variant='h4' className='fs-25 fw-700 text-white mb-20'>Vacature</Typography>
                                                            <Typography variant='h4' className='fs-15 fw-500 text-white mb-20'>Madewerker finace</Typography>
                                                            <ul className='text-white' style={{padding:"0 0 0 15px"}}>
                                                                <li className='fs-12 fw-600'>Financial administrative </li>
                                                                <li className='fs-12 fw-600'>20 uur per week </li>
                                                                <li className='fs-12 fw-600'>Excel/Yardi </li>
                                                            </ul>
                                                            <Typography variant='h4' className='fs-16 fw-500 text-orange'> <PlaceIcon className='text-white'/> Haaren</Typography>
                                                        </Box>
                                                    </Box>
                                                <img src={logo} className='logo'/>
                                                <img className='main-img' src={templateImages[1]} />
                                            </Box>
                                            <Box className='d-flex gap-10 px-30 py-10'>
                                                <img src={logo} />
                                                <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                                <Typography variant='h4' className='fs-13 fw-500 text-orange my-auto'>The Netherlands</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box className='p-30'>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>Do you want to play a key role in the digital transformation of a leading elderly care organization? Are you someone who feels comfortable taking responsibility, can work well independently and likes to explore new areas? Do you want to grow and develop the organization, while ensuring streamlined and manageable processes? Then we are looking for you!</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>To further strengthen the ICT team within ZINN, the organization for high-quality (home) care, housing and well-being of the elderly in Groningen, we are looking for an Information Management Advisor! We are looking for a colleague who advises and supports in the field of information provision and technology, and who occupies a key position between various departments. Through sharp analyses, you know how to translate needs into solutions while safeguarding information security and privacy</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2'>Spreekt dit je aan en wil je meer informatie over deze interessante en uitdagende functie neem dan contact met mij op via 06-15208859. Of maak gebruik van deze link voor meer informatie</Typography>
                                            </Box>
                                            <Box className='glider-img-box '>
                                                    <Box className='layer d-flex' sx={{background:value?value:"rgb(12, 0, 129 , .6)"}}>
                                                        <Box className='m-auto px-30'>
                                                            <Typography variant='h4' className='fs-25 fw-700 text-white mb-20'>Vacature</Typography>
                                                            <Typography variant='h4' className='fs-15 fw-500 text-white mb-20'>Madewerker finace</Typography>
                                                            <ul className='text-white' style={{padding:"0 0 0 15px"}}>
                                                                <li className='fs-12 fw-600'>Financial administrative </li>
                                                                <li className='fs-12 fw-600'>20 uur per week </li>
                                                                <li className='fs-12 fw-600'>Excel/Yardi </li>
                                                            </ul>
                                                            <Typography variant='h4' className='fs-16 fw-500 text-orange'> <PlaceIcon className='text-white'/> Haaren</Typography>
                                                        </Box>
                                                    </Box>
                                                <img src={logo} className='logo'/>
                                                <img className='main-img' src={templateImages[2]} />
                                            </Box>
                                            <Box className='d-flex gap-10 px-30 py-10'>
                                                <img src={logo} />
                                                <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                                <Typography variant='h4' className='fs-13 fw-500 text-orange my-auto'>The Netherlands</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box className='p-30'>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>Do you want to play a key role in the digital transformation of a leading elderly care organization? Are you someone who feels comfortable taking responsibility, can work well independently and likes to explore new areas? Do you want to grow and develop the organization, while ensuring streamlined and manageable processes? Then we are looking for you!</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2 mb-20'>To further strengthen the ICT team within ZINN, the organization for high-quality (home) care, housing and well-being of the elderly in Groningen, we are looking for an Information Management Advisor! We are looking for a colleague who advises and supports in the field of information provision and technology, and who occupies a key position between various departments. Through sharp analyses, you know how to translate needs into solutions while safeguarding information security and privacy</Typography>
                                                <Typography variant='h4' className='fs-8 fw-500 text-color-c2'>Spreekt dit je aan en wil je meer informatie over deze interessante en uitdagende functie neem dan contact met mij op via 06-15208859. Of maak gebruik van deze link voor meer informatie</Typography>
                                            </Box>
                                            <Box className='glider-img-box '>
                                                    <Box className='layer d-flex' sx={{background:value?value:"rgb(12, 0, 129 , .6)"}}>
                                                        <Box className='m-auto px-30'>
                                                            <Typography variant='h4' className='fs-25 fw-700 text-white mb-20'>Vacature</Typography>
                                                            <Typography variant='h4' className='fs-15 fw-500 text-white mb-20'>Madewerker finace</Typography>
                                                            <ul className='text-white' style={{padding:"0 0 0 15px"}}>
                                                                <li className='fs-12 fw-600'>Financial administrative </li>
                                                                <li className='fs-12 fw-600'>20 uur per week </li>
                                                                <li className='fs-12 fw-600'>Excel/Yardi </li>
                                                            </ul>
                                                            <Typography variant='h4' className='fs-16 fw-500 text-orange'> <PlaceIcon className='text-white'/> Haaren</Typography>
                                                        </Box>
                                                    </Box>
                                                <img src={logo} className='logo'/>
                                                <img className='main-img' src={templateImages[3]} />
                                            </Box>
                                            <Box className='d-flex gap-10 px-30 py-10'>
                                                <img src={plogo} />
                                                <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                                <Typography variant='h4' className='fs-13 fw-500 text-orange my-auto'>The Netherlands</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='glider-btn-box'>
                                        <button aria-label="Previous" class="glider-prev"><KeyboardArrowLeftIcon/></button>
                                        <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                        <button aria-label="Next" class="glider-next"><KeyboardArrowRightIcon/></button>
                                    </Box>
                                    <Box className='glider-btn-box number'>
                                        <button aria-label="Previous" class="glider-prev">1</button>
                                        <Divider className='mb-20'sx={{border:"2px solid #DEDEDE !important", borderColor:"#DEDEDE !important"}}></Divider>
                                        <button aria-label="Next" class="glider-next">2</button>
                                    </Box>
                                    <Box role="tablist" id="dots" class="dots"></Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='d-flex'>
                    <Box className='m-auto p-30 '>
                        <Typography variant='h4' className='fs-18 fw-600 text-color-c1 mb-20'>Color Selection </Typography>
                        <Box className='fs-18 fw-600 d-flex gap-20 mb-20'>
                            <MuiColorInput format="hex" value={value} onChange={handleColorChange} />
                            <Button className='fs-16 text-black my-auto' sx={{minWidth:"fit-content !important",border:"1px solid #BFBABA",height:"28px",width:"28px"}}>
                                <ColorizeIcon sx={{fontSize:"17px"}} />
                            </Button>
                        </Box>
                        <Divider className='mb-20'sx={{border:"1.5px solid #DEDEDE !important"}}></Divider>
                        <Box className="gap-15 flex-column">
                            <Button className='secondary-btn'>Regenerate Template</Button>
                            <Button className='secondary-btn'>Share</Button>
                            <Button className='secondary-btn'>Download Social Media</Button>
                            <Button className='signUp-btn'>Regenerate Both Template</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Dialog>
    </>


  )
}

export default Socialmediapopup
