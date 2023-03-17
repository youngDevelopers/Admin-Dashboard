import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

function Dashboard() {
    return (
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
            </Box>
        </Box>
    )
}

export default Dashboard
