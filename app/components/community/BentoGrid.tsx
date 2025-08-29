import Image from "next/image";

interface BentoGridProps {
  grid: string;
  subheading: string;
  heading: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgSize: string;
  imgStyle: string;
}

const BentoGrid = ({
  grid,
  subheading,
  heading,
  description,
  imgSrc,
  imgAlt,
  imgSize,
  imgStyle,
}: BentoGridProps) => {
  return (
    <div className={`relative ${grid}`}>
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
        <div className="relative aspect-video">
          <Image
            alt={imgAlt}
            src={imgSrc}
            fill
            sizes={imgSize}
            className={imgStyle}
          />
        </div>
        <div className="p-10 pt-4">
          <h3 className="text-sm/4 font-semibold text-indigo-600">
            {subheading}
          </h3>
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
            {heading}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600">{description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
};

export default BentoGrid;
