export type RepoData = {
  id: number;
  name: string;
  fork: boolean;
  stargazers_count: number;
  updated_at: string;
};

interface RepositoryProps {
  repo: RepoData;
}

const Repository: React.FunctionComponent<RepositoryProps> = ({ repo }) => {
  return (
    <div className="bg-white w-[500px] p-6 rounded-lg">
      <div>
        <p className="mt-4 text-lg font-bold">Name: {repo.name}</p>
        <p className="text-base font-light text-black-50">
          {repo.stargazers_count} stars
        </p>
      </div>
      <div>
        <p className="mt-4 text-lg font-bold">
          {repo.fork ? "Forked" : "Not Forked"}
        </p>
        <p className="text-base font-light text-black-50">
          Last updated: {new Date(repo.updated_at).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default Repository;
