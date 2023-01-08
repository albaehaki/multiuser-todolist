import React, { useEffect, useContext, useState } from "react";
import { Box, Typography, IconButton, Grid, Dialog } from "@mui/material";

// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataContext } from "../../Context";
import { useHome } from "../../Hooks/Home/useHome";

//Component
import Navigasi from "../Contoh/index";
import { Card } from "../../Component/card";

const Home = () => {
  const {
    data,
    setData,
    OnChangeJudul,
    OnChangeDeskripsi,
    judul,
    deskripsi,
    GetData,
    taskId,
    setTaskId,
  } = useHome();
  const [openDialog, setOpenDialog] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = (e) => {
    console.log(e, "dari popup");
    // setTaskId(data.filter((a) => a.id === e));
    // console.log(
    //   data.task.filter((a) => a.id === e),
    //   "ini pop up"
    // );
    setOpenDialog(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDialog = (e) => {
    setOpenDialog(false);
  };

  useEffect(() => {
    GetData();
    // console.log(GetData());
  }, []);
  // console.log(
  //   data.map((ent, i) => {
  //     return ent.map((index) => {
  //       return "TEST";
  //     });
  //   })
  // );
  console.log(data, "DATA MENTAHAN");
  // console.log(Object.entries(data));
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
          {/* ini mapping card */}
          {data.map((item, i) => (
            <>
              <Card
                key={i}
                data={item}
                index={i}
                handleClickOpen={handleClickOpen}
                openDialog={openDialog}
                handleCloseDialog={handleCloseDialog}
              />
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
