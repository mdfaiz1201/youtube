import { Typography, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Linkify from "react-linkify";
import { useState } from "react";

const Description = ({videoDetail, closeDescription}) => {
   const [showDescription, setshowDescription] = useState(false)
   const { snippet:{description}} = videoDetail;

   const handelClick = () => {
      setshowDescription(!showDescription)
      closeDescription()
   }
   
   const date = new Date(videoDetail.snippet.publishedAt);
   const options = {day:"numeric", month:"long", year:"numeric"};
   const formattedDate = date.toLocaleDateString(undefined,options)
   return (<Box sx={{background: "#333", borderRadius:"10px", p:2, my:2}}>
         <div style={{p:2, color:"#eee", display:"flex", justifyContent:"space-between"}}>
            <Typography variant="body2">Description</Typography>
            <Typography variant="body2">{formattedDate}</Typography>
            {showDescription && <CloseIcon className="close-description" onClick ={handelClick} />}
         </div>
         <hr/>
         <Typography sx={{ color:"#ccc", fontSize:{xs:'15px', md:'15px'}, p:"30px 8px" }} >
            <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                  <a target="_blank" rel="noreferrer" href={decoratedHref} key={key} style={{ color: 'rgb(100, 179, 313)', wordWrap:"break-word" }}>
                     {decoratedText}
                  </a>
            )}>
               {showDescription ? 
                  description : 
                  <>
                     {description.slice(0,100)}<span className="description" onClick={handelClick}>...read more</span>
                  </>}
            </Linkify>
         </Typography>
      </Box>)
}

export default Description