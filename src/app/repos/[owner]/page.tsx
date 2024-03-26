import Repository, { RepoData } from "@/components/Repository";
import { getUsersRepositories } from "@/lib/contributors";

export default async function Repos({ params }: { params: { owner: string } }) {
  const repositories = await getUsersRepositories(params.owner);
  repositories.sort(
    (a: RepoData, b: RepoData) =>
      Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
  );
  return (
    <main className="bg-grey-100 min-h-screen p-9">
      <h1 className="text-black-100 font-bold text-lg pb-3 mb-7 border-b-[#c4c4c4] border-b border-solid">
        {params.owner} Repositories
      </h1>
      <div className="flex gap-[30px] flex-wrap">
        {repositories.map((repo: RepoData) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}
