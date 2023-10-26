import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack } from "@mui/material";
import Hidden from '@mui/material/Hidden';

import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoTitleAndChannelName from "./VideoTitleAndChannelName";
import Description from "./Description";

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState(null);
  const [closeDescription, setcloseDescription] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setvideoDetail(data.items[0]));
    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`)
    .then((data) => setvideos(data.items));
  }, [id]);

  const handleCloseDescription = () => {
   setcloseDescription(!closeDescription)
  }
  if (!videoDetail) return "Loading..."
  return (
    <Box sx={{minHeight:'95vh'}}>
      <Stack direction={{xs:'column', sm:'row' }}>
        <Box bgcolor="#000" sx={{ flex:2, position:'sticky', top:'75px', zIndex: 9999999}}>
          <ReactPlayer id ="Media-player" url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Hidden smDown>
            <VideoTitleAndChannelName videoDetail={videoDetail}/>
            <Description closeDescription={handleCloseDescription} videoDetail = {videoDetail} />
          </Hidden>
        </Box>
        <Box px={2} py={{ md:1, xs:2 }} sx={{  overflowY: 'auto', height:`${closeDescription ? null : "121vh" }`}} justifyContent="center" alignItems='center'>
          <Hidden smUp>
            <Box sx={{ mb: 1 }}>
              <VideoTitleAndChannelName setcloseDescription={setcloseDescription} videoDetail={videoDetail}/>
            </Box>
            <Description closeDescription={handleCloseDescription} videoDetail = {videoDetail} />
          </Hidden>
          {closeDescription ? 
            <Hidden smDown>
               <Videos videos={videos} direction="column" />
            </Hidden> :  
            <Videos videos={videos} direction="column" />}
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail