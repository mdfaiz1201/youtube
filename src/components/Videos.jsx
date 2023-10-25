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
      {videos.map((item,idx) => {
        const date = new Date(item.snippet.publishTime);
        const options = {day:"numeric", month:"long", year:"numeric"};
        const formattedDate = date.toLocaleDateString(undefined,options)
        return(
          <Box sx={{ width:{xs:'100%', sm:"250px"} }} key ={idx}>
            {item.id.videoId && <VideoCard date ={formattedDate} video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.playlistId && <PlaylistCard playlist={item}/>}
          </Box>
        )
    }
      )}
    </Stack>
  )
}

export default Videos