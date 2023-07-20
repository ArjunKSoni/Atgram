import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Feeds from '../components/feeds'
import Rightbar from '../components/Rightbar'
import { Stack,Box, createTheme, ThemeProvider } from '@mui/material'
import Navbar from '../components/Navbar'
import Add from '../components/Add'

export default function Home() {

    const [mode,setMode]=useState("light");

    const darkTheme=createTheme({
        palette:{
            mode:mode,
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Navbar mode={mode}/>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feeds/>
                    <Rightbar/>
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
    )
}
