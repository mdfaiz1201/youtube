import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";

const VideoCard = ({date, video}) => {
  const {id:{videoId}, snippet} = video;

 // Created a temporary DOM element to decode HTML entities
  const tempElement = document.createElement('div');
  tempElement.innerHTML = snippet?.title;

  return (
    <Card sx={{ 
            width: {xs:'100%', md: '250px'}, boxShadow:'none', borderRadius:0
        }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={tempElement.innerText}
                sx={{width:{xs:'100%', md: '105%'}, height:{xs:'180px', sm:'142px', md: '147px'} }}
             />
        </Link>
        <CardContent sx={{ backgroundColor:'#1e1e1e', height:'75px'}} >
        <Typography
            variant='subtitle2'
            sx={{
                fontSize:"12px",
                color:"gray",
                mb:"8px"
            }}>{date}</Typography>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='body2' fontWeight='bold' color='#fff'>
                {tempElement.innerText.slice(0,45) || demoVideoTitle.slice(0,45)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize:12, color:'gray', ml:'5px' }}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard