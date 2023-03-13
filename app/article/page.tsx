"use client";
import { notFound, useSearchParams } from "next/navigation";
import defaultImg from "../../public/defaultImg.jpeg";
import Image from "next/image";
import LiveTimeAgo from "../../components/LiveTimeAgo/LiveTimeAgo";

function ArticlePage() {
  const router = useSearchParams();
  let searchParams!: DataEntry;
  for (const [key, value] of router.entries()) {
    searchParams = { ...searchParams, [key]: value };
  }

  if (
    (searchParams && Object.entries(searchParams).length) === 0 ||
    !searchParams
  ) {
    return notFound();
  }

  const { description, image, title, published_at, source, author }: DataEntry =
    searchParams;

  const liveTime = new Date(published_at.replace(" ", "+")).getTime();

  return (
    <section>
      <article className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {!image ? (
          <Image
            className="max-w-xs mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            alt="image"
            src={defaultImg}
          />
        ) : (
          <img
            className="max-w-xs mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={image}
            alt={title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 pb-2">{title}</h1>
          <div className="flex space-x-4 divide-x-2">
            <h2 className="font-bold">By : {author || "Unknown"}</h2>
            <h2 className="font-bold pl-4">Source : {source || "Unknown"}</h2>
            <p className="pl-4">
              <LiveTimeAgo time={liveTime} />
            </p>
          </div>
          <p className="pt-4">{description}</p>
        </div>
      </article>
    </section>
  );
}

export default ArticlePage;
