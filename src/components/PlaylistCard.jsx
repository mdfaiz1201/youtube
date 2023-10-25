import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";

const PlaylistCard = ({playlist}) => {

  const {id:{playlistId}, snippet} = playlist;
  return (
    <Card className="Playlist-card" sx={{ width: {xs:'100%', md: '250px'}, boxShadow:'none', borderRadius:0 }}>
        <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} //Always use ? before . to avoid the errors.
                alt={snippet?.title}
                sx={{width: {xs:'100%', md: '105%'}, height:{xs:'180px', sm:'142px', md: '147px'} }}
             />
        </Link>
        <CardContent className="CardContent" sx={{ backgroundColor:'#1e1e1e', height:'75px'}} >
        <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
            <Typography variant='subtitle' fontWeight='bold' color='#fff'>
                {snippet?.title.slice(0,45) || demoVideoTitle.slice(0,45)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/playlist/${snippet?.channelId}` : demoChannelUrl}>
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