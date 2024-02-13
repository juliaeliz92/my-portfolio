import * as React from 'react';
import { Box } from '@mui/material';
import { ScrollArea, ContentArea } from "./sections";

function App() {
  return (
    <Box sx={{display: 'flex'}}>
      <ScrollArea />
      <ContentArea />
    </Box>
  );
}

export default App;
