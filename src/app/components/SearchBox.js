"use client";

import styled from "styled-components";

export default function SearchBox() {
  return (
    <DisplayWrapper>
      <SearchIcon>
        <i className="bi bi-search"></i>
      </SearchIcon>
      <SearchInput placeholder="Job title or keyword" />
      <SearchBtn>Search</SearchBtn>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: -35px auto;
  padding: 10px;
  border-radius: 40px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

const SearchIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.2);
  background-color: #f5f5fa;
  border-radius: 50%;

  @media (max-width: 450px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  color: black;
  font-size: 20px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

const SearchBtn = styled.button`
  width: fit-content;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #6598f3;
  }
`;
