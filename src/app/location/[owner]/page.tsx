import { getUserLocation } from "@/lib/contributors";

export default async function Map({ params }: { params: { owner: string } }) {
  const userLocation = await getUserLocation(params.owner);
  return (
    <main className="bg-grey-100 min-h-screen p-9">
      {userLocation.location ? (
        <>{userLocation.location}</>
      ) : (
        "No user location"
      )}
    </main>
  );
}
