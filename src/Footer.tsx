import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import info from '../public/info.json'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{bottom: 15, width: '100%', m: 4}}>
        Made with 💜
        <br></br>
      {'Copyright © '}
      <MuiLink color="inherit" href={info["url"]}>
        {info["FullName"]}
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
