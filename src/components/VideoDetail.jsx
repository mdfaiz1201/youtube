import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setvideos] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setvideoDetail(data.items[0]));
    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`)
    .then((data) => setvideos(data.items));
  }, [id]);

  if (!videoDetail) return "Loading..."

  const { snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount} } = videoDetail;
  return (
    <Box sx={{minHeight:'95vh'}}>
      <Stack direction={{xs:'column', sm:'row' }}>
        <Box bgcolor="#000" sx={{ flex:2, position:'sticky', top:'75px' }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography sx={{ color:"#fff", fontSize:{xs:'20px', md:'24px'}, fontWeight:'bold', p:1 }} >
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color:'#fff', zIndex:9999, px:1, py:0.2 }}>
            <Link to={`/channel/${channelId}`}>
              <Typography sx={{ fontSize:{xs:'17px', md:'20px'}, color:'#fff'}}>
                {channelTitle}
                <CheckCircle sx={{ fontSize:'12px', color: 'gray', ml:"5px" }}/>
              </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography sx={{ textAlign:"center", fontSize:{xs:'14px', md:'16px'}, opacity:0.7 }}>
                {parseInt(viewCount).toLocaleString(0)}<br/>views
              </Typography>
              <Typography sx={{ textAlign:"center", fontSize:{xs:'14px', md:'16px'}, opacity:0.7 }}>
                {parseInt(likeCount).toLocaleString(0)}<br/>likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{ md:1, xs:2 }} sx={{  overflowY: 'auto', height:'95vh'}} justifyContent="center" alignItems='center'>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail