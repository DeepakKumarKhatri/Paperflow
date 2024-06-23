import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Paperflow",
  description: "A full-stack application created by Deepak Kumar",
  icons: {
    icon: [
      {
        url: "/images/logo/logoTitle.png",
        href: "/images/logo/logoTitle.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <header className="p-1 pb-2" suppressHydrationWarning={true}>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
