// pages/components/Quote.js [Server Side]

import Image from "next/image";
import harbourBridge from "/public/20230319_194239_dusk.jpg";

function Quote(props) {
  return (
    <section className="relative h-[25vh] w-screen snap-start">
      <div className=" flex h-[25vh] rounded-md ">
        <Image
          src={harbourBridge}
          alt="Sydney Harbour Bridge"
          aria-label="Sydney Harbour Bridge"
          placeholder="blur"
          quality={100}
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="z-50 w-auto bg-gray-800 p-6 opacity-75 sm:rounded-xl">
            <p className="text-tertiary z-100 text-xl">
              {`"${props.quote}"`}
              <span className="text-accent"> - {`${props.author}`}.</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative top-0 z-10 h-[40vh] w-full overflow-hidden "></div> */}
    </section>
  );
}

export default Quote;
