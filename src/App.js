import * as React from 'react';
import { Grid } from '@mui/material';
import { ScrollArea, ContentArea } from "./sections";

function App() {
  return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <ScrollArea />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentArea />
        </Grid> 
      </Grid>
  );
}

export default App;
