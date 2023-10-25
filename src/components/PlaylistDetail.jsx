import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const PlaylistDetail = () => {
  const [videos, setvideos] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`)
    .then((data) => {
      console.log(data)
      return setvideos(data.items)
    }
      );
  }, [id]);


  return (
    <Box>
      <Videos videos={videos} />
    </Box>
  )
}

export default PlaylistDetail