'use client';

import { AppBar, Toolbar, Typography, InputBase, Avatar, Box, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[50], 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[50], 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[50],
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1.2, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e2f', boxShadow: 'none', height: '60px' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#f3f4f6', fontWeight: 'bold' }}
          >
            Detrator
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 2, display: 'flex' }}>
          <Search sx={{ maxWidth: '650px', width: '100%', display: { xs: 'none', sm: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#9ca3af' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <IconButton sx={{ p: 0, marginRight: '10px' }}>
            <Avatar
              alt="User Profile"
              src="/user_profile.jpg"
              sx={{
                border: '2px solid #f3f4f6',
                boxShadow: '0 0 5px rgba(0,0,0,0.2)',
              }}
            />
          </IconButton>

          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: '#f3f4f6',
              fontWeight: '500',
            }}
          >
            Sarthak
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;