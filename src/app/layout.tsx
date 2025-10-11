import type { Metadata } from "next";
import { currentLang } from "./internationalization";

export const metadata: Metadata = {
  title: "Barthélemy Paléologue - Resume",
  description: "My resume.",
  applicationName: "Barthélemy Paléologue - Resume",
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
