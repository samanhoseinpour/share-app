import Link from "next/link";

const HeroTitle = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Data to enrich your online business
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/apps"
            className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Explore Apps
          </Link>
          <Link
            href="/community"
            className="text-sm text-gray-900 border-1 border-indigo-600 px-3.5 py-2.5 rounded-full"
          >
            Join Our Community <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroTitle;
