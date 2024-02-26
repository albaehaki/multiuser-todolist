import React, { useContext, useState } from "react";

import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";

// import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHome } from "../Hooks/Home/useHome";

import { blue } from "@mui/material/colors";
import { DataContext } from "../Context";

export default function AlertDialog({ openDialogUser, handleClose, userUid }) {
  const { users } = useContext(DataContext);
  const { giveAkses } = useHome()
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  const handleChange = (e, idUser) => {
    const roleData = e.target.value
    console.log(e.target.value)
    giveAkses(roleData === 10? "admin" : roleData === 20? "none" : roleData === 30? "user" : "", idUser)
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openDialogUser}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
       
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions> */}
        <DialogTitle>Members</DialogTitle>
        {/* <List sx={{ pt: 0 }}>
        {users.map((items) => (
          <ListItem disableGutters key={items.uid}>
            <ListItemButton 
            // onClick={() => handleListItemClick(email)}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  // {/* <PersonIcon /> */}
        {/* {items.name.charAt(0)} */}
        {/* </Avatar> */}
        {/* </ListItemAvatar> */}
        {/* <ListItemText primary={items.email} /> */}
        {/* </ListItemButton> */}
        {/* </ListItem> */}
        {/* ))} */}

        {/* </List> */}

        {users?.filter((items) => items.role !== "admin").map((items) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <ListItem disableGutters key={items.uid}>
                {/* <ListItemButton  */}
                {/* // onClick={() => handleListItemClick(email)} */}
                {/* > */}
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    {/* <PersonIcon /> */}
                    {items.name.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={items.email} />
                {/* </ListItemButton> */}
              </ListItem>
              {/* {items.name} */}
            </AccordionSummary>
            <AccordionDetails>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={items.role === "admin"? 10: items.role === "user" ? 30 : 20}
                  label="Role"
                  onChange={(e) => {handleChange(e, items.uid)}}
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>None</MenuItem>
                  <MenuItem value={30}>User</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        ))}
      </Dialog>
    </>
  );
}
