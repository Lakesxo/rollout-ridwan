import Contributor, { ContributorData } from "@/components/Contributor";
import { getAllContributors } from "@/lib/contributors";

export default async function Home() {
  const contributors = await getAllContributors();
  return (
    <main className="bg-grey-100 min-h-screen p-9">
      <h1 className="text-black-100 font-bold text-lg pb-3 mb-7 border-b-[#c4c4c4] border-b border-solid">
        Top Contributors
      </h1>
      <div className="flex gap-[30px] flex-wrap">
        {contributors.map((contributor: ContributorData) => (
          <Contributor key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </main>
  );
}
