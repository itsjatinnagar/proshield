const services = [
  {
    title: "Shingle & metal roof",
    description:
      "A shingle roof refers to a roofing system made of overlapping materials, typically designed to shed water and provide protection to a building. The shingles are typically made of materials such as asphalt, wood, slate, or metal, with asphalt shingles being the most common in modern residential construction due to their affordability, durability, and ease of installation.",
  },
  {
    title: "Flat roof",
    description:
      "Flat roofing is a type of roofing system characterized by a minimal slope (typically 1 to 10 degrees) or completely horizontal design. Unlike pitched roofs, flat roofs are commonly found in commercial buildings, modern homes, and areas with dry climates where water drainage is not a significant concern. Despite the name, flat roofs are not perfectly level; they usually have a slight pitch to allow water runoff.",
  },
  {
    title: "Siding",
    description:
      "There are several types of siding used in residential and commercial buildings, each offering distinct aesthetics, durability, and maintenance requirements. Here are the most common types of siding:\n- Vinyl Siding\n- Aluminum Siding\n- Wood Siding",
  },
  {
    title: "Cedar Shakes",
    description:
      "Cedar shakes are split pieces of cedar wood that are typically thicker than cedar shingles. This gives them a more textured and rugged look, often with a natural grain pattern. Unlike shingles, which are machine-cut and smooth, shakes are split by hand or machine to retain their rough surface, giving each piece a unique look.",
  },
  {
    title: "Skylights",
    description:
      "Skylights are windows installed in the roof or ceiling of a building, allowing natural light to enter from above. They can be a great way to brighten a room, enhance the aesthetic appeal of a space, and improve ventilation. Skylights come in various shapes, sizes, and types, depending on their design, functionality, and intended use.",
  },
  {
    title: "Custom Flashings",
    description:
      "Custom Metal Flashing is a tailored, site-specific solution used in construction to prevent water infiltration around critical areas like chimneys, roofs, windows, doors, or other junctions where different materials meet. It is designed and fabricated to fit specific dimensions, ensuring a tight seal that protects the structure from leaks and water damage.",
  },
];

export default function Services() {
  return (
    <section className="px-5 py-14 lg:py-20">
      <div className="mx-auto container text-center">
        <h2 className="font-medium text-accent">Our Offerings</h2>
        <p className="font-bold text-2xl text-primary">
          We offer a wide range of services.
        </p>
        <div className="mt-6 w-full grid justify-between gap-5 md:auto-rows-fr md:grid-cols-2 lg:mt-10 xl:grid-cols-3">
          {services.map((service, key) => (
            <Card
              key={key}
              description={service.description}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Props = { title: string; description: string };
function Card({ description, title }: Props) {
  return (
    <div className="card relative border border-accent">
      <div className="p-5 pb-15 h-full bg-white">
        <p className="leading-relaxed whitespace-pre-line">{description}</p>
      </div>
      <div className="foreground absolute bottom-0 left-0 right-0 h-10 w-full grid place-items-center bg-accent transition-all cursor-pointer">
        <h3 className="font-semibold text-base uppercase transition-all">
          {title}
        </h3>
      </div>
    </div>
  );
}
