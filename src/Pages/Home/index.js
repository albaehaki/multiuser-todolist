import React, { useEffect, useContext, useState } from "react";
import {
  Menu,
  Drawer,
  Button,
  Box,
  Avatar,
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
import { Add, Close, MoreVert } from "@mui/icons-material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataContext } from "../../Context";
import { useHome } from "../../Hooks/Home/useHome";

//Component
import Navigasi from "../Contoh/index";
import { Card } from "../../Component/card";

const Home = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const { data, setData, OnChangeJudul, OnChangeDeskripsi, judul, deskripsi } =
    useHome();

  return (
    <>
      <Navigasi sx={{ zIndex: "999" }} />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          backgroundColor: "lightcoral",
          overflowX: "auto",
          px: "10px",
          pt: "10px",
          overflowY: "hidden",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {[1, 2, 3].map((x, i) => (
            <Card />
          ))}
        </Grid>
      </Box>

      {/* Dialog */}
      <Dialog
        // fullScreen
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgb(255,255,255,0.0)",
            width: "80vw",
            maxWidth: "100vw",
            height: "70vh",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            boxShadow: "none",
            // backdropFilter: "blur(10px)",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgb(255,255,255,0.0)",
            backdropFilter: "blur(10px)",
          },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          wdkfjbqi
        </Typography>
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          vitae sit maxime eaque quam officiis repudiandae porro reprehenderit
          eos beatae dolorem sapiente, ipsa obcaecati non repellat. Similique
          maxime id at vitae quibusdam velit optio asperiores consequatur
          perspiciatis accusamus, ducimus ipsa harum nostrum dicta adipisci eos
          tenetur cum et nam eius unde deserunt. Laborum nobis est recusandae
          quasi, saepe odio mollitia tempore illum ducimus, nesciunt temporibus
          sed, sapiente veritatis explicabo porro. Laudantium neque animi iste
          dolorum voluptatum quia nobis deserunt at, earum soluta quidem cumque
          molestias! Deserunt, corporis accusantium consequuntur fugiat nesciunt
          exercitationem beatae iure itaque hic accusamus totam excepturi
          eveniet.
        </Typography>
        {/* <Box
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            m: "5px",
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        ></Box> */}
        <IconButton sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}>
          <Add sx={{ m: "auto", padding: "0px", width: 32, height: 32 }} />
        </IconButton>
        <Typography
          sx={{
            backgroundColor: "white",
            maxWidth: "200px",
            py: "5px",
            px: "5px",
            m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            fontWeight: "800",
            letterSpacing: "5px",
          }}
          variant="h7"
        >
          Comment
        </Typography>
      </Dialog>
    </>
  );
};

export default Home;
