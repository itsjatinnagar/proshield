const SERVICES = [
  {
    title: "Shingle & Metal Roofing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
  {
    title: "Flat Roofing System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
  {
    title: "Soffit, Facia & Eavestrough",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
  {
    title: "Aluminium & Vinyl Siding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
  {
    title: "Cedar Shakes Siding & Roofs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
  {
    title: "Skylights & Chimneys",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non atque aliquid quos deleniti amet ad nisi praesentium magni consectetur, omnis sit voluptate cupiditate ut laudantium ipsum blanditiis distinctio suscipit exercitationem deserunt hic delectus est perspiciatis dolorem? Dolore, voluptas labore.",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto container">
        <h2 className="font-medium text-accent">Our Services</h2>
        <p className="font-bold text-2xl text-primary">
          We offer a wide range of services to meet your needs.
        </p>
        <div className="mt-10 w-full grid grid-cols-3 justify-between gap-5">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative border border-accent">
      <div className="p-5 pb-[60px] bg-white">
        <p className="leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-full w-full flex items-center justify-center bg-accent font-semibold text-2xl transition-all group-hover:h-10 group-hover:text-base">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
