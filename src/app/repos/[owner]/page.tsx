"use client";

import Repository, { RepoData } from "@/components/Repository";
import { useToast } from "@/components/ui/use-toast";
import { getUsersRepositories } from "@/lib/contributors";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Repos() {
  const [repositories, setRepositories] = useState<RepoData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams<{ owner: string }>();
  const { toast } = useToast();

  useEffect(() => {
    getUsersRepositories(params.owner, currentPage)
      .then((repositories) => {
        setRepositories(repositories);
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
        setIsLoading(false);
      });
    setIsLoading(false);
    setIsLoading(true);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsLoading(true);
      const currentRepos = getUsersRepositories(params.owner, currentPage + 1);
      currentRepos
        .then((repos) => {
          setRepositories((prevRepositories) => [
            ...prevRepositories,
            ...repos,
          ]);
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
          });
          setIsLoading(false);
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
        {params.owner} Repositories
      </h1>
      <div className="flex gap-[30px] flex-wrap flex-col">
        {repositories.map((repo: RepoData) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </div>
      {isLoading && <p className="text-center text-lg mt-5">Loading...</p>}
    </main>
  );
}
