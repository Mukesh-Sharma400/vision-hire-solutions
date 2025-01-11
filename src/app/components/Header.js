import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";

import logo from "../../../public/assets/logo.jpg";

export default function Header() {
  const pathname = usePathname();

  const routes = [
    { path: "/jobs", label: "Find Jobs" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <DisplayWrapper>
      <HomeRoute href="/">
        <Logo src={logo} alt="Vision Hire Solutions" quality={100} />
      </HomeRoute>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            className={` ${
              pathname === route.path || pathname.startsWith(route.path + "/")
                ? "active"
                : ""
            }`}
            href={route.path}
          >
            {route.label}
          </Route>
        ))}
        <SearchBtn>
          <i className="bi bi-search"></i>
        </SearchBtn>
      </Routes>
      <Hamburger>
        <i className="bi bi-list"></i>
      </Hamburger>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const HomeRoute = styled(Link)`
  width: auto;
  height: 60px;

  @media (max-width: 375px) {
    height: 50px;
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 60px;

  @media (max-width: 375px) {
    height: 50px;
  }
`;

const Routes = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Route = styled(Link)`
  font-size: 18px;
  font-weight: 600;

  &:hover {
    color: #6598f3;
  }
  &:active {
    color: #6598f3;
  }
`;

const SearchBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #6598f3;
  }
`;

const Hamburger = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: initial;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #6598f3;
    }
  }
  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;
