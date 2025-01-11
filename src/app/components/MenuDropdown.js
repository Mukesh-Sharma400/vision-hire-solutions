import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const MenuDropdown = ({ menuOpened, setMenuOpened }) => {
  const menuRef = useRef();
  const router = useRouter();
  const pathName = usePathname();
  const [screenWidth, setScreenWidth] = useState(null);

  const routes = [
    { path: "/jobs", label: "Find Jobs" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  const handleRouteClick = ({ route }) => {
    router.push(route);
  };

  const handleButtonClick = () => {
    setMenuOpened(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        menuOpened &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };

    const handleScroll = () => {
      setMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened, setMenuOpened]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DisplayWrapper
      ref={menuRef}
      $menuOpened={menuOpened}
      $screenWidth={screenWidth}
    >
      <RoutesWrapper>
        {routes.map((route, index) => (
          <Route
            key={index}
            className={pathName === route.path ? "active" : ""}
            onClick={() => handleRouteClick({ route: route.path })}
          >
            {route.label}
          </Route>
        ))}
        <SearchBtn onClick={handleButtonClick}>Search</SearchBtn>
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 1216px;
    position: fixed;
    top: 80px;
    right: ${(props) =>
      props.$screenWidth === null
        ? "-1000px"
        : props.$menuOpened
        ? "5%"
        : `-${props.$screenWidth}px`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 4px 30px rgba(225, 225, 225, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(225, 225, 225, 1);
    z-index: 2;
  }
`;

const RoutesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 16px;
`;

const Route = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: black;
  background-color: white;
  text-decoration: none;

  &.active {
    font-weight: 600;
  }
`;

const SearchBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: black;
  border-radius: 15px;
  width: 100%;
  height: 40px;
`;
