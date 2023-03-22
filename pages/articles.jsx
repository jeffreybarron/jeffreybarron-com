import PagesLayout from "./(layout)/PagesLayout";

export default function ArticlesPage() {
  return (
    <section className="flex flex-1 grid-flow-col grid-cols-12 sm:grid">
      <div className="col-span-2 p-2"></div>
      <div className="bg-primaryBg col-span-8 p-2 ">
        <h1>articles</h1>
      </div>
      <div className=" col-span-2 p-2 "></div>
    </section>
  );
}

ArticlesPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};
