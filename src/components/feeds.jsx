import React from 'react'
import { Box } from '@mui/material'
import Post from './post'

const Feeds = () => {
  return (
    <Box flex={4} p={2}>
      <Post url={"https://cdn.pixabay.com/photo/2023/06/29/09/05/dolomites-8095996_1280.jpg"} title={"the mountain"} subhead={"so beautiful"} desc={"pleased to visit there, sharing my experience"}/>
      <Post url={"https://cdn.pixabay.com/photo/2023/07/13/05/36/mountains-8123933_1280.jpg"} title={"the mountain"} subhead={"so beautiful"} desc={"pleased to visit there, sharing my experience"}/>
      <Post url={"https://cdn.pixabay.com/photo/2023/06/07/16/18/vietnam-8047523_1280.jpg"} title={"the mountain"} subhead={"so beautiful"} desc={"pleased to visit there, sharing my experience"}/>
      <Post url={"https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg"} title={"the mountain"} subhead={"so beautiful"} desc={"pleased to visit there, sharing my experience"}/>
      <Post url={"https://cdn.pixabay.com/photo/2023/05/23/15/13/new-8012937_1280.jpg"} title={"the mountain"} subhead={"so beautiful"} desc={"pleased to visit there, sharing my experience"}/>
    </Box>
  )
}

export default Feeds
