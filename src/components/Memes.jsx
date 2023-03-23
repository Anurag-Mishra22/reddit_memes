import React from "react";
import { useEffect, useState } from "react";
import { getMemes } from "../util/api";
import { Grid } from "@mui/material";
import Meme from "./Meme";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await getMemes();
      setMemes(response?.data?.children);
    };
    getData();
  }, []);

  return (
    <Grid container margin={3}>
      {memes.map((meme) => (
        <Grid item xs={3}>
          <Meme meme={meme} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Memes;
