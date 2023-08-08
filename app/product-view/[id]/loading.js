"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header1 from '@components/Header/Header1';
import { FadeLoader } from "react-spinners";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Header1 />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      <FadeLoader color="#36d7b7" />
      </Backdrop>
    </div>
  );
}