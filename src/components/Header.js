import { AppBar, Toolbar, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E5BFF' }}>
      <Toolbar>
        <Button color="inherit" href="/upload">Upload Resume</Button>
        <Button color="inherit" href="/templates">Templates</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;