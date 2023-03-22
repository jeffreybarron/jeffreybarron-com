import PagesLayout from "./(layout)/PagesLayout";

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

export default function ExperiencePage() {
  return (
    <div>
      <h1>Skills and Experience</h1>
      <h2>Soft Skills</h2>
      <ul>
        <li>
          I enjoy finding creative solutions to new and difficult problems.
        </li>
        <ul>
          <li className="pl-3">
            I love to figure out why things exist, then how. Being able to fix
            them is a mere side-effect.
          </li>
        </ul>
        <li>
          My mind is most active in the evening with a flood of ideas at bed
          time, which means I can be pretty useless in the early morning at
          times.
          <ul className="pl-3">
            <li>
              Even so, as a concientious self-starter, I do catch up on my daily
              goals as the day develops.
            </li>
          </ul>
        </li>
        <li>
          One challenge I need to be mindful of is an occasional fall back into
          some perfectist tendencies.
        </li>
        <li>
          I am content contributing to a team, however I prefer to lead a team
          by example and mentoring.
        </li>
        <li>
          Compassionate by nature with Bachelor in Psychology, I have developed
          refined communication skills essential for influencing change.
        </li>
        <li>
          Drawing on broad industry knowledge, I am able to pivot quickly with
          creative solutions.
        </li>
      </ul>
      <h2>Software Engineering</h2>
      <p></p>
      <h3>Project Mananagement</h3>
      <h3>IT Management</h3>
      <h2>Developer Operations (DevOps)</h2>
      <h2>Network and Server Administration</h2>
      <h2>Domain Knowledge</h2>
    </div>
  );
}

ExperiencePage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};
