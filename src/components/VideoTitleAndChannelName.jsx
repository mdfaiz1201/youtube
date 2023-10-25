import { Link } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import Description from "./Description";


const VideoTitleAndChannelName = ({videoDetail}) => {
    const [showDescription , setShowDescription ] = useState(false)
    const [showTitle , setShowTitle ] = useState(true)
    const { snippet:{title, channelId, channelTitle}, statistics:{viewCount, likeCount} } = videoDetail;
    const handelClick = () => {
            setShowTitle(!showTitle);
            setShowDescription(!showDescription);
    }

    const detailDescription =   <Description handelClick ={handelClick} videoDetail = {videoDetail} />
                               
    return (
        <>
            {showTitle && <>
            <Typography sx={{ color:"#fff", fontSize:{xs:'20px', md:'24px'}, fontWeight:'bold', p:1 }} >
                {title}<span className="Show-description" onClick={handelClick}>...show more</span>
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
            </>}
            {showDescription && detailDescription}
        </>
    )
}

export default VideoTitleAndChannelName;