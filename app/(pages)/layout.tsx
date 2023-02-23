import Header from "#/components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div id="portal-content">
        <span className="hidden">&nbsp;</span>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
