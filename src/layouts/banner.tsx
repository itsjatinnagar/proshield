import Location from "../icons/location";

export default function Banner() {
  return (
    <div className="bg-accent text-black">
      <p className="mx-auto p-2 container flex items-center justify-center gap-1">
        <Location className="size-5" />
        <span>Serving Kawartha Lakes & Surrounding Region</span>
      </p>
    </div>
  );
}
