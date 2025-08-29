import Image from "next/image";

const HeroImage = () => {
  return (
    <section className="mt-16 flow-root sm:mt-24">
      <div className="-m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4 ">
        <Image
          alt="Bento Grid Showing Apps"
          src="https://cdn.dribbble.com/userupload/15526232/file/original-acb3c622ef876668a94f42bebc2de2d4.jpg?resize=752x&vertical=center"
          width={2432}
          height={1442}
          className="rounded-md ring-1 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroImage;
