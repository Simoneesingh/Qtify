import home from "../asset/Home.jpg";

export default function HomeBanner() {
  return (
    <div className="bg-black relative bg-cover flex item-center justify-center">
      <div className="h-72 lg:w-[50%]  lg:h-72">
        <img src={home} alt="banner" className="h-100% w-100%" />
      </div>
    </div>
  );
}
