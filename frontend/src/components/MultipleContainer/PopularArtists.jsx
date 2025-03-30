import ArtistCard from "../ArtistCard";

function PopularArtists({ musicItems, children }) {
  return (
    <div>
      <div className="text-3xl font-bold">{children}</div>
      <div className="flex justify-center gap-2">
        {/* {Array.from({length: 7}, (_, index)=><ArtistCard />)} */}
        {musicItems.map((item) => (
          <ArtistCard key={item.id} artistInfo={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularArtists;
