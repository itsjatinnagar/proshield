import Socials from "../components/socials";
import ArrowRight from "../icons/arrow-right";

export default function Header() {
  return (
    <header className="relative w-full hero">
      <div className="absolute z-0 inset-0 bg-primary/80 md:bg-linear-to-r from-50% from-primary to-primary/20"></div>
      <div className="relative z-10 max-h-30 px-5 bg-primary md:bg-transparent">
        <div className="mx-auto container flex items-center justify-center overflow-clip md:justify-start">
          <img
            src="/logo.webp"
            alt="proshield construction ltd"
            className="h-30"
          />
        </div>
      </div>
      <div className="relative z-10 mt-30 px-5">
        <div className="mx-auto container flex items-center">
          <div className="max-w-80 text-white sm:max-w-96 lg:max-w-xl 2xl:max-w-4xl">
            <h1 className="font-bold uppercase text-3xl sm:text-4xl lg:text-6xl 2xl:text-8xl">
              free estimates
              <br />
              and inspections
            </h1>
            <p className="mt-5 text-lg md:text-xl xl:text-2xl">
              We specialize in transforming the exteriors of homes and
              businesses, enhancing curb appeal and boosting property value.
              Trust us to make your property look its absolute best.
            </p>
            <Button />
          </div>
        </div>
      </div>
      <Socials />
    </header>
  );
  // return (
  //   <header className="relative w-full px-5 hero">
  //     <div className="relative z-10 mx-auto container h-full flex items-center">
  //       <div className="max-w-80 w-full text-white sm:max-w-96 xl:max-w-156 2xl:max-w-2xl">
  //         <h1 className="mt-10 font-bold text-2xl uppercase sm:text-3xl xl:text-5xl 2xl:text-8xl">
  //           free estimates and inspections
  //         </h1>
  //         <p className="mt-4 text-base sm:text-lg xl:text-xl 2xl:text-2xl">
  //         </p>
  //         <Button />
  //       </div>
  //     </div>
  //     <Socials />
  //   </header>
  // );
}

function Button() {
  return (
    <a
      role="button"
      href="#contact"
      className="button mt-8 inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-accent text-black overflow-hidden transition-colors cursor-pointer"
    >
      <span className="relative z-10 text-xl uppercase">get in touch</span>
      <span className="circle relative p-1 before:absolute before:z-0 before:inset-0 before:bg-white before:rounded-full before:scale-100 before:transition-transform before:ease-linear">
        <ArrowRight className="relative z-10 size-4" />
      </span>
    </a>
  );
}
