import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/img/logo.svg';
import { FormControl, Select } from '@mui/material';
import company from '../assets/img/company.png';
import downarrow from '../assets/img/downarrow.png';
import global from '../assets/img/global.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../assets/styles/header.scss';


const pages = [
  { label: 'Home', path: '/' },
  { label: 'Who we Are', path: '/ourwork' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' }
];

const settings = [
  { label: 'My Profile', action: 'profile' },
  { label: 'Dashboard', action: 'dashboard' },
  { label: 'Logout', action: 'logout' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state?.authenticationReducer?.data?.user);
  const [age, setAge] = React.useState(1);
  const [isLoggedIn, setIsLoggedIn] = React.useState(userToken ? true : false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const handleUserMenuClick = (action) => {
    handleCloseUserMenu();
    switch (action) {
      case 'logout':
        localStorage.clear();
        toast.dismiss();
        toast.success('Logged out successfully');
    
        setIsLoggedIn(false);
        navigate('/');
        break;
      // Add cases for other settings actions if needed
      case 'profile':
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className='no-hover-bg'>
          <Link to={"/"}><img width={172} height={66} src={logo} alt="Logo" /></Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },marginLeft:{lg:"70px"},gap:"37px" }}>
            {pages.map((page) => (
              <Button
              className='fw-500 fs-18 p-0 text-capitalize'
                key={page.label}
                onClick={() => handleNavigate(page.path)}
                sx={{ }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box className='d-flex mr-10'>
            {isLoggedIn ?
              <>
                <img className='my-auto' width={27} height={27} src={global} alt="Global" />
                <Box sx={{ flexGrow: 0, width: '100px' }}>
                  <FormControl fullWidth>
                    <Select
                      className='no-fieldset-border'
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value={1} defaultChecked><Typography className='fs-14 fw-600'>English</Typography></MenuItem>
                      <MenuItem value={2}><Typography className='fs-14 fw-600'>Hindi</Typography></MenuItem>
                      <MenuItem value={3}><Typography className='fs-14 fw-600'>Arabic</Typography></MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button className='primary-btn my-auto' sx={{ minWidth: 'fit-content', height: '34px', width: '34px' }}>
                  <NotificationsNoneIcon sx={{ fill: 'white !important', fontSize: '18px' }} />
                </Button>
              </>
              :
              <Button className='secondary-btn my-auto' sx={{ minWidth: 'fit-content' }} onClick={() => navigate('/signin')}>Login</Button>
            }
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ?
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <img src={company} alt="Company" />
                    <Typography className='fs-14 fw-600'>{userData?.fullName}</Typography>
                    <img src={downarrow} alt="Down Arrow" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={() => handleUserMenuClick(setting.action)}>
                      <Typography textAlign="center">{setting.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
              :
              <Button className='signUp-btn my-auto' sx={{ minWidth: 'fit-content' }} onClick={() => navigate('/signup')}>Sign Up</Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;