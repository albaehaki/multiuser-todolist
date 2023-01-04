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
} from "@mui/icons-material";
import { useState } from "react";

const data = [
  {
    name: "Home",
    icon: <Home sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Inbox",
    icon: <Inbox sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Outbox",
    icon: <CheckBoxOutlineBlank sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Sent mail",
    icon: <Mail sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Draft",
    icon: <Drafts sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Trash",
    icon: <Receipt sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Close",
    icon: <Close sx={{ width: "36px", height: "36px" }} />,
    // function: setOpen(false),
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: "300px", mt: "20px" }}>
      {data?.map((item, index) => (
        <ListItem
          sx={{ px: "20px", py: "20px", mt: index === 0 ? "70px" : "0px" }}
          button
          key={index}
          onClick={() => {
            item.name === "Close" ? setOpen(false) : setOpen(true);
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <>
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
            M
          </Avatar>
        </IconButton>
      </Box>
      <Box>
        <Drawer
          sx={{ pt: "50px" }}
          open={open}
          anchor={"left"}
          onClose={() => setOpen(false)}
        >
          {getList()}
        </Drawer>
      </Box>
    </>
  );
}

export default App;
