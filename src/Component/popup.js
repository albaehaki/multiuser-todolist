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
import { Add, Edit, Remove } from "@mui/icons-material";
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
    toggleEditDeskripsiTask,
    setToggleEditDeskripsiTask,
    toggleEditJudulTask,
    setToggleEditJudulTask,
    judulTask,
    setJudulTask,
    addJudulTask,
    onChangeTask,
    removeTask,
    dataPopUp,
    setDataPopUp,
    //todo
    toggleEditJudulTodo,
    setToggleEditJudulTodo,
    toggleAddJudulTodo,
    setToggleAddJudulTodo,
    toggleEditTodo,
    setToggleEditTodo,
    judulTodo,
    setJudulTodo,
    todo,
    setTodo,
    addJudulTodo,
    addNamaTodo,
    todoOpenId,
    setTodoOpenId,
    removeJudulTodo,
    todoOpenName,
    setTodoOpenName,
    removeTodo,
    //komentar
    toggleEditKomentar,
    setToggleEditKomentar,
    komentar,
    setKomentar,
  } = useHome();
  // console.log(taskId);
  useEffect(() => {
    // console.log(data, "render pop up");
    // console.log(Object.values(data), "render pop up obejek");
    data.map((item, i) => {
      // console.log(item);
      item.task?.map((itemtask) => {
        if (taskId === itemtask.id_task) {
          // console.log(itemtask, "ini ada di home");
          setDataPopUp(itemtask);
        }
      });
    });
  }, [taskId, isLoading]);

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
            backgroundColor: "rgb(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // m: "5px",
            mb: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
          container
        >
          <Grid item xs={10}>
            {toggleEditJudulTask ? (
              <TextField
                sx={{
                  pb: "10px",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
                size="small"
                multiline
                rows={1}
                fullWidth
                value={judulTask}
                onChange={(e) => {
                  // if (data == undefined) {
                  //   // onChangeJudulCard(e);
                  // } else {
                  //   // onChangeTask(e);
                  // onChangeDeskripsiTask(e);
                  // }
                  onChangeTask(e);
                }}
              ></TextField>
            ) : (
              <Typography variant="h6">{dataPopUp.judul_task}</Typography>
            )}
            {/* <Typography>{taskId.judul_task}</Typography> */}
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={2}>
            <Button
              onClick={() => {
                // console.log("test judul");
                if (!toggleEditJudulTask) {
                  setToggleEditJudulTask(true);
                  setJudulTask(dataPopUp.judul_task);
                } else {
                  setToggleEditJudulTask(false);
                  addJudulTask(dataPopUp);
                }
              }}
              // sx={{
              //   mr: 0,
              //   position: "relative",
              //   right: 0,
              // }}
            >
              {toggleEditJudulTask ? <Add /> : <Edit />}
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {dataPopUp.deskripsi_task ? (
            toggleEditDeskripsiTask ? (
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
                    setToggleEditDeskripsiTask(false);
                    addDeskripsiTask(dataPopUp);
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
                      <Add
                        sx={{ m: "auto", display: "grid", padding: "0px" }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ backgroundColor: "" }}>
                      Add Deskripsi
                    </ListItemText>
                  </ListItem>
                </ListItemButton>
              </>
            ) : (
              <>
                {" "}
                <Typography variant="subtitle1">
                  {dataPopUp.deskripsi_task.replace(/n\//g, "<br>")}
                </Typography>
                <Button
                  sx={{
                    // backgroundColor: "lightcoral",
                    borderRadius: "10px",
                    // border: "2px",
                    // borderColor: "lightcoral",
                    color: "black",
                    mt: "10px",
                  }}
                  fullWidth
                  onClick={() => {
                    // Menghapus();
                    // handleCloseDialog();
                    setDeskripsiTask(dataPopUp.deskripsi_task);
                    setToggleEditDeskripsiTask(true);
                    console.log("open");
                  }}
                >
                  Edit
                </Button>
              </>
            )
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
                  setToggleEditDeskripsiTask(false);
                  addDeskripsiTask(dataPopUp);
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
        {/* todo */}
        <Typography sx={{ my: "20px", fontWeight: "600", fontSize: "16" }}>
          Checkbox
        </Typography>

        {/* <FormGroup sx={{ mx: "15px" }}>
          {dataPopUp.todo?.map((item) => (
            <>
              <FormControlLabel
                control={<Checkbox checked={item.checked} />}
                label={item.judul_todo}
              />
            </>
          ))}
        </FormGroup> */}
        <Box>
          {dataPopUp.todo?.map((itemTodo, i) => (
            <>
              <Grid
                key={i}
                sx={{
                  backgroundColor: "white",
                  py: "5px",
                  px: "5px",
                  // m: "5px",
                  mb: "5px",
                  mt: "15px",
                  borderRadius: "5px",
                  // boxShadow: "1px 1px 1px gray",
                  // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
                }}
                container
              >
                <Grid item xs={10}>
                  {toggleEditJudulTodo &&
                  todoOpenId === itemTodo.id_judul_todo ? (
                    <TextField
                      sx={{
                        mb: "10px",
                        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                      }}
                      size="small"
                      multiline
                      rows={1}
                      fullWidth
                      value={judulTodo}
                      onChange={(e) => {
                        // onChangeTask(e);
                        setJudulTodo(e.target.value);
                      }}
                    ></TextField>
                  ) : (
                    <Typography
                      sx={{
                        backgroundColor: "white",
                        my: "5px",
                        mx: "5px",
                        // m: "5px",

                        borderRadius: "5px",
                        fontWeight: "800",
                        // boxShadow: "1px 1px 1px gray",
                        // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
                      }}
                    >
                      {itemTodo.judul_todo.substring(0, 10) + "..."}
                    </Typography>
                  )}
                  {/* <Typography>{taskId.judul_task}</Typography> */}
                </Grid>
                <Grid
                  sx={{ display: "flex", justifyContent: "right" }}
                  item
                  xs={2}
                >
                  <Button
                    onClick={() => {
                      setTodoOpenId(itemTodo.id_judul_todo);
                      addJudulTodo(itemTodo);
                      console.log(dataPopUp);
                      setToggleEditJudulTodo(!toggleEditJudulTodo);
                      if (itemTodo.id_judul_todo) {
                        setJudulTodo(itemTodo.judul_todo);
                      }
                    }}
                  >
                    {toggleEditJudulTodo ? <Add /> : <Edit />}
                  </Button>
                  <Button
                    onClick={() => {
                      removeJudulTodo(itemTodo);
                    }}
                  >
                    <Remove />
                  </Button>
                </Grid>
              </Grid>

              <FormGroup sx={{ mr: "20px" }}>
                {itemTodo.list_todo?.map((item, index) => (
                  <Grid container>
                    <Grid xs={10} item>
                      <FormControlLabel
                        key={index}
                        control={<Checkbox checked={item.kondisi} />}
                        label={item.nama_todo.substring(0, 20) + "..."}
                        onClick={(e) => {
                          console.log(e.target.checked);
                          addNamaTodo(item, true, e.target.checked);
                        }}
                        // onDrag={(e) => {
                        //   console.log(e, "drag");
                        // }}
                        onTouchMove={(e) => {
                          console.log(e, "move");
                        }}
                      />
                    </Grid>
                    <Grid xs={2} item>
                      <Button
                        onClick={() => {
                          removeTodo(item);
                          // console.log(item);
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                {toggleEditTodo && todoOpenName === itemTodo.id_judul_todo ? (
                  <TextField
                    sx={{
                      mb: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                    size="small"
                    multiline
                    rows={1}
                    fullWidth
                    value={todo}
                    onChange={(e) => {
                      // onChangeTask(e);
                      setTodo(e.target.value);
                    }}
                  ></TextField>
                ) : (
                  ""
                )}
                <Button
                  onClick={() => {
                    // console.log(itemTodo);
                    setTodoOpenName(itemTodo.id_judul_todo);
                    setToggleEditTodo(!toggleEditTodo);
                    if (toggleEditTodo) {
                      addNamaTodo(itemTodo, "add");
                    }
                  }}
                >
                  <Add />
                </Button>
              </FormGroup>
            </>
          ))}
          <Grid
            sx={{
              backgroundColor: "white",
              py: "5px",
              px: "5px",
              // m: "5px",
              mb: "5px",
              mt: "15px",
              borderRadius: "5px",
              // boxShadow: "1px 1px 1px gray",
              // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            }}
            container
          >
            <Grid item xs={10}>
              {toggleAddJudulTodo ? (
                <TextField
                  sx={{
                    mb: "10px",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                  size="small"
                  multiline
                  rows={1}
                  fullWidth
                  value={judulTodo}
                  onChange={(e) => {
                    // onChangeTask(e);
                    setJudulTodo(e.target.value);
                  }}
                ></TextField>
              ) : (
                <Typography
                  sx={{
                    backgroundColor: "white",
                    my: "5px",
                    mx: "5px",
                    // m: "5px",

                    borderRadius: "5px",
                    fontWeight: "800",
                    // boxShadow: "1px 1px 1px gray",
                    // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
                  }}
                >
                  Todo
                </Typography>
              )}
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={2}>
              <Button
                onClick={() => {
                  addJudulTodo(dataPopUp);
                  console.log(dataPopUp);
                  setToggleAddJudulTodo(!toggleAddJudulTodo);
                }}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* tag */}
        <IconButton sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}>
          {!dataPopUp.tag ? (
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
              {dataPopUp.tag[0]}
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
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
            fontWeight: "800",
            letterSpacing: "5px",
          }}
          variant="h7"
        >
          Comment
        </Typography>
        {dataPopUp.komentar === []
          ? dataPopUp.komentar.map((item) => (
              <Typography
                sx={{
                  backgroundColor: "white",
                  py: "5px",
                  px: "5px",
                  mx: "5px",
                  mb: "15px",
                  borderRadius: "5px",
                  // boxShadow: "1px 1px 1px gray",
                  // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
                }}
              >
                {item.nama} :{item.komentar}
              </Typography>
            ))
          : ""}
        <Typography>
          <b>zacky </b> :{" "}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            // mx: "5px",
            mb: "15px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            // boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {/* {item.nama} :{item.komentar} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <TextField
          sx={{
            mb: "10px",
            "& .MuiOutlinedInput-root": { borderRadius: "50px" },
          }}
          size="small"
        ></TextField>
        <Grid sx={{ mt: "10px" }} container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#E0144C",
                borderRadius: "10px",
                color: "white",
              }}
              onClick={() => {
                removeTask(dataPopUp);
                handleCloseDialog();
              }}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                color: "black",
                // mt: "10px",
              }}
              onClick={() => {
                handleCloseDialog();
              }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
