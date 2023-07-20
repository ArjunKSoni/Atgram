import React, { useState } from 'react'
import { Typography, Menu, MenuItem, Avatar, Badge, InputBase, AppBar, Box, Toolbar, styled } from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const FlexToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
    padding: "0px 10px",
    borderRadius: "5px",
    width: "40%",
}))
const Icon = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    gap:"15px"
}))
const UserBox = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    gap:"5px"
}))

export default function Navbar({mode}) {
    const [open,setOpen]=useState(false);
    return (
        <AppBar position='sticky'>
            <FlexToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>At gram</Typography>
                <AlternateEmailIcon sx={{ display: { sm: 'none', xs: 'block' } }} />
                <Search sx={mode==='light'?{backgroundColor:"white"}:{backgroundColor:"gray"}}><InputBase color={'text.primary'} placeholder='Search...' fullWidth={true} /></Search>
                <Icon sx={{display:{xs:'none',sm:'flex'}}}>
                    <Badge badgeContent={4} color='error'>
                        <MailIcon  />
                    </Badge>
                    <Badge badgeContent={4} color='error'>
                        <NotificationsIcon  />
                    </Badge>
                    <Avatar onClick={e=>setOpen(true)} sx={{width:30,height:30}} src="data:image/jpeg;base64,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" />
                </Icon>
                <UserBox onClick={e=>setOpen(true)} sx={{display:{xs:'flex',sm:'none'}}}>
                    <Avatar sx={{width:30,height:30}} src="data:image/jpeg;base64,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" />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </FlexToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}