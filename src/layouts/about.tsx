export default function About() {
  return (
    <section className="px-5 py-14 lg:py-20">
      <div className="mx-auto container text-center">
        <h2 className="font-medium text-accent">About Us</h2>
        <p className="font-bold text-2xl text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              explicabo dicta tenetur velit dolor quae quos maiores, quo odit
              recusandae. Quod dolores soluta quis, facere ad magni accusamus
              nostrum ex, nulla eaque quo cupiditate consequuntur perspiciatis
              laboriosam expedita, illo hic voluptates excepturi neque? Totam
              blanditiis reiciendis et aliquid sint Nobis.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ad
              ratione enim aperiam. Blanditiis, corrupti! Culpa, saepe! A est
              aperiam dolorum nobis minus, cum architecto maxime inventore
              quidem nulla neque non animi quasi error earum accusantium. Neque
              veniam magni esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              vero, porro ipsum nobis perferendis nihil sapiente. Vero aliquid
              dolor dolore voluptatum eveniet, magni magnam quaerat recusandae,
              pariatur repellat dolorem sunt deleniti minima impedit cupiditate
              accusantium blanditiis iure ducimus adipisci? Impedit, perferendis
              nihil. Deserunt ad assumenda ipsa quasi ullam. Perspiciatis
              voluptates perferendis a exercitationem fuga vel facere asperiores
              doloremque est ducimus!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
