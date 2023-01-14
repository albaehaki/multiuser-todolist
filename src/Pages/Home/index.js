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
    isLoading,
    setIsLoading,
  } = useHome();
  const [openDialog, setOpenDialog] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = (e) => {
    // console.log(e, "dari popup");
    // setTaskId(data.filter((a) => a.id === e));
    // console.log(
    // data.filter((a) => {
    //   if (a.task.uid === "wkdjdbiwvedvi3") {
    //     // console.log(a);
    //     console.log(a.task.uid === "wkdjdbiwvedvi3");
    //     console.log("berhasil");
    //   }
    // }),
    //  if (a.task.uid === "wkdjdbiwvedvi3") {
    //    // console.log(a);
    //    console.log(a.task.uid === "wkdjdbiwvedvi3");
    //    console.log("berhasil");
    //  }
    data.map((x) => {
      // if (x.task) {
      // console.log(x.task, "bagaimana");
      // console.log(x.task, "bagaimana");
      // setTaskId(Object.values(x).filter((a) => a.uid === e));
      x.task.map((item) => {
        // console.log(item, "masih mencoba");
        // console.log(item.uid === "kwdjbiwekbbuw86", "apakah benar");
        // console.log(item.uid === "kwdjbiwekbbuw86", "apakah benar");
        if (item.uid === e) {
          console.log(item, "ini hasilnya");
          setTaskId(item);
        }
      });
      // console.log(x.task.uid === "wkdjdbiwvedvi3", "apakah benar");
      // } else {
      //   console.log("ternyata tidak ada");
      // }
    });
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
    console.log("render home");
    // console.log(GetData());
  }, [isLoading]);
  // console.log(
  //   data.map((ent, i) => {
  //     return ent.map((index) => {
  //       return "TEST";
  //     });
  //   })
  // );
  // console.log(data, "DATA MENTAHAN");
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
          {Object.values(data).map((item, i) => (
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
          <Card
            // key={i}
            ListCard={data}
            // index={i}
            handleClickOpen={handleClickOpen}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
