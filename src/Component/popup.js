import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Dialog,
  Button,
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
  } = useHome();
  //   console.log(data, index);
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
            m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {taskId[0]?.name}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",
            m: "5px",
            borderRadius: "5px",
            // boxShadow: "1px 1px 1px gray",
            boxShadow: "0px 11px 15px -7px rgb(0 0 0 / 20%)",
          }}
        >
          {taskId[0]?.id}
          <br />
          {taskId[0]?.email}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          aspernatur qui iste deserunt natus at autem ipsa amet beatae
          consequuntur laboriosam possimus eaque commodi atque voluptas
          accusamus deleniti hic temporibus vitae, iusto repellendus quis esse
          facilis? Error commodi cupiditate tenetur pariatur ipsum vero impedit
          at quam placeat quos, possimus incidunt voluptatibus nihil. Quia
          repudiandae labore eaque? Sunt maiores labore vero expedita
          repudiandae porro sed culpa qui debitis. Maiores doloribus numquam
          veniam. Inventore distinctio a vero vel harum placeat numquam quasi
          voluptates cum perferendis similique nesciunt, obcaecati deleniti
          quibusdam nihil recusandae sint fugit, asperiores voluptatum
          necessitatibus excepturi sapiente alias. Distinctio, expedita?
        </Typography>
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
        <IconButton sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}>
          <Add sx={{ m: "auto", padding: "0px", width: 32, height: 32 }} />
        </IconButton>
        <Typography
          sx={{
            backgroundColor: "white",
            maxWidth: "200px",
            py: "5px",
            px: "5px",
            m: "5px",
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
      </Dialog>
    </>
  );
};
