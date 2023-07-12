import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Footer from '../src/Footer';
import Head from 'next/head'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import HistoryIcon from '@mui/icons-material/History';
import TypeWriter from '../src/TypeWriter';
import { Button, Fab, Grid, Tooltip } from '@mui/material';
import MuiLink from '@mui/material/Link';

export default function Home() {
  return (
    <div>
        <Head>
            <title>Aruna's Portfolio</title>
        </Head>
        <Container maxWidth="lg">
            <Box
                sx={{
                my: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom sx={{ m: 1 }}>
                    👋 Welcome! My name is
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', m: 1 }}>
                    Aruna Parameswaran
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom sx={{ m: 1 }}>
                    ... and I'm into
                </Typography>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Monospace', m: 2 }} >
                    <TypeWriter data={['Software Engineering', 'Designing scalable systems', 'Embedded Development', 'Frontend Engineering']}/>
                </Typography>
                
                <Grid sx={{
                    my: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button color="secondary" variant="outlined" href="/files/Resume.pdf" target="_blank" startIcon={<DownloadIcon />}>
                        Download my resume
                    </Button>
                </Grid>
                

                <Grid container spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid item>
                        <Link href="https://github.com/arunapa" target="_blank" >
                            <GitHubIcon fontSize="large"  />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.linkedin.com/in/arunapa/" target="_blank" >
                            <LinkedInIcon fontSize="large" />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="mailto:aruna.parame@gmail.com" target="_blank" >
                            <MailIcon fontSize="large" />
                        </Link>
                    </Grid>
                </Grid>

                <Fab color="secondary" sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}>
                    <Tooltip title="Visit legacy site" arrow>
                        <MuiLink color="inherit" href="/legacy/index.html" >
                            <HistoryIcon />
                        </MuiLink>
                    </Tooltip>
                </Fab>
                <Footer />
            </Box>
        </Container>
    </div>
  );
}
