import React, { useEffect, useContext, useState } from "react";
import { Box, Typography, IconButton, Grid, Dialog } from "@mui/material";
import withProtected from "../../hoc/withProtected";

// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataContext } from "../../Context";
import { useHome } from "../../Hooks/Home/useHome";
// react dnd
import { useDrop } from "react-dnd";

//Component
import Navigasi from "../Contoh/index";
import { Card } from "../../Component/card";

export const ItemTypes = {
  BOX: "box",
  LIST_ITEM: "listItem",
};

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
    dataPopUp,
    setDataPopUp,
  } = useHome();
  //react dnd
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      // console.log(item, monitor, "ini drop");
    },
  });
  //react dnd akhir

  const [openDialog, setOpenDialog] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = (e) => {
    setTaskId(e.id_task);
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
    setIsLoading(false);
    // console.log("render home");
    // console.log(GetData());

    // console.log(data);
  }, []);
  useEffect(() => {
    GetData();
    setIsLoading(false);
    // console.log("render home");
    // console.log(GetData());

    // console.log(data);
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
  // console.log(isLoading);
  return (
    <>
      <Navigasi sx={{ zIndex: "999" }} />

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          backgroundColor: "gray",
          overflowX: "auto",
          px: "10px",
          pt: "10px",
          overflowY: "hidden",
          width: "100%",
        }}
      >
        <Grid
          ref={drop}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {/* <img
            // ref={drag}
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125544effd09308/639f60c65d0ea95c1ee0e6c3/GettyImages-1450106798.jpg?format=jpg"
            width="300px"
          /> */}
          {/* ini mapping card */}
          {Object.values(data).map((item, i) => (
            <>
              <Card
                // ref={drag}
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

export default withProtected(Home);
