import React, { useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Dialog,
  Button,
  Avatar,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useHome } from "../Hooks/Home/useHome";

export const Popup = ({
  handleClickOpen,
  openDialog,
  handleCloseDialog,
  index,
}) => {
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
    Menghapus,
    onChangeDeskripsiTask,
    deskripsiTask,
    setDeskripsiTask,
    addDeskripsiTask,
    isLoading,
    setIsLoading,
  } = useHome();
  // console.log(taskId);
  useEffect(() => {
    console.log(data, "render pop up");
    // console.log(Object.values(data), "render pop up obejek");
    data.map((item, i) => {
      // console.log(item);
      item.task?.map((itemtask) => {
        if (taskId.id_task === itemtask.id_task) {
          // console.log(itemtask);
          setTaskId(itemtask);
        }
      });
    });
    // if (data) {
    //   console.log("data");
    // } else {
    //   console.log("tidak ada datanya");
    // }
  }, [data]);
  // console.log("render pop up di luar use effect");
  return (
    <>
      {/* Dialog */}
      <Dialog
        // fullScreen
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgb(255,255,255,0.0)",
            width: "80vw",
            maxWidth: "100vw",
            height: "70vh",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            boxShadow: "none",
            // backdropFilter: "blur(10px)",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgb(255,255,255,0.0)",
            backdropFilter: "blur(10px)",
          },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // m: "5px",
            mb: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {taskId.judul_task}
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {taskId.deskripsi_task ? (
            taskId.deskripsi_task
          ) : (
            <>
              <TextField
                sx={{
                  pb: "10px",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
                size="small"
                multiline
                rows={5}
                fullWidth
                value={deskripsiTask}
                onChange={(e) => {
                  // if (data == undefined) {
                  //   // onChangeJudulCard(e);
                  // } else {
                  //   // onChangeTask(e);
                  onChangeDeskripsiTask(e);
                  // }
                }}
              ></TextField>
              <ListItemButton
                type="submit"
                onClick={() => {
                  // if (data == undefined) {
                  //   addJudulCard(ListCard);
                  //   console.log("ini kosong");
                  //   setOpenField(!openField);
                  // } else {
                  //   addJudulTask(data);
                  //   console.log(data.id_card);
                  //   console.log("ini ada isinya");
                  //   setOpenField(!openField);
                  // }
                  addDeskripsiTask(taskId);
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
                    Add Deskripsi
                  </ListItemText>
                </ListItem>
              </ListItemButton>
            </>
          )}
        </Box>
        {/* <Box
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            m: "5px",
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        ></Box> */}
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // m: "5px",
            my: "15px",
            borderRadius: "5px",
            fontWeight: "800",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          Checkbox
        </Typography>
        <FormGroup sx={{ mx: "15px" }}>
          {taskId.todo?.map((item) => (
            <>
              <FormControlLabel
                control={<Checkbox checked={item.kondisi} />}
                label={item.nama_todo}
              />
            </>
          ))}
        </FormGroup>
        <IconButton sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}>
          {!taskId.tag ? (
            <Add sx={{ m: "auto", padding: "0px", width: 32, height: 32 }} />
          ) : (
            <Avatar
              sx={{
                // padding: "0px",
                width: 32,
                height: 32,
                // color: "lightgray",
                backgroundColor: "white",
                color: "lightcoral",
                "&:hover": { color: "white", backgroundColor: "lightcoral" },
              }}
            >
              {taskId.tag[0]}
            </Avatar>
          )}
        </IconButton>
        <Typography
          sx={{
            backgroundColor: "white",
            maxWidth: "200px",
            py: "5px",
            px: "5px",
            // mx: "5px",
            my: "15px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            fontWeight: "800",
            letterSpacing: "5px",
          }}
          variant="h7"
        >
          Comment
        </Typography>
        {taskId.komentar?.map((item) => (
          <Typography
            sx={{
              backgroundColor: "white",
              py: "5px",
              px: "5px",
              mx: "5px",
              mb: "15px",
              borderRadius: "5px",
              // boxShadow: "1px 1px 1px gray",
              boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            }}
          >
            {item.nama} :{item.komentar}
          </Typography>
        ))}
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "black",
          }}
          onClick={() => {
            Menghapus();
            handleCloseDialog();
          }}
        >
          Delete
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "black",
            mt: "10px",
          }}
          onClick={() => {
            // Menghapus();
            handleCloseDialog();
          }}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};
