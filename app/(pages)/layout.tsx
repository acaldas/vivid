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
      <div
        className="flex-1 overflow-hidden animate-fadeIn delay opacity-0"
        style={{ animationDelay: "250ms", animationDuration: "1.5s" }}
      >
        {children}
      </div>
    </div>
  );
}
