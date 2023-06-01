import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture, demoChannelTitle } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop, pointerEvents}) => { 
  // <div>channel</div>
    // console.log(channelDetail)
    return (
    <Box
      sx={{pointerEvents,
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        width: {xs:'100%', md: '250px'},
        margin:"auto",
        marginTop
        // write marginTop:marginTop or only marginTop both work same.
      }}
    >
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:"#fff" }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:"50%", width: {xs:'160px', md: '150px'}, height:{xs:'160px', md: '150px'} }}
          />
          <Typography variant='h6' sx={{textAlign:"center"}}>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px' }} />
          </Typography>

        </CardContent>
      </Link>

    </Box>
    )
}

export default ChannelCard