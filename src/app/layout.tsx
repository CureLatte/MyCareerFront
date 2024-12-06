import "./no.css"
import BaseLayOut from "@/pages/BaseLayOut";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body>
          <BaseLayOut lang="ko">
              {children}
          </BaseLayOut>
        </body>

      </html>

  );
}
