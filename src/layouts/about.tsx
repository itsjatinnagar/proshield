import { Fragment, useEffect, useState } from "react";
import ArrowRight from "../icons/arrow-right";
import { createPortal } from "react-dom";
import Modal from "./modal";

export default function About() {
  return (
    <section className="px-5 py-14 lg:py-20">
      <div className="mx-auto container text-center">
        <h2 className="font-medium text-accent">About Us</h2>
        <p className="font-bold text-2xl text-primary">
          Who We Are and What We Do.
        </p>
        <div className="mt-6 flex flex-col gap-10 lg:mt-10 lg:flex-row">
          <div className="flex-1/2">
            <img
              src="/about.jpg"
              alt="proshield construction ltd"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1/2 space-y-5 leading-relaxed text-justify">
            <p>
              At Proshield Construction Limited, we specialize in transforming
              the exteriors of homes and businesses, enhancing curb appeal and
              boosting property value. With years of experience, a dedicated
              team of professionals, and a passion for quality craftsmanship, we
              deliver tailored renovation solutions that meet your vision and
              exceed expectations. Whether it's updated siding, roofing, soffit,
              facia and eavestroughs, or all kinds of custom metal fabrications.
            </p>
            <p>
              We take pride in offering innovative and lasting exterior
              renovations that create a stunning first impression. Trust us to
              make your property look its absolute best. Exterior renovation
              services can cover a wide range of areas depending on the needs
              and goals of the property owner. Whether the goal is to improve
              aesthetics, boost energy efficiency, increase value, or repair
              structural issues, these services provide a comprehensive solution
              to enhance the home's overall appearance and functionality.
            </p>
            <p>
              Here's a detailed look at the various aspects of exterior
              renovation: Siding Installation and Repair, Roofing Services,
              Soffit And Facia, Gutter and Downspout Installation, Window and
              Door Replacement, Deck and Porch Construction, Exterior Lighting,
              Pest Control and Prevention, Exterior Detailing and Decorative
              Features.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

function Button() {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [state]);

  return (
    <Fragment>
      <button
        onClick={() => setState(true)}
        className="button inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-accent text-white overflow-hidden transition-colors cursor-pointer"
      >
        <span className="relative z-10 text-xl uppercase">check our work</span>
        <span className="circle relative p-1 before:absolute before:z-0 before:inset-0 before:bg-primary before:rounded-full before:scale-100 before:transition-transform before:ease-linear">
          <ArrowRight className="relative z-10 size-4" />
        </span>
      </button>
      {state &&
        createPortal(<Modal closeFn={() => setState(false)} />, document.body)}
    </Fragment>
  );
}
