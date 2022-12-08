import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Context";

export const useHome = () => {
  const { data, setData, judul, setJudul, deskripsi, setDeskripsi } =
    useContext(DataContext);
  const OnChangeJudul = (e) => {
    setJudul(e.target.value);
  };
  const OnChangeDeskripsi = (e) => {
    setDeskripsi(e.target.value);
  };
  return { data, setData, OnChangeJudul, OnChangeDeskripsi, judul, setJudul };
};
