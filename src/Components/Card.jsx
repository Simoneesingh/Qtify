import Tooltip from "@mui/material/Tooltip";

export default function SongCard({ album }) {
  return (
    <>
      {album.songs ? (
        <Tooltip
          title={`${album.songs.length} songs`}
          placement="top"
          arrow
          // arrowTransform="translateY(-50%)"
        >
          <div className="flex flex-col gap-2 min-w-[8rem] max-w-[12rem]  p-4 cursor-pointer">
            <div className="relative w-full h-50 group overflow-hidden rounded-lg ">
              <img src={album.image} alt={album.title} />
              <div className="absolute py-3 px-1 bg-white/40 bottom-0 w-full z-10 ">
                <span className="text-white text-sm px-1 py-1 bg-b1 rounded-lg">
                  {`${album.follows} follows`}
                </span>
              </div>
            </div>
            <div className="text-white px-1 text-sm font-medium">
              {album.title}
            </div>
          </div>
        </Tooltip>
      ) : (
        <div className="flex flex-col gap-2 min-w-[8rem] max-w-[12rem]  p-4 cursor-pointer">
          <div className="relative w-full h-50 group overflow-hidden rounded-lg ">
            <img src={album.image} alt={album.title} />
            <div className="absolute py-3 px-1 bg-white/40 bottom-0 w-full z-10 ">
              <span className="text-white text-sm px-1 py-1 bg-b1 rounded-lg">
                {`${album.likes} likes`}
              </span>
            </div>
          </div>
          <div className="text-white px-1 text-sm font-medium">
            {album.title}
          </div>
        </div>
      )}
    </>
  );
}
