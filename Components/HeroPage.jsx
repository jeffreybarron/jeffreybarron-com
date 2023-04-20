// pages/components/HeroPage.js [Server Side]

export default function HeroPage() {
  return (
    <div className="">
      <div className="block duration-700 hover:-rotate-6 hover:transition-all">
        <p className="text-accent font-fancyText text-8xl capitalize md:text-9xl">
          <span className="md:text-tertiary ">jeffrey</span>{" "}
          <br className="md:hidden" />
          barron
        </p>
        <h3 className="text text-primary-contrast pt-4 text-2xl capitalize delay-100 duration-700 ease-in-out ">
          software engineer, <br className="sm:hidden" />
          web-developer, <br className="md:hidden" />
          designer, photographer, <br />
          human behaviour affectionado
        </h3>
        <p className="text-tertiary italic md:text-right">
          B. Psych. Sc. (Minor in Neuroscience), <br />
          GradCert Computers
        </p>
      </div>
    </div>
  );
}
