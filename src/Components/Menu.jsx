import MenuItem from "./MenuItem";

export default function Menu({ albums }) {
  return (
    <div className="absolute flex flex-col gap-2 w-[400px] rounded-lg bg-b1 top-12 z-50">
      {albums.map((album) => (
        <MenuItem album={album} key={album.id} />
      ))}
    </div>
  );
}
