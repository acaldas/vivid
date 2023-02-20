export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-modal backdrop-blur-[9px] pt-[7vh]">
      {children}
    </div>
  );
}
