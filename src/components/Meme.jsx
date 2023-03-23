import React from "react";
import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)({
  "&:hover": {
    transform: "scale(1.5)",
    height: 200,
  },
  cursor: "pointer",
});

const Meme = ({ meme }) => {
  return (
    <StyledCard>
      <img src={meme.data.url} style={{ height: 200 }} />
    </StyledCard>
  );
};

export default Meme;
