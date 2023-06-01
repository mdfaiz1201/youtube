import { Stack, Box } from "@mui/material";

import {VideoCard, ChannelCard,  PlaylistCard} from "./";

const Videos = ({videos, direction}) => {
  if (!videos) return "Loading...";
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' sx={{
      display:'flex', alignItems:"center", justifyContent:{
        xs:'center', md:"flex-start"
      }
    }} gap={1.8} >
      {videos.map((item,idx) => (
        <Box sx={{width:{xs:'100%', sm:"250px"} }} key ={idx}>
          {/* {console.log(item.id)} */}
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlaylistCard playlist={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos