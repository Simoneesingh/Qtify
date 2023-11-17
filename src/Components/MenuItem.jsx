export default function MenuItem({ album }) {
  return (
    <div className="flex  justify-between px-4 py-2 text-white gap-4 border-b border-b2">
      <div className="flex gap-2">
        <img
          className="rounded-lg border-2 border-gray-800 h-12 w-10"
          src={album.image}
        />
        <div className="flex flex-col ">
          <h4 className="text-sm">{album.title}</h4>
          <span className="text-xs text-white/50">Artists</span>
        </div>
      </div>
      <span className="text-xs">{album.follows} Follows</span>
    </div>
  );
}
