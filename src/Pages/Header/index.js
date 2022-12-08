import React from "react";
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
import NotesIcon from "@mui/icons-material/Notes";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const index = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "lightcoral",
        height: "70px",
        position: "fixed",
        width: "100vw",
        display: "flex",
      }}
    >
      <IconButton sx={{ my: "auto", ml: "10px" }}>
        <NotesIcon
          sx={{
            m: "auto",
            display: "grid",
            width: 32,
            height: 32,
            color: "white",
          }}
        />
      </IconButton>
    </Grid>
  );
};

export default index;
