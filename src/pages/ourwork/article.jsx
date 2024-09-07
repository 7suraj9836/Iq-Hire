import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import Header from '../../components/header';
import Footer from '../../components/footer';
import editsvg from '../../assets/img/svg/edit.svg';
import copysvg from '../../assets/img/svg/copy.svg';
import downloadsvg from '../../assets/img/svg/download.svg';
import sharesvg from '../../assets/img/svg/share.svg';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import articleprofileimg from '../../assets/img/articleprofileimg.png'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import leftquotes from '../../assets/img/quotes.png';
import rightquotes from '../../assets/img/quotes.png';
import principles from '../../assets/img/principles.jfif';
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Article = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
  <>
    <Header></Header>
    <Box className='banner-section-article'>
      <Box className='py-2 mt-10'>
        <Grid container spacing={2} className='px-5'>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='h1' className='fs-58 fw-700 mb-3 mx-auto heading'>Lorem Ipsum is simply dummy text</Typography>
            <Box className='gap-10 flex-wrap mx-auto justify-content-center name-banner'>
              <img src={articleprofileimg} height={34} width={34} className='my-auto' style={{borderRadius:"100%"}} />
              <Typography variant='h4' className='fs-16 fw-600 my-auto'><span className='fw-500 text-color-c2'>Written by: </span><span className='text-decoration-underline'>Sophia Tondon</span></Typography>
              <Box className="flex-wrap justify-content-end">
                <Divider className='mx-2' orientation="vertical" flexItem sx={{border:"1px solid black"}}  />
              </Box>
              <Button className='share-btn' sx={{ minWidth: 'fit-content' }}>
                <ShareOutlinedIcon/>Share
              </Button>
              <Button className='primary-btn-outline no-bg' sx={{ minWidth: 'fit-content' }}>
                <TwitterIcon/>
              </Button>
              <Button className='primary-btn-outline no-bg' sx={{ minWidth: 'fit-content' }}>
                <FacebookIcon/>
              </Button>
              <Button className='primary-btn-outline no-bg' sx={{ minWidth: 'fit-content' }}>
                <LinkedInIcon/>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',my:10}}>
      <Tabs
        className='article-side-menu'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',textAlign:"end" }}
      >
        <Typography variant='h3' className='fs-19 fw-300 text-uppercase mb-20' sx={{paddingRight:"16px"}}>Table of Contents</Typography>

        <Tab className='' label="Evolution of Fintech & Its Disruptive Potential" {...a11yProps(1)} />
        <Tab className='' label="Custom Applications By Valuecoders:
          Redefining the Fintech Landscape" {...a11yProps(2)} />
        <Tab className='' label="Ongoing Innovation in the Fintech
          Industry" {...a11yProps(3)} />
                  <Tab className='' label="Successful Case Studies Developed by
          ValueCoders" {...a11yProps(4)} />
        <Tab className='' label="ValueCoders: A Game Changer in Fintech" {...a11yProps(5)} />
        <Tab className=' ' label="Impact of ValueCoders’ Custom Applications" {...a11yProps(6)} />
      </Tabs>

      <TabPanel className='tab-content' value={value} index={1}>
        <Box>
          <Typography className='fs-22 fw-500 text-gray-c1 mb-30' variant='h3'>Fintech industry is transforming the way with approach and engage with the money. As per Deloitte, the Fintech market will rise to <span className='fw-600 text-black-c1'>$174 in 2023.</span></Typography>
          <Typography className='fs-22 fw-600 text-gray-c1 mb-30' variant='h3'>To make the most of this technology, businesses  <span className='fw-600 text-orange'>need to know</span> and follow the rules of the game. What is we tell you that at IQ Hire </Typography>
          <Typography className='fs-18 fw-500 text-gray-c1 mb-30' variant='h3'>Yes, you heard it right!</Typography>
          <Typography className='fs-22 fw-500 text-gray-c1 mb-30' variant='h3'>Through our <span className='fw-600 text-black-c1'>innovative custom applications</span> ValueCoders has disrupted the status quo and redefined the essence of financial technology.</Typography>
        </Box>
        <Box className='p-30 lightorange-section my-60' sx={{borderRadius:'16px'}}>
          <Typography variant='h2' className='fs-18 fw-500 text-color-c1 position-relative'><img src={leftquotes} className='leftquotes' />So, let us take you through our journey of creating bespoke solutions that tranformed the Fintech arena, setting new benchmarks and paving the way.<img src={rightquotes} className='rightquotes' /></Typography>
        </Box>
        <Box className='mt-30'>
          <Typography variant='h1' className='text-color-c1 fw-400 fs-40'>Evolution of Fintech & Its Disruptive Potential</Typography>
          <Typography className='fs-22 fw-400 text-gray-c1 my-30' variant='h3'>Fintech has brough a seismic shift in the <span className='fw-600 text-orange'> financial industry.</span> It has not only replaced the <span className='fw-600 text-black-c1'> conventional methods</span> of finance but also ushered in new, inventive solutions to rectify the sector’s issues.</Typography>
        </Box>
        <Box>
          <img style={{width:"100%",maxHeight:"550px",objectFit:"cover"}} src={principles} />
        </Box>
      </TabPanel>
      <TabPanel className='tab-content' value={value} index={2}>
        <Box>
          <Typography>Custom Applications By Valuecoders:Redefining the Fintech Landscape</Typography>
        </Box>
      </TabPanel>
      <TabPanel className='tab-content' value={value} index={3}>
        <Box>
          <Typography>Ongoing Innovation in the Fintech Industry</Typography>
        </Box>
      </TabPanel>
      <TabPanel className='tab-content' value={value} index={4}>
        <Box>
          <Typography>Successful Case Studies Developed by ValueCoders</Typography>
        </Box>
      </TabPanel>
      <TabPanel className='tab-content' value={value} index={5}>
        <Box>
          <Typography>ValueCoders: A Game Changer in Fintech</Typography>
        </Box>
      </TabPanel>
      <TabPanel className='tab-content' value={value} index={6}>
        <Box>
          <Typography>Impact of ValueCoders’ Custom Applications</Typography>
        </Box>
      </TabPanel>
    </Box>
    <Footer></Footer>
</>
  );
};

export default Article;
