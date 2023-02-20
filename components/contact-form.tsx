export default function ContactForm() {
  return (
    <div className="bg-overlay rounded-md px-11 py-8">
      <p className="text-lg font-normal mb-6">
        If you want to reach us directly to talk about collaborations, feedback
        or knowledge sharing, feel free to reach out!
      </p>
      <input
        className="bg-white text-black h-14 rounded-md px-4 w-full mb-5"
        placeholder="Your email"
      />
      <input
        className="bg-white text-black h-14 rounded-md px-4 w-full mb-10"
        placeholder="Subject"
      />
      <textarea
        className="bg-white text-black min-h-[280px] rounded-md p-4 w-full mb-8"
        placeholder="Your message"
      />
      <div className="flex justify-end">
        <button className="ml-auto bg-red rounded-md h-11 px-10 pb-2 pt-1 text-lg leading-tight font-light">
          Send
        </button>
      </div>
    </div>
  );
}
