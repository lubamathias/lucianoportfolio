import Header from "@/header/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="pt-BR" >
        <body>
            <Header/>
            {children}
        </body>
      </html>
    );
  }