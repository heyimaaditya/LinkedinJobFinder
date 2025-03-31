import { Card, CardContent, LinearProgress, List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function ATSDashboard() {
  const atsData = useSelector((state) => state.atsData || { score: 0, missingKeywords: [] });

  return (
    <Card style={{ padding: '20px', backgroundColor: '#F4F5F7', margin: '10px' }}>
      <CardContent>
        <Typography variant="h6">ATS Score</Typography>
        <LinearProgress variant="determinate" value={atsData.score * 100} sx={{ marginBottom: '20px', backgroundColor: '#E0E0E0', '& .MuiLinearProgress-bar': { backgroundColor: '#36B37E' } }} />
        <Typography>Score: {Math.round(atsData.score * 100)}/100</Typography>
        <Typography variant="h6" sx={{ marginTop: '20px' }}>Missing Keywords</Typography>
        <List>
          {atsData.missingKeywords.map((keyword, index) => (
            <ListItem key={index} sx={{ color: '#FF3B3B' }}>{keyword}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ATSDashboard;