import React, { useEffect, useState } from "react";
import {
  Box,
 
  Grid,

  Button,
} from "@mui/material";

import withAuth from "../../hoc/withAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useHome } from "../../Hooks/Home/useHome";
// react dnd
import { useDrop } from "react-dnd";

//Component
import Navigasi from "../Header/index";
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

    
  
    GetData,
    
    setTaskId,
    isLoading,
    setIsLoading,
   
    users,
    openDialogUser,
    setOpenDialogUser,
    getCurrentUser,
    
    getAkses,
  } = useHome();

  //react dnd
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
     
    },
  });
  
  const [userUid, setUserUid] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = (e) => {
    setTaskId(e.id_task);
    setOpenDialog(true);
  };

  const handleCloseDialog = (e) => {
    setOpenDialog(false);
  };
  const handleCloseDialogUsers = () => {
    setOpenDialogUser(false);
  };

  const userRole = users
    ?.filter((item) => item.uid === userUid)[0]
    ?.role?.toLowerCase();

  useEffect(() => {
    GetData();
    getCurrentUser();
    setIsLoading(false);
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        setUserUid(uid);
        
      } 
    });
  }, []);

  useEffect(() => {
    GetData();
    getCurrentUser();
    setIsLoading(false);

   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        setUserUid(uid);
        
      }
    });
    
  }, [isLoading]);
  

 
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
       

          {userRole === "none" ? (
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
          ) : userRole === "" ? (
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
          ) : (
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


export default withAuth(Home);
