export default function Card() {
  return (
    <div className="h-[250px] max-w-[280px] cursor-pointer overflow-hidden relative rounded-lg">
      <img className="transition-all ease-in hover:scale-105" />
      <div className="flex justify-start absolute bottom-0 w-full p-2 text-white font-semibold bg-black/50">
        New Album
      </div>
    </div>
  );
}
