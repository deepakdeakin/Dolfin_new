import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SouthIcon from "@mui/icons-material/South";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const DolfinHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

function DolfinHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <DolfinHeroLayoutRoot>
      <Container
        sx={{
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />

        <SouthIcon
          height="16"
          width="12"
          sx={{ position: "absolute", bottom: 32 }}
        />
      </Container>
    </DolfinHeroLayoutRoot>
  );
}

DolfinHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default DolfinHeroLayout;
