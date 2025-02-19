import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StoreProvider from "@/providers/StoreProvider";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import the Roboto font
const roboto = Roboto({
  variable: "--font-roboto", // Define a CSS variable for the font
  subsets: ["latin"], // Include Latin subset
  weight: ["400", "500", "700"], // Specify font weights you want to include
});

export const metadata: Metadata = {
  title: "Booking Page",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Ensure `params` is typed correctly as a Promise
}) {
  const { locale } = await params; // Await the params to resolve if it's a Promise
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.variable}`} // Use the Roboto variable
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}