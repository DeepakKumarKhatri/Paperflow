import { Karla } from "next/font/google";
import "../globals.css";
import { SideBar } from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import { ThemeProvider } from "@/components/theme-provider";

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} style={{ zoom: "90%" }}>
      <body
        className={karla.className + " h-screen overflow-hidden"}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          themes={["dark", "custom", "light"]}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <header suppressHydrationWarning={true}>
                <Header />
              </header>
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
