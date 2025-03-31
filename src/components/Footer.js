import { Button, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#F4F5F7', margin: '10px', display: 'flex', justifyContent: 'space-around' }}>
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#2E5BFF' }}>Preview</Button>
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#2E5BFF' }}>Download PDF</Button>
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#2E5BFF' }}>Share</Button>
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#2E5BFF' }}>Save Draft</Button>
    </Box>
  );
}

export default Footer;