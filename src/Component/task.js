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
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LIST_ITEM,
    item: { itemTask },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ isDropping }, drop] = useDrop({
    accept: ItemTypes.LIST_ITEM,

    drop: (item, monitor) => {
      // console.log({ drag: item.itemTask, drop: itemTask }, "ini drop list");

      dndTask(item.itemTask, itemTask);
    },
  });

  return (
    <>
      {" "}
      <Box
        ref={drop}
        onDrop={() => {
          // console.log(itemTask, "ini tempat drop");
        }}
        // onTouchStart={() => console.log("bisa")}
      >
        <ListItem
          ref={drag}
          sx={{
            backgroundColor: "",
            mb: "10px",
            padding: "0px",
          }}
          key={itemTask.uid}
          onDrag={() => {
            // console.log("ini task");
          }}
        >
          <ListItemButton
            onClick={() => {
              handleClickOpen(itemTask);
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <ListItemText>
              <Typography>{dataTask ? itemTask.judul_task : ""}</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
    </>
  );
};
