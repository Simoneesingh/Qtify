export default function HomeBanner() {
  return (
    <div className="bg-b1 relative bg-cover flex items-center justify-center">
      <div className=" flex gap-8 items-center justify-center h-72 lg:w-[50%]  lg:h-72">
        <h1 className="font-bold text-white text-3xl text-center leading-snug">
          100 Thousand Songs,ad-free
          <br />
          Over Thousands podcast episodes
        </h1>
        <img src="./hero.png" alt="banner" className="h-100% w-100%" />
      </div>
    </div>
  );
}
