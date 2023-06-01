import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";

const PlaylistCard = ({playlist}) => {
    // const { id, snippet } = playlist;
    // const { playlistId } = id;
    // IN short destructuring object below:
    // console.log(playlist);
    const {id:{playlistId}, snippet} = playlist;
    // console.log(playlistId, snippet);
  return (
    <Card sx={{ width: {xs:'100%', md: '250px'}, boxShadow:'none', borderRadius:0 }}>
        <Link to={playlistId ? `/video/${playlistId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} //Always use ? before . to avoid the errors.
                alt={snippet?.title}
                sx={{width: {xs:'100%', md: '105%'}, height:{xs:'185px', md: '150px'}}}
             />
        </Link>
        <CardContent sx={{ backgroundColor:'#1e1e1e', height:'75px'}} >
        <Link to={playlistId ? `/video/${playlistId}` : demoVideoUrl}>
            <Typography variant='subtitle' fontWeight='bold' color='#fff'>
                {snippet?.title.slice(0,45) || demoVideoTitle.slice(0,45)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                {snippet?.demoChannelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize:12, color:'gray', ml:'5px' }}/>
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default PlaylistCard