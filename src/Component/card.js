import React, { useEffect, useState, useRef } from "react";
import {

  Box,
 
  Typography,
  IconButton,
  
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,

} from "@mui/material";

// import { useForm } from "react-hook-form";
import {
  Add,

  MoreVert,
} from "@mui/icons-material";
import { Popup } from "./popup";
import { MenuCard } from "./menuCard";
//react dnd
import { useDrag, useDrop } from "react-dnd";
//data context
import { useHome } from "../Hooks/Home/useHome";
import { Task } from "./task";
export const ItemTypes = {
  BOX: "box",
  LIST_ITEM: "listItem",
};

export const Card = ({
  handleClickOpen,
  data,
  openDialog,
  handleCloseDialog,
  index,
  ListCard,
  userUid
}) => {
  const {
    onChangeJudulCard,
    onChangeTask,
    judulCard,

    addJudulCard,
    judulTask,

    addJudulTask,
    isLoading,
   
    dndCard,
    users,
    
  } = useHome();
  const ListRef = useRef();
  //react dnd
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      dndCard(item.index, index);
    },
  });
  //batas akhir react dnd
  const [openField, setOpenField] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataTask, setDataTask] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  useEffect(() => {
    if (data) {
      setDataTask(data.task);
    }
    
  }, [isLoading]);
  
  return (
    <div ref={drop}>
      <List
        ref={drag}
        sx={{
          
          mt: "100px",
          ml: "10px",
          width: "300px",
          px: "10px",
          backgroundColor: "rgb(255,255,255,0.5)",
          borderRadius: "10px",
        }}
      >
        <ListItem sx={{ backgroundColor: "", px: "0px" }}>
          <ListItemText>
            <Typography>{data ? data.judul_card : ""}</Typography>
          </ListItemText>

          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) => {
              if (users?.filter((item) => item.uid === userUid)[0]?.role === "admin") {
              handleClick(e)
              }
            }}
          >
            <MoreVert sx={{ ml: "0px", display: "grid", padding: "0px" }} />
          </IconButton>
          <MenuCard
            data={data}
            handleClick={handleClick}
            openMenuCard={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        </ListItem>
        {/* ini mapping task */}

        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "300px",
            
            "&::-webkit-scrollbar": {
              width: "7px",
              
              position: "absolute",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
              backgroundColor: "white",
            },
          }}
          
        >
          {dataTask === undefined
            ? ""
            : Object.values(dataTask)?.map((item, index) => (
                <Task
                  dataTask={dataTask}
                  itemTask={item}
                  index={index}
                  handleClickOpen={handleClickOpen}
                />
              ))}
        </Box>

        {openField ? (
          <>
            <form>
              <TextField
                sx={{
                  pb: "10px",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
                size="small"
                multiline
                rows={3}
                fullWidth
                value={data == undefined ? judulCard : judulTask}
                onChange={(e) => {
                  if (data == undefined) {
                    onChangeJudulCard(e);
                  } else {
                    onChangeTask(e);
                  }
                }}
              ></TextField>
              <ListItemButton
                type="submit"
                onClick={() => {
                  
                 
                  if (data == undefined) {
                    addJudulCard(ListCard);
                    
                    setOpenField(!openField);
                  } else {
                    addJudulTask(data);
                    
                    setOpenField(!openField);
                  }
                
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
                  <ListItemText sx={{ backgroundColor: "" }}>
                    Add list
                  </ListItemText>
                </ListItem>
              </ListItemButton>
            </form>
          </>
        ) : (
          ""
        )}
        {!openField ? (
          <ListItemButton
            onClick={() => {
              if (users?.filter((item) => item.uid === userUid)[0]?.role === "admin") {
                    
              setOpenField(!openField);
              }
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
        ) : (
          ""
        )}
      </List>
      {/* {popup} */}
      <Popup
        data={data}
        userUid={userUid}
        handleClickOpen={handleClickOpen}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        index={index}
      />
    </div>
  );
};
