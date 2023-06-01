import { useState, useEffect } from "react";
import { Box, Stack, Typography  } from "@mui/material";
import { useParams } from "react-router-dom";

import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items) )
  },[searchTerm]);

  
  return (
    <Box sx={{ p:2, overflowY: 'auto', height:'90vh', flex:2 }}>
      <Typography fontWeight='bold' mb ={2} sx={{
          fontSize:{xs:'18px', md:'24px'},
          color:"white",
          display:"flex",
          justifyContent:{ xs:"center", md: "flex-start"}
        }}>
        Search Results for :&nbsp;&nbsp;<span style={{ color:"#F31503" }}>{searchTerm}</span>&nbsp;videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed