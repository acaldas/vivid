import ContactForm from "#/components/contact-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col px-[6.5vw] h-full w-full overflow-auto scrollbar-thumb-overlay scrollbar-thin">
      <div className="flex flex-1 justify-between relative items-stretch">
        <div className="max-w-[670px] mr-8">
          <h2 className="text-h2">VIVID</h2>
          <h1 className="text-h1">CONTACT</h1>
          <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
            イベント
          </h3>
          <p className="text-lg font-normal mb-8 pr-[20%]">
            You can directly reach out to us through various channels or write
            us an email.
          </p>
        </div>
        <div className="mx-auto">
          <div className="max-w-[588px] mx-auto pt-[150px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
