import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar
        sx={{
          maxWidth: '1024px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Link href="/">
            <a>
              <Image
                src="/images/logos/tmforum_logo.png"
                alt="tmforum logo"
                width={150}
                height={36}
              />
            </a>
          </Link>
        </IconButton>
        <Box>
          <Button sx={{ color: 'white' }}>
            <Typography variant="h6">
              <Link href="/">Home</Link>
            </Typography>
          </Button>
          <Button sx={{ color: 'white' }}>
            <Typography variant="h6">
              <Link href="map">Map</Link>
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
