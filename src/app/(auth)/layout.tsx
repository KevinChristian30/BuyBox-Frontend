import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-lines h-screen w-full grid place-items-center">
      {children}
    </div>
  );
}
