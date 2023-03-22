import PagesLayout from "./(layout)/PagesLayout";

export default function ContactPage() {
  return (
    <section className="flex flex-1 grid-flow-col grid-cols-12 sm:grid">
      <div className="col-span-2 p-2"></div>
      <div className="bg-primaryBg col-span-8 p-2 ">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <div className="rotate-90 text-white ">
          <p>Body Text</p>
        </div>
      </div>
      <div className=" col-span-2 p-2 "></div>
    </section>
  );
}

ContactPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};
