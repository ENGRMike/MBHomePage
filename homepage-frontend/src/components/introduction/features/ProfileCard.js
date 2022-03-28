import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

function ProfileCard() {
    return (
        <Card variant='profile'>
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    Michael Bruins
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProfileCard;