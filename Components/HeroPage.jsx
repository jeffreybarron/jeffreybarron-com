
export default function HeroPage() {

    return (
    <div className="from-primary via-secondary to-secondary-700 bg-gradient-to-r box-decoration-clone flex h-screen items-center justify-center p-4 align-middle">
      <div className="hover:transition-all">
        <div className="text-accent font-fancyText text-[3.5rem] sm:text-[7rem] md:text-[7.5rem] lg:text-[10rem] xl:text-[13rem] flex">
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">J</div>
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">e</div>
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">f</div>
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">f</div>
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">r</div>
          <div className="hover:-rotate-45 duration-1000  md:text-tertiary">e</div>
          <div className="hover:-rotate-90 duration-1000  md:text-tertiary">y</div>
          &nbsp;
          <div className="-rotate-[30deg] hover:rotate-6 duration-1000">B</div>
          <div className="hover:-rotate-45 duration-1000 ">a</div>
          <div className="hover:-rotate-45 duration-1000 ">r</div>
          <div className="hover:-rotate-45 duration-1000 ">r</div>
          <div className="hover:-rotate-45 duration-1000 ">o</div>
          <div className="hover:-rotate-45 duration-1000 ">n</div>
        </div>
        <div className="text text-primary-contrast text-xl sm:text-[1.45rem] md:text-[1.6rem] lg:text-[2.1rem] xl:text-[2.75rem] lg:leading-[2.5rem] xl:leading-[3rem] capitalize delay-100 duration-1000 ease-in-out ">
          website developer, <br className="sm:hidden"/>
          UX designer, <br className="sm:hidden"/> 
          software engineer, <br className=""/>
          Amatuer photographer, <br className="sm:hidden"/>
          human behaviour affectionado
        </div>
        <div className="text-tertiary sm:text-primary italic sm:text-right text-base sm:text-lg mt-2 xl:mt-2">
          <p>B. Psych. Sc. (Minor in Neuroscience),</p>
          <p>GradCert Computers</p>
        </div>
        <div id="scroll-hint" className={`fixed left-[50%] bottom-0 snap-center text-2xl font-fancyText text-tertiary`}>... scroll ...</div>
      </div>
    </div>
  );
}
