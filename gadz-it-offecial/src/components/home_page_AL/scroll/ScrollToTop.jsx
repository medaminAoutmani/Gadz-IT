
import React from 'react';
import { Fab, Zoom } from '@mui/material';
import { ExpandLess } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';


export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <div>
      <Zoom in={trigger}>
        <Fab
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}

          size="small"
          sx={{ position: "fixed", bottom: "33px", right: "80px" }}
          color="primary"
          aria-label="add"
          variant='extended'
        >
          <ExpandLess fontSize="medium" />
        </Fab>
      </Zoom>
    </div>
  );
}

