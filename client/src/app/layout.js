/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Vision Hire Solutions",
  description:
    "Discover job opportunities and career advice tailored to help you excel. Empowering professionals to achieve their goals with Vision Hire Solutions.",
  keywords:
    "career growth, job opportunities, professional development, career advice, job search tips, career solutions",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://vision-hire-solutions.vercel.app",
  type: "website",
  ogTitle: "Vision Hire Solutions",
  ogDescription:
    "Explore job opportunities, career resources, and tips to succeed. Vision Hire Solutions is your trusted partner in career advancement.",
  ogImage: "./icon.png",
  twitterTitle: "Vision Hire Solutions",
  twitterDescription:
    "Unleash your potential with our curated job opportunities and career tips. Vision Hire Solutions is here to guide your professional journey.",
  twitterImage: "./icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
