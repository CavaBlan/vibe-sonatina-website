function PlayerNormal() {
  // Head (back tital )
  // Imformation (img name)
  // Progress Line
  // Button (prev pause/play next)
  // Favorite

  return (
    <div className="h-120 w-80 m-5 border rounded-3xl">
      <div className="h-10 mx-3 border-b-1 flex items-center">
        <div className="w-1/3 text-left">Back</div>
        <div className="w-1/3 text-center">Serenade</div>
        <div className="w-1/3 text-right">Like</div>
      </div>
      <div className="h-4/7 border-b-1 flex flex-col justify-center items-center gap-3">
        <div className="h-40 w-40 m-2 border">IMG</div>
        <div>Serenade</div>
        <div>LuLu</div>
      </div>
      <div className="h-10 border-b-1 flex justify-center items-center">
        <div className="h-2 w-8/10 border rounded-3xl">
          <div className="h-full w-3/10 bg-black rounded-3xl"></div>
        </div>
      </div>
      <div className="h-20 border-b-1 flex justify-center items-center gap-7">
        <button className="h-13 w-13 border rounded-full">&larr;</button>
        <button className="h-15 w-15 border rounded-full">||</button>
        <button className="h-13 w-13 border rounded-full">&rarr;</button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default PlayerNormal;
