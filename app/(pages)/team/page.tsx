"use client";
import ReadMore from "#/components/read-more";
import TeamSelector from "#/components/team-selector";
import TeamViewer from "#/components/team-viewer";
import TeamMemberIcon from "#/public/images/team_member.png";
import { useState } from "react";

const TEAM = [
  {
    name: "Aadjee",
    image: TeamMemberIcon,
    description:
      "Aadjee is VIVID’s product designer with over 7 years of experience in the fintech industry. He specializes in creating visually appealing designs on iOS , Android and WEB with a strong focus on user experience. Aadjee has a background in fintech, giving him unique insights into the design challenges of the financial industry. He is known for his attention to detail and ability to simplify complex concepts through design.",
  },
  {
    name: "WhaaWhaa",
    image: TeamMemberIcon,
    description:
      "WhaaWhaa is a seasoned marketing professional and the head of marketing at VIVID. With over 10 years of experience in building communities and maintaining successful brands, WhaaWhaa is a true asset to the team. He has a proven track record of success, having been instrumental in growing the Creepz brand to a 100 million dollar valuation, and completing over 100 collaborative projects.",
  },
];

const FRIENDS = [
  {
    name: "Aadjee",
    image: TeamMemberIcon,
    description:
      "Aadjee is VIVID’s product designer with over 7 years of experience in the fintech industry. He specializes in creating visually appealing designs on iOS , Android and WEB with a strong focus on user experience. Aadjee has a background in fintech, giving him unique insights into the design challenges of the financial industry. He is known for his attention to detail and ability to simplify complex concepts through design.",
  },
];

const teamMembers = TEAM.map((member, index) => ({ ...member, id: index }));
const friendMembers = FRIENDS.map((member, index) => ({
  ...member,
  id: index + TEAM.length,
}));

export default function Page() {
  const [selected, setSelected] = useState<number | undefined>();
  return (
    <div className="flex flex-wrap pt-[7vh] px-[6.5vw] w-full h-full overflow-auto scrollbar-thumb-overlay scrollbar-thin items-stretch">
      <div>
        <h2 className="text-h2">VIVID</h2>
        <h1 className="text-h1">TEAM</h1>
        <h3 className="my-6 text-red text-[60px] font-extrabold leading-[4.5rem]">
          チーム
        </h3>
        <div className="xl:flex justify-between items-stretch pb-10">
          <div className="xl:max-w-[490px]">
            <ReadMore
              className="text-lg mb-8"
              small="VIVID is a dynamic and diverse team made up of individuals from different cultural backgrounds and expertise in a variety of fields. The team members bring a wealth of skills and knowledge to the table, allowing for a unique and creative approach."
              large="The team dynamics at VIVID promote collaboration, open communication, and continuous learning, enabling the team to continuously improve and achieve great things together. With such a strong team and a pro-active community, VIVID is poised for success."
            />
            <div className="hidden xl:block">
              <TeamSelector
                members={teamMembers}
                selected={selected}
                onSelected={setSelected}
              />
              <div className="mt-8 mb-6">
                <h5 className="text-[40px] font-extrabold leading-none">
                  VIVID
                </h5>
                <h4 className="text-[60px] font-bold leading-none">FRIENDS</h4>
              </div>
              <TeamSelector
                members={friendMembers}
                selected={selected}
                onSelected={setSelected}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 xl:ml-8 w-full">
        <div className="xl:absolute h-full overflow-auto scrollbar-thumb-overlay scrollbar-thin xl:pr-3">
          <TeamViewer
            members={teamMembers}
            selected={selected}
            onSelected={setSelected}
          />
          <div className="mb-4 pl-8">
            <h5 className="text-[34px] font-extrabold leading-none">VIVID</h5>
            <h4 className="text-[54px] font-bold leading-none">FRIENDS</h4>
            <p className="mt-3 max-w-[680px] text-[20px] leading-tight font-normal">
              A section about people who have worked with VIVID in various ways,
              artist producing amazing art, developers helping us to expose our
              world online, a wide variety of talent that we’ve happily
              collaborated with. Very often these people are community members
              of VIVID.
            </p>
          </div>
          <TeamViewer
            members={friendMembers}
            selected={selected}
            onSelected={setSelected}
          />
        </div>
      </div>
    </div>
  );
}
