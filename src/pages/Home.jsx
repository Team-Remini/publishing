import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home1 from "../components/Home/Home1";

export default function Home() {
  return (
    <div>
      <Header />
      <Home1 />
      <Footer />
    </div>
  );
}
