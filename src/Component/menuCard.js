import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import { useHome } from "../Hooks/Home/useHome";

export const MenuCard = ({
  handleClose,
  openMenuCard,
  handleClick,
  anchorEl,
  data,
}) => {
  const { removeCard } = useHome();
  //   const [anchorEl, setAnchorEl] =
  //     (React.useState < null) | (HTMLElement > null);
  //   const open = Boolean(anchorEl);
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem
        onClick={() => {
          handleClose();
          console.log(data);
          removeCard(data);
        }}
      >
        Hapus
      </MenuItem>
    </Menu>
  );
};
