export const getAllContributors = async () => {
  const data = await fetch(
    "https://api.github.com/repos/angular/angular/contributors?page=1&amp;per_page=25"
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export const getUsersRepositories = async (username: string) => {
  const data = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
