export const getAllContributors = async (page: number) => {
  const data = await fetch(
    `https://api.github.com/repos/angular/angular/contributors?sort=updated;page=${page}&amp;per_page=25`
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export const getUsersRepositories = async (username: string, page: number) => {
  const data = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated;page=${page}&amp;per_page=25`
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export const getUserLocation = async (username: string) => {
  const data = await fetch(`https://api.github.com/users/${username}`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
