"use client";

import Contributor, { ContributorData } from "@/components/Contributor";
import { getAllContributors } from "@/lib/contributors";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const [contributors, setContributors] = useState<ContributorData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    getAllContributors(currentPage)
      .then((contributors) => {
        setContributors(
          contributors.sort(
            (a: ContributorData, b: ContributorData) =>
              b.contributions - a.contributions
          )
        );
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error,
        });
      });
    setIsLoading(false);
    setIsLoading(true);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsLoading(true);
      const currentcontributors = getAllContributors(currentPage + 1);
      currentcontributors
        .then((contributors) => {
          contributors.sort(
            (a: ContributorData, b: ContributorData) =>
              b.contributions - a.contributions
          );
          setContributors((prevContributors) => [
            ...prevContributors,
            ...contributors,
          ]);
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error,
          });
        });
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

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
      {isLoading && <p className="text-center text-lg mt-5">Loading...</p>}
    </main>
  );
}
