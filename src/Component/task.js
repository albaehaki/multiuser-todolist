import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { useHome } from "../Hooks/Home/useHome";
//react dnd
import { useDrag, useDrop } from "react-dnd";
export const ItemTypes = {
  BOX: "box",
  LIST_ITEM: "listItem",
};

export const Task = ({ itemTask, handleClickOpen, dataTask, index }) => {
  const { dndTask } = useHome();
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: ItemTypes.LIST_ITEM,
    item: { itemTask },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ isDropping }, drop] = useDrop({
    accept: ItemTypes.LIST_ITEM,
    // collect: (monitor) => ({
    //   isDropping: monitor.isDropping(),
    // }),
    drop: (item, monitor) => {
      console.log({ drag: item.itemTask, drop: itemTask }, "ini drop list");
      // setIndexCardDrag(item.index);
      // console.log(monitor.isDropping());
      // if (monitor.didDrop()) {
      dndTask(item.itemTask, itemTask);
      // }
    },
  });
  // console.log(item);
  return (
    <>
      {" "}
      <Box
        ref={drop}
        sx={{ backgroundColor: "red" }}
        onDrop={() => {
          console.log(itemTask, "ini tempat drop");
        }}
      >
        <ListItem
          ref={drag}
          sx={{
            backgroundColor: "",
            mb: "10px",
            padding: "0px",
            // width: isDragging ? "50px" : "auto",
          }}
          key={itemTask.uid}
          onDrag={() => {
            console.log("ini task");
          }}
        >
          <ListItemButton
            // ref={drag}
            onClick={() => {
              handleClickOpen(itemTask);
              // console.log(item);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              // boxShadow: "0px 0px 2px gray",
            }}
          >
            <ListItemText>
              {/* <Typography>test</Typography> */}
              <Typography>{dataTask ? itemTask.judul_task : ""}</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
    </>
  );
};
