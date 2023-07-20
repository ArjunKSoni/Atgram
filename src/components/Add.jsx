import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const UserBox = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    gap:"5px",
    marginBottom:"10px",
}))

const Add = () => {
    const [open,setOpen]=useState(false);
    return (
        <Box>
            <Tooltip onClick={e=>setOpen(true)} title="Add item" sx={{ position: 'fixed', bottom: 20, left: { sm: 30, xs: 'calc(50% - 25px)' } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={e=>setOpen(false)}
                aria-labelledby="Add post"
                aria-describedby="try adding more posts"
                sx={{display:'flex', alignItems:'center', justifyContent:'center'}}
            >
                <Box width={400} sx={{borderRadius:2}} height={280} bgcolor={'background.default'} color={'text.primary'} p={'15px'}>
                    <Typography color={'gray'} textAlign={'center'} variant='h6'>
                        Create Post
                    </Typography>
                    <UserBox onClick={e=>setOpen(true)}>
                        <Avatar sx={{width:40,height:40}} src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                        <Typography fontWeight={500} variant='span'>John</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        fullWidth={true}
                        label="what's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={2} m={2}>
                    <Tooltip title='Emoji'><EmojiEmotionsIcon/></Tooltip>
                    <Tooltip title='Image'><ImageIcon color='primary'/></Tooltip>
                    <Tooltip title='Video'><VideoCameraBackIcon color='secondary'/></Tooltip>
                    <Tooltip title='Audio'><LibraryMusicIcon color='success'/></Tooltip>
                    <Tooltip title='Add Post'><PostAddIcon color='error'/></Tooltip>
                    </Stack>
                    <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>  
            </Modal>
        </Box>
    )
}

export default Add
