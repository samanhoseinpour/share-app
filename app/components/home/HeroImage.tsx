import Image from "next/image";

const HeroImage = () => {
  return (
    <section className="mt-16 flow-root sm:mt-24">
      <div className="-m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4 ">
        <Image
          alt="Bento Grid Showing Apps"
          src="https://cdn.dribbble.com/userupload/16803653/file/original-003b0d48c296ce12d521b99e8a86b380.jpg"
          width={2432}
          height={1442}
          className="rounded-md ring-1 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroImage;
