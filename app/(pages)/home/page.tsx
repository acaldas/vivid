import TextFade from "#/components/text-fade";

export default function Page() {
  return (
    <div className="px-[6.5vw] flex items-center h-full">
      <div className="w-full">
        <TextFade className="text-h2">KAWAII</TextFade>
        <TextFade className="text-h1">CYBERPUNK</TextFade>
        <TextFade className="my-1 xl:my-6 text-red text-h3">
          サイバーパンク
        </TextFade>
        <TextFade className="text-lg w-[500px] max-w-[90%]">
          A new kind of collaboration. A community vision of something
          beautiful. Art, fashion, and story.
        </TextFade>
      </div>
    </div>
  );
}
