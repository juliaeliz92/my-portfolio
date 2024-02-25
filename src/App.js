import * as React from 'react';
import { Grid } from '@mui/material';
import { ScrollArea, ContentArea } from './sections';
import { SpotLightCursor } from './components';

function App() {

  return (
    <>
      <SpotLightCursor />
      <Grid container>
        <Grid item xs={12} md={6} sx={{overflow: 'hidden'}}>
          <ScrollArea />
        </Grid>
        <Grid item xs={12} md={6} sx={{overflowY: {md: 'auto'}, height: {md: '100vh'}}}>
          <ContentArea />
        </Grid> 
      </Grid>
    </>
  );
}

export default App;
