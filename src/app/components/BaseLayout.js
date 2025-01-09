"use client";

import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      {children}
      <Footer />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    margin: 0 50px;
  }
  @media (max-width: 1024px) {
    margin: 0 40px;
  }
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;
