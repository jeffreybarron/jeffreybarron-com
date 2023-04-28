
export default function HeroPage2() {
  return (
    <section className="bg-black">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-yellow-200  box-decoration-clone flex h-screen items-center justify-center p-4 align-middle">
      {/* <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-secondary-700  box-decoration-clone flex h-screen items-center justify-center p-4 align-middle"> */}
        <div className="hover:transition-all ">
          <div className="font-fancyText text-[3.5rem] sm:text-[7rem] md:text-[7.5rem] lg:text-[10rem] xl:text-[13rem] flex">
            Jeffrey Barron
          </div>
          <div className="italic text-accent text-xl sm:text-[1.45rem] md:text-[1.6rem] lg:text-[2.1rem] xl:text-[2.75rem] lg:leading-[2.5rem] xl:leading-[3rem] capitalize delay-100 duration-1000 ease-in-out ">
            website developer, <br className="sm:hidden"/>
            UX designer, <br className="sm:hidden"/> 
            software engineer, <br className=""/>
            amateur photographer, <br className="sm:hidden"/>
            human behaviour affectionado
          </div>
          <div className="text-transparent italic sm:text-right text-base sm:text-lg mt-2 xl:mt-2">
            <p>B. Psych. Sc. (Minor in Neuroscience),</p>
            <p>GradCert Computers</p>
          </div>
          <div id="scroll-hint" className={`fixed left-[50%] bottom-0 snap-center text-2xl font-fancyText text-teal-300`}>... scroll ...</div>
        </div>
      </div>
    </section>
  );
}
