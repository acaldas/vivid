export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-[rgba(0, 0, 0, 0.01)] backdrop-blur-[9px]">
      {children}
    </div>
  );
}
