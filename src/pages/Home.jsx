import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Home/Main";
import Importance from "../components/Home/Importance";
import GoldenCircle from "../components/Home/GoldenCircle";
import Sort from "../components/Home/Sort";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Importance />
      <GoldenCircle />
      <Sort />
      <Footer />
    </div>
  );
}
