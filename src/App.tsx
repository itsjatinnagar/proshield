import ArrowRight from "./icons/arrow-right";

export default function App() {
  return (
    <div className="h-screen w-full bg-[#18252E]">
      <div className="mx-auto container h-full flex items-center justify-start">
        <div className="max-w-4xl flex flex-col items-start gap-5">
          <img
            src="logo.webp"
            alt="proshield construction ltd"
            className="h-30"
          />
          <h1 className="mt-5 text-white uppercase text-8xl font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex
            quis, pariatur eligendi cupiditate officia molestias quam, facilis
            quidem vel quas eveniet praesentium necessitatibus nobis! Doloremque
            corrupti id facilis tenetur!
          </p>
          <button className="group px-5 py-3 bg-[#ADA287] text-black overflow-hidden flex flex-row items-center justify-center gap-1.5 cursor-pointer">
            <span className="font-medium uppercase relative z-10">
              get in touch
            </span>
            <span className="relative p-1 before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-[100] before:z-0 before:transition-transform before:duration-500 group-hover:before:scale-100">
              <ArrowRight className="relative z-10" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
