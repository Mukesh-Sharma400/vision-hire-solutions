import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <DisplayWrapper>
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
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

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
