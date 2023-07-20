import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
const Rightbar = () => {
    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
      const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];      
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box  width={320}>
                <Typography variant='h6' margin={2} marginBottom={1} fontWeight={400}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg" />
                    <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_1280.jpg" />
                    <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_1280.jpg" />
                    <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2016/04/06/01/32/red-fox-1310826_1280.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_1280.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2017/11/06/23/19/composing-2925179_1280.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg" />
                </AvatarGroup>
                <Typography variant='h6' margin={3} marginBottom={1} fontWeight={400}>
                    Latest Photos
                </Typography>
                <ImageList
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                    >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant='h6' margin={3} marginBottom={1} fontWeight={400}>
                    Latest Conversation
                </Typography>
                <Divider variant="inset" component="li" />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/05/20/12/45/girl-775349_1280.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://cdn.pixabay.com/photo/2019/06/02/17/27/summer-4246927_1280.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Rightbar
