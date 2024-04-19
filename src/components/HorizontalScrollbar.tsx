import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import LeftArrowIcon from "../assets/images/arrow-left.png";
import RightArrowIcon from "../assets/images/arrow-right.png";

type HorizontalScrollbarProps = {
  data: string[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box m="0 40px">
          <div key={item} title={item}>
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
