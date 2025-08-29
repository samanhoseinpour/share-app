import Image from "next/image";

import { BentoGrid } from "../components";

const CommunityBentoGridData = [
  {
    id: 1,
    grid: "lg:col-span-3",
    subheading: "Collaboration",
    heading: "Seamless file sharing",
    description:
      "Upload and share files instantly with your team or community. Access your content anywhere, anytime.",
    imgSrc:
      "https://tailwindui.com/plus-assets/img/component-images/bento-01-performance.png",
    imgAlt: "File sharing",
    imgSize: "(min-width: 1024px) 50vw, 100vw",
    imgStyle: "object-cover object-left",
  },
  {
    id: 2,
    grid: "lg:col-span-3",
    subheading: "Releases",
    heading: "Control your access",
    description:
      "Manage who can view, edit, or download your shared files with granular permissions.",
    imgSrc:
      "https://tailwindui.com/plus-assets/img/component-images/bento-01-releases.png",
    imgAlt: "Access control",
    imgSize: "(min-width: 1024px) 50vw, 100vw",
    imgStyle: "object-cover object-left lg:object-right",
  },
  {
    id: 3,
    grid: "lg:col-span-2",
    subheading: "Speed",
    heading: "Instant previews",
    description:
      "View images, docs, and videos right in the browser without downloading.",
    imgSrc:
      "https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png",
    imgAlt: "Previews",
    imgSize: "(min-width: 1024px) 33vw, 100vw",
    imgStyle: "object-cover object-left lg:object-right",
  },
  {
    id: 4,
    grid: "lg:col-span-2",
    subheading: "Integrations",
    heading: "Connect your apps",
    description:
      "Easily link with Google Drive, Dropbox, and Slack to streamline collaboration.",
    imgSrc:
      "https://tailwindui.com/plus-assets/img/component-images/bento-01-integrations.png",
    imgAlt: "Integrations",
    imgSize: "(min-width: 1024px) 33vw, 100vw",
    imgStyle: "object-cover",
  },
  {
    id: 5,
    grid: "lg:col-span-2",
    subheading: "Network",
    heading: "Global delivery",
    description:
      "Share content worldwide through a secure, distributed CDN for maximum reliability.",
    imgSrc:
      "https://tailwindui.com/plus-assets/img/component-images/bento-01-network.png",
    imgAlt: "Global CDN",
    imgSize: "(min-width: 1024px) 33vw, 100vw",
    imgStyle: "object-cover",
  },
];

const CommunityPage = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:container lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          Deploy faster
        </h2>
        <h1 className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {CommunityBentoGridData.map((data) => (
            <BentoGrid
              key={data.id}
              grid={data.grid}
              subheading={data.subheading}
              heading={data.heading}
              description={data.description}
              imgSrc={data.imgSrc}
              imgAlt={data.imgAlt}
              imgSize={data.imgSrc}
              imgStyle={data.imgStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;
