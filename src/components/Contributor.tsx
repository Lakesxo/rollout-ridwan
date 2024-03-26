import Image from "next/image";
import avatar from "../assests/images/avatar.png";
import map from "../assests/images/map.png";

interface ContributorProps {}

const Contributor: React.FunctionComponent<ContributorProps> = () => {
  return (
    <div className="bg-white w-[320px] p-6 rounded-lg">
      <div className="flex justify-between items-start">
        <div className="flex items-end">
          <div className="bg-avatar-bg p-1">
            <Image src={avatar} alt="avatar" width={60} height={60} />
          </div>
          <p className="text-xs ml-2 text-black-50 font-light">@github</p>
        </div>
        <button>
          <Image src={map} alt="map" width={32} height={32} />
        </button>
      </div>
      <p className="mt-4 text-lg font-bold">balintnemeth</p>
      <p className="text-base font-light text-black-50">123 commits</p>
      <div className="flex justify-center mt-7">
        <button className="text-blue-100 border-2 border-solid border-blue-100 rounded-[5px] px-4 py-2">
          VIEW REPOSITORIES
        </button>
      </div>
    </div>
  );
};

export default Contributor;
