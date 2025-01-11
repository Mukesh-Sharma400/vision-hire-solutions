"use client";

import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";

import flag from "../../../../public/assets/india.png";

export default function ContactPage() {
  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <BaseLayout>
      <DisplayWrapper>
        <ContentWrapper>
          <LeftSide>
            <Heading>Contact Us</Heading>
            <Description>
              Become our team member, apply for the job post today and send us
              your detailed CV.
            </Description>
            <AddressCard>
              <AddressHeading>Headquarter office</AddressHeading>
              <AddressDescription>
                Storkower Strasse 41
                <br />
                Rheinland-Pfalz
                <br />
                56379
                <br />
                Germany, Berlin
              </AddressDescription>
              <FlagImage src={flag} alt="India" quality={100} />
            </AddressCard>
            <CallEmailCard>
              <CallEmailIcon>
                <i className="bi bi-telephone-fill"></i>
              </CallEmailIcon>
              <CallEmailData>
                <CallEmailDataHeading>+91 702-173-9604</CallEmailDataHeading>
                <CallEmailDataDescription>Call us</CallEmailDataDescription>
              </CallEmailData>
            </CallEmailCard>
            <CallEmailCard>
              <CallEmailIcon>
                <i className="bi bi-envelope-fill"></i>
              </CallEmailIcon>
              <CallEmailData>
                <CallEmailDataHeading>mksh400@gmail.com</CallEmailDataHeading>
                <CallEmailDataDescription>
                  Send your email
                </CallEmailDataDescription>
              </CallEmailData>
            </CallEmailCard>
          </LeftSide>
          <ContactForm ref={form} onSubmit={handleSendMessage}>
            <FieldContainer>
              <Label>Full Name</Label>
              <TextBox placeholder="John Doe" name="from_name" required />
            </FieldContainer>
            <EmailPhoneWrapper>
              <FieldContainer>
                <Label>Email</Label>
                <TextBox
                  placeholder="john.doe@gmail.com"
                  name="from_email"
                  required
                />
              </FieldContainer>
              <FieldContainer>
                <Label>Phone Number</Label>
                <TextBox
                  placeholder="555-555-5555"
                  name="phone_number"
                  required
                />
              </FieldContainer>
            </EmailPhoneWrapper>
            <FieldContainer>
              <Label>Message</Label>
              <TextArea
                placeholder="Type your message here..."
                name="message"
                required
              />
            </FieldContainer>
            <Button type="submit">
              <span className="transition"></span>
              <span className="label">Send Message</span>
            </Button>
          </ContactForm>
        </ContentWrapper>
        <GoogleMaps
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24866.562752799404!2d72.98647896047301!3d19.126320510200138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0ae08fd4fcb%3A0xeb29360c730e957f!2sGhansoli%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707053510196!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></GoogleMaps>
      </DisplayWrapper>
    </BaseLayout>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Heading = styled.h2`
  font-size: 60px;
  line-height: 60px;
  font-weight: 900;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 15px;
  text-align: center;
  color: #8083a3;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const AddressCard = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border-radius: 20px;
  background-color: rgba(230, 230, 240);
`;

const AddressHeading = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const AddressDescription = styled.p`
  font-size: 15px;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const FlagImage = styled(Image)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CallEmailCard = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 0.3s ease-in-out !important;
  }
`;

const CallEmailIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  color: white;
  background-color: black;
  border-radius: 50%;
`;

const CallEmailData = styled.div``;

const CallEmailDataHeading = styled.p`
  font-size: 16px;
  font-weight: 900;

  margin-bottom: 10px;
`;

const CallEmailDataDescription = styled.p`
  font-size: 14px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const EmailPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #6598f3;
  border-radius: 10px;
`;

const GoogleMaps = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: 20px;
`;
