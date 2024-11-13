import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container my-4 mx-3">{children}</div>
    </div>
  );
}
