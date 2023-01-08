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
import { Popup } from "./popup";

export const Card = ({
  handleClickOpen,
  data,
  openDialog,
  handleCloseDialog,
  index,
}) => {
  // const [openDialog, setOpenDialog] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };
  // console.log(index);
  // console.log(data, "from card js");
  // console.log(data, "ini task");
  const dataTask = data.task;
  // console.log(dataTask);
  return (
    <>
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
            <Typography>{data.judul_card}</Typography>
          </ListItemText>

          <IconButton sx={{ ml: "0px", display: "", padding: "0px" }}>
            <MoreVert sx={{ ml: "0px", display: "grid", padding: "0px" }} />
          </IconButton>
        </ListItem>
        {/* ini mapping task */}
        {/* // console.log(data.task[item]); // Object.entries(item).map(([x, i]) =>
        ( */}
        {dataTask?.map((item, index) => (
          <ListItem
            sx={{ backgroundColor: "", mb: "10px", padding: "0px" }}
            key={item.uid}
          >
            <ListItemButton
              onClick={() => handleClickOpen(item.uid)}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                // boxShadow: "0px 0px 2px gray",
              }}
            >
              <ListItemText>
                {/* <Typography>test</Typography> */}
                <Typography>{item.judul_task}</Typography>
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
            <ListItemIcon
              sx={{ m: "auto", backgroundColor: "", padding: "0px" }}
            >
              <Add sx={{ m: "auto", display: "grid", padding: "0px" }} />
            </ListItemIcon>
            <ListItemText sx={{ backgroundColor: "" }}>Add list</ListItemText>
          </ListItem>
        </ListItemButton>
      </List>
      <Popup
        data={data}
        handleClickOpen={handleClickOpen}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        index={index}
      />
    </>
  );
};
