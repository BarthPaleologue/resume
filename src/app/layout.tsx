import type { Metadata } from "next";
import { you } from "./resumeData/you";
import { currentLang } from "./internationalization";

export const metadata: Metadata = {
  title: `${you.name} - Resume`,
  description: "My resume.",
  applicationName: `${you.name} - Resume`,
  robots: "index,follow",
  icons: {
    icon: { url: "/resume/static/profile.jpeg", type: "image/jpeg" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={currentLang}>
      <body>{children}</body>
    </html>
  );
}
