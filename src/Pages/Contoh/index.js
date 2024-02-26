import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Box,
  fabClasses,
  Avatar,
} from "@mui/material";
import {
  CheckBoxOutlineBlank,
  Drafts,
  HomeOutlined,
  Inbox,
  Mail,
  Receipt,
  Close,
  MoreVert,
  Notes,
  Home,
  PeopleOutline,
} from "@mui/icons-material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PopupUsers from "../../Component/popupUsers";
import { DataContext } from "../../Context";

const data = [
  {
    name: "Exit",
    icon: <Close sx={{ width: "36px", height: "36px" }} />,
    // function: setOpen(false),
  },
  {
    name: "Users",
    icon: <PeopleOutline sx={{ width: "36px", height: "36px" }} />,
    // function: setOpen(false),
  },
];

function App({ userUid }) {
  const { openDialogUser, setOpenDialogUser, users } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpenDialogUser(true);
  };
  const handleClose = () => {
    setOpenDialogUser(false);
  };
  // console.log(users?.filter((item) => item.uid === userUid)[0]?.role,"ini filter")
  const getList = () => (
    <div style={{ width: "300px", mt: "20px" }}>
      {data?.map((item, index) => (
        <ListItem
          sx={{
            px: "20px",
            py: "20px",
            mt: index === 0 ? "70px" : "0px",
            display:
              item.name === "Users"
                ? users?.filter((item) => item.uid === userUid)[0]?.role ===
                    "user" ||
                  users?.filter((item) => item.uid === userUid)[0]?.role ===
                    "none"
                  ? "none"
                  : "flex"
                : "flex",
          }}
          // button
          key={index}
          onClick={() => {
            // item.name === "Close" ? setOpen(false) : setOpen(true);
            // navigate("/");
            // window.sessionStorage.removeItem("token")
            // Menghapus sessionStorage
            if (item.name === "Exit") {
              sessionStorage.clear();
              // Melakukan refresh halaman
              window.location.href = window.location.href;
            } else if (item.name === "Users") {
              // setOpen(false)
              console.log("pop up");
              handleClickOpen();
              // setOpenDialogUser(!openDialogUser)
            }

            // .then(( )=> {
            //   navigate("/");
            // })
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  const getListUsers = () => (
    <div style={{ width: "300px", mt: "20px" }}>
      {users?.map((item, index) => (
        <ListItem
          sx={{ px: "20px", py: "20px", mt: index === 0 ? "70px" : "0px" }}
          // button
          key={index}
          // onClick={() => {
          // item.name === "Close" ? setOpen(false) : setOpen(true);
          // navigate("/");
          // window.sessionStorage.removeItem("token")
          // Menghapus sessionStorage
          // if (item.name === "Exit") {
          //   sessionStorage.clear();
          // // Melakukan refresh halaman
          // window.location.href = window.location.href;
          // } else if(item.name === "Users"){
          //   setOpen(false)
          //   console.log("pop up");
          //   handleClickOpen()
          // }

          // .then(( )=> {
          //   navigate("/");
          // })
          // }}
        >
          {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
          <ListItemText primary={item.email} />
        </ListItem>
      ))}
    </div>
  );
  console.log(openDialogUser, "dari contoh");
  return (
    <>
      <PopupUsers openDialogUser={openDialogUser} handleClose={handleClose} />
      <Box
        sx={{
          backgroundColor: "rgb(255,255,255,0.5)",
          width: "100vw",
          // height: "5vw",
          // pt: "20px",
          margin: "auto",
          position: "fixed",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{ my: "20px", mx: "20px", backgroundColor: "white" }}
          onClick={() => setOpen(true)}
        >
          <Notes
            sx={{
              width: 36,
              height: 36,
              color: "lightgray",
              "&:hover": { color: "white" },
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            my: "20px",
            mx: "20px",
            padding: 0,
            // justifySelf: "self-end",
            right: "0px",
            backgroundColor: "white",
          }}
        >
          <Avatar
            sx={{
              // padding: "0px",
              width: 52,
              height: 52,
              // color: "lightgray",
              backgroundColor: "white",
              color: "lightcoral",
              "&:hover": { color: "white", backgroundColor: "lightcoral" },
            }}
          >
           {users?.filter((item) => item.uid === userUid)[0]?.name.slice(0, 3)}
          </Avatar>
        </IconButton>
        {/* <IconButton
        onClick={() => {
          console.log("apaini")
          handleClickOpen()
        }}
          sx={{
            position: "relative",
            my: "20px",
            mx: "20px",
            padding: 0,
            // justifySelf: "self-end",
            right: "0px",
            backgroundColor: "white",
          }}
        >
          <Avatar
            sx={{
              // padding: "0px",
              width: 52,
              height: 52,
              // color: "lightgray",
              backgroundColor: "white",
              color: "lightcoral",
              "&:hover": { color: "white", backgroundColor: "lightcoral" },
            }}
          >
            <PeopleOutline sx={{ width: "36px", height: "36px" }} />
          </Avatar>
        </IconButton> */}
      </Box>
      <Box>
        <Drawer
          sx={{ pt: "50px" }}
          open={open}
          anchor={"left"}
          onClose={() => setOpen(false)}
        >
          {getList()}
          {/* {openDialogUser? getListUsers() : ""} */}
        </Drawer>
      </Box>
    </>
  );
}

export default App;
