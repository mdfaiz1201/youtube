import { Link } from "react-router-dom";
import { Typography, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import Linkify from "react-linkify";

const Description = ({handelClick, videoDetail}) => {
    const { snippet:{title, channelId, channelTitle, description}, statistics:{viewCount, likeCount} } = videoDetail;

  return (<Box sx={{background: "#333", borderRadius:"10px", p:2, mt:2}}>
        <div style={{p:2, color:"#eee", display:"flex", justifyContent:"space-between"}}>
            <Typography variant="body2">Description</Typography>
            <CloseIcon className="close-description" onClick ={handelClick} />
        </div>
        <hr/>
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
        <Typography sx={{ color:"#ccc", fontSize:{xs:'15px', md:'15px'}, p:"30px 8px" }} >
            <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                <a target="_blank" rel="noreferrer" href={decoratedHref} key={key} style={{ color: 'rgb(100, 179, 313)', wordWrap:"break-word" }}>
                    {decoratedText}
                </a>
            )}>{description}</Linkify>
        </Typography>
    </Box>)
}

export default Description