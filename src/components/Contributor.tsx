import Image from "next/image";
import map from "../assests/images/map.png";
import Link from "next/link";

export type ContributorData = {
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;
  contributions: number;
};
interface ContributorProps {
  contributor: ContributorData;
}

const Contributor: React.FunctionComponent<ContributorProps> = ({
  contributor,
}) => {
  return (
    <div className="bg-white w-[320px] max-sm:w-full p-6 rounded-lg">
      <div className="flex justify-between items-start">
        <div className="flex items-end">
          <div className="bg-avatar-bg p-1">
            <img
              src={contributor.avatar_url}
              alt="avatar"
              width={60}
              height={60}
            />
          </div>
          <p className="text-xs ml-2 text-black-50 font-light">@github</p>
        </div>
        <Link href={`/location/${contributor.login}`}>
          <button>
            <Image src={map} alt="map" width={32} height={32} />
          </button>
        </Link>
      </div>
      <p className="mt-4 text-lg font-bold">{contributor.login}</p>
      <p className="text-base font-light text-black-50">
        {contributor.contributions} commits
      </p>
      <div className="flex justify-center mt-5">
        <Link href={`/repos/${contributor.login}`}>
          <button className="text-blue-100 border-2 border-solid border-blue-100 rounded-[5px] px-4 py-2 text-sm">
            VIEW REPOSITORIES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contributor;
