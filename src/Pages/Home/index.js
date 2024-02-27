import React, { useEffect, useContext, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Dialog,
  Button,
} from "@mui/material";
import withProtected from "../../hoc/withProtected";
import withAuth from "../../hoc/withAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataContext } from "../../Context";
import { DataLoginContext } from "../../Context";
import { useHome } from "../../Hooks/Home/useHome";
// react dnd
import { useDrop } from "react-dnd";

//Component
import Navigasi from "../Contoh/index";
import { Card } from "../../Component/card";
import AlertDialog from "../../Component/popupUsers";
export const ItemTypes = {
  BOX: "box",
  LIST_ITEM: "listItem",
};

const Home = () => {
  const auth = getAuth();
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
    users,
    openDialogUser,
    setOpenDialogUser,
    getCurrentUser,
    openDialogTag,
    dataPopUpChange,
    getAkses,
  } = useHome();
  const { fireUuid, setFireUuid } = useContext(DataLoginContext);
  //react dnd
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      // console.log(item, monitor, "ini drop");
    },
  });
  //react dnd akhir
  const [userUid, setUserUid] = useState(null);
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
  const handleCloseDialogUsers = () => {
    setOpenDialogUser(false);
  };
  const handleOpenDialogUsers = () => {
    setOpenDialogUser(true);
  };
  const userRole = users?.filter((item) => item.uid === userUid)[0]?.role?.toLowerCase();

  useEffect(() => {
    GetData();
    getCurrentUser();
    setIsLoading(false);
    // console.log("render home");
    // console.log(GetData());

    // console.log(data);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserUid(uid);
        // ...
        // console.log(uid, "ada usernya");
      } else {
        // User is signed out
        // ...
        // console.log( "g ada usernya");
      }
    });
  }, []);
  useEffect(() => {
    GetData();
    getCurrentUser();
    setIsLoading(false);

    // console.log("render home");
    // console.log(GetData());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserUid(uid);
        // ...
        // console.log(uid, "ada usernya");
      } else {
        // User is signed out
        // ...
        // console.log( "g ada usernya");
      }
    });
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
  // console.log(users?.valueOf("email"));
  // console.log(openDialog, "openDialog");
  console.log(users?.filter((item) => item.uid === userUid)[0]?.role === "", "role");
  // console.log(users?.filter((item) => item.uid === userUid)[0]?.role);
  return (
    <>
      <Navigasi userUid={userUid} sx={{ zIndex: "999" }} />
      <AlertDialog
        openDialogUser={openDialogUser}
        handleClose={handleCloseDialogUsers}
        userUid={userUid}
      />

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
        {/* <button
          onClick={() => {
            console.log("coba")
            handleOpenDialogUsers()
          }}
          >coba</button> */}
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
          {/* {users?.filter((item) => item.uid === userUid)[0]?.role === "" || "none"
            ? ""
            : Object.values(data).map((item, i) => (
                <>
                  <Card
                    // ref={drag}
                    key={i}
                    data={item}
                    userUid={userUid}
                    index={i}
                    handleClickOpen={handleClickOpen}
                    openDialog={openDialog}
                    handleCloseDialog={handleCloseDialog}
                  />
                </>
              ))}
          {users?.filter((item) => item.uid === userUid)[0]?.role === "" || "none" ? (
            <Button
              sx={{
                marginTop: "100px",
                backgroundColor: "white",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}
              onClick={getAkses}
            >
              Minta Akses
            </Button>
          ) : users?.filter((item) => item.uid === userUid)[0]?.role === "user" ? "" : (
            <Card
              // key={i}
              ListCard={data}
              // index={i}
              userUid={userUid}
              handleClickOpen={handleClickOpen}
              openDialog={openDialog}
              handleCloseDialog={handleCloseDialog}
            />
          ) } */}

{userRole === "none" ?  (
        <Button
          sx={{
            marginTop: "100px",
            backgroundColor: "white",
            fontWeight: "bold",
            "&:hover": {
              color: "white",
            },
          }}
          onClick={getAkses}
        >
          Minta Akses
        </Button>
      ) : userRole === "" ?  <Button
      sx={{
        marginTop: "100px",
        backgroundColor: "white",
        fontWeight: "bold",
        "&:hover": {
          color: "white",
        },
      }}
      onClick={getAkses}
    >
      Minta Akses
    </Button> : (
        <>
          {Object.values(data).map((item, i) => (
            <Card
              key={i}
              data={item}
              userUid={userUid}
              index={i}
              handleClickOpen={handleClickOpen}
              openDialog={openDialog}
              handleCloseDialog={handleCloseDialog}
            />
          ))}
          <Card
            ListCard={data}
            userUid={userUid}
            handleClickOpen={handleClickOpen}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
          />
        </>
      )}
        </Grid>
      </Box>
    </>
  );
};

// export default Home;
export default withAuth(Home);
