import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture, demoChannelTitle } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop, pointerEvents}) => { 
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
          <Typography variant='h6' sx={{textAlign:"center"}}>
            <span style={{color:'red'}}>Subscribers </span>
            <span>{channelDetail?.statistics?.subscriberCount}</span>
         </Typography>

        </CardContent>
      </Link>

    </Box>
    )
}

export default ChannelCard