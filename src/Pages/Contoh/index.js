import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  Box,
  fabClasses,
} from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
  Close,
  MoreVert,
  Notes,
} from "@mui/icons-material";
import { useState } from "react";

const data = [
  {
    name: "Close",
    icon: <Close sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Home",
    icon: <HomeOutlined sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Inbox",
    icon: <InboxOutlined sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Outbox",
    icon: (
      <CheckBoxOutlineBlankOutlined sx={{ width: "36px", height: "36px" }} />
    ),
  },
  {
    name: "Sent mail",
    icon: <MailOutline sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Draft",
    icon: <DraftsOutlined sx={{ width: "36px", height: "36px" }} />,
  },
  {
    name: "Trash",
    icon: <ReceiptOutlined sx={{ width: "36px", height: "36px" }} />,
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }}>
      <IconButton
        sx={{ color: "lightcoral", my: "10px", ml: "185px" }}
        onClick={() => setOpen(false)}
      >
        <Close sx={{ width: 36, height: 36 }} />
      </IconButton>
      {data?.map((item, index) => (
        <ListItem sx={{ px: "20px", pb: "20px" }} button key={index}>
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
          margin: "auto",
          position: "fixed",
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
      </Box>
      <div>
        <Drawer
          // sx={{ backgroundColor: "rgb(255,255,255,0.5)" }}
          open={open}
          anchor={"left"}
          onClose={() => setOpen(false)}
        >
          {getList()}
        </Drawer>
      </div>
    </>
  );
}

export default App;
