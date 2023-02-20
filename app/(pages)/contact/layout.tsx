export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-modal backdrop-blur-[3px] pt-[7vh]">
      {children}
    </div>
  );
}
