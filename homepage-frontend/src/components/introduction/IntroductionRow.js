import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

import ProfileCard from './features/ProfileCard';

function IntroductionRow() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ProfileCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default IntroductionRow;