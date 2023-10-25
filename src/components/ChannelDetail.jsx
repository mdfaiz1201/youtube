import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [channelVideos, setchannelVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then( (data) => setchannelDetail(data?.items[0]));
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then( (data) => setchannelVideos(data?.items));
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Box>
        {/* for gradient using cssfradient.io website */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-90px" pointerEvents='none'/>
      </Box>
      <Box display="flex" p={2}>
        <Box>
          <Videos videos={channelVideos}/>
        </Box>

      </Box>

    </Box>
  )
}

export default ChannelDetail;