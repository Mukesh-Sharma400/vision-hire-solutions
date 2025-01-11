import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";

import logo from "../../../public/assets/logo.jpg";

export default function Footer() {
  const phoneNumber = "+917021739604";
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: `https://wa.me/${phoneNumber}`,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/MukeshSharma400",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/mukesh_sharma400",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
  ];

  const routesData = [
    { path: "/jobs", label: "Find Jobs" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <Column1>
          <Logo src={logo} alt="MJ Interior" />
          <Description>
            Discover job opportunities and career advice tailored to help you
            excel. Empowering professionals to achieve their goals with Vision
            Hire Solutions.
          </Description>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.tooltip}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.ariaLabel}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </Column1>
        <Column2>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routesData.map((page) => (
              <Page key={page.path} href={page.path}>
                {page.label}
              </Page>
            ))}
          </PagesWrapper>
        </Column2>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>Vision Hire Solutions</span>. All rights
            reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a href="https://mukesh-sharma.vercel.app" target="_blank">
              Mukesh Sharma
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
`;

const Description = styled.p`
  font-size: 15px;
  color: black;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  background-color: black;

  &:hover {
    background-color: #6598f3;
  }
`;

const SectionHeading = styled.p`
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 1px;
  color: black;
`;

const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Page = styled(Link)`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  color: black;
  text-decoration: none;

  &:hover {
    color: #6598f3;
  }

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid rgba(230, 230, 240);

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  span {
    font-weight: 600;
  }
`;

const RightSide = styled.div`
  a {
    text-decoration: none;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: royalBlue;
    }
  }
`;
