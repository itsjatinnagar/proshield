import { useState } from "react";
import ArrowLeft from "../icons/arrow-left";
import ArrowRight from "../icons/arrow-right";
import Close from "../icons/close";

type Props = { closeFn: VoidFunction };
export default function Modal({ closeFn }: Props) {
  const LENGTH = 21;
  const [state, setState] = useState(0);

  const prevSlide = () => {
    setState((prev) => {
      prev -= 1;
      if (prev < 0) {
        prev = LENGTH;
      }
      return prev;
    });
  };

  const nextSlide = () => {
    setState((prev) => {
      prev += 1;
      if (prev > LENGTH) {
        prev = 0;
      }
      return prev;
    });
  };

  return (
    <div className="fixed z-50 inset-0 bg-black/80">
      <div className="h-full px-5 py-5">
        <div className="flex flex-row items-center justify-end">
          <button onClick={closeFn}>
            <Close className="size-6 text-white/85 transition-colors hover:text-white cursor-pointer" />
          </button>
        </div>
        <div className="h-full flex flex-col items-center justify-center gap-5">
          <div className="flex flex-row items-center justify-between gap-1">
            <button onClick={prevSlide}>
              <ArrowLeft className="size-6 text-white/85 transition-all hover:text-white hover:scale-150 cursor-pointer" />
            </button>
            <div className="flex-1 max-w-xl">
              <img
                src={`/work/${state}.jpeg`}
                alt="proshield construction"
                className="w-full h-full object-contain"
              />
            </div>
            <button onClick={nextSlide}>
              <ArrowRight className="size-6 text-white/85 transition-all hover:text-white hover:scale-150 cursor-pointer" />
            </button>
          </div>
          <p className="text-white text-xl">
            <span className="text-2xl">{state + 1}</span>&nbsp;/&nbsp;
            <span>{LENGTH + 1}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
