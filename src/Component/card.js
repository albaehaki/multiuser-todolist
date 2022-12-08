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

export const Card = () => {
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
  return (
    <List
      sx={{
        // my: "auto",
        mt: "100px",
        ml: "10px",
        width: "300px",
        px: "10px",
        backgroundColor: "rgb(255,255,255,0.5)",
        borderRadius: "10px",
        // height: "100%
      }}
    >
      <ListItem sx={{ backgroundColor: "", px: "0px" }}>
        <ListItemText>
          <Typography>Halo</Typography>
        </ListItemText>

        <IconButton sx={{ ml: "0px", display: "", padding: "0px" }}>
          <MoreVert sx={{ ml: "0px", display: "grid", padding: "0px" }} />
        </IconButton>
      </ListItem>
      {[0, 1, 2].map((x, i) => (
        <ListItem
          sx={{ backgroundColor: "", mb: "10px", padding: "0px" }}
          key={i}
        >
          <ListItemButton
            onClick={() => {
              setOpenDialog(true);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              // boxShadow: "0px 0px 2px gray",
            }}
          >
            <ListItemText>
              <Typography>Lorem ipsum dolor sit, amet consectetur</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}

      {openField ? (
        <TextField
          sx={{
            pb: "10px",
            "& .MuiOutlinedInput-root": { borderRadius: "10px" },
          }}
          size="small"
          multiline
          rows={3}
          fullWidth
        ></TextField>
      ) : (
        ""
      )}

      <ListItemButton
        onClick={() => {
          setOpenField(!openField);
        }}
        sx={{
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "0px",
        }}
      >
        <ListItem>
          <ListItemIcon sx={{ m: "auto", backgroundColor: "", padding: "0px" }}>
            <Add sx={{ m: "auto", display: "grid", padding: "0px" }} />
          </ListItemIcon>
          <ListItemText sx={{ backgroundColor: "" }}>Add list</ListItemText>
        </ListItem>
      </ListItemButton>
    </List>
  );
};
