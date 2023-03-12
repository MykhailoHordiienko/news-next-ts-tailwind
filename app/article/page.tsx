"use client";
import { notFound } from "next/navigation";
import defaultImg from "../../public/defaultImg.jpeg";
import Image from "next/image";

type Props = {
  searchParams?: DataEntry;
};

const ArticlePage = ({ searchParams }: Props) => {
  console.log(searchParams);
  //   if (
  //     (searchParams && Object.entries(searchParams).length) === 0 ||
  //     !searchParams
  //   ) {
  //     return notFound();
  //   }

  //   const { description, image, title, published_at, source, author }: DataEntry =
  //     searchParams;
  //   return (
  //     <section>
  //       <article className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
  //         {!image ? (
  //           <Image
  //             className="max-w-xs mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
  //             alt="image"
  //             src={defaultImg}
  //           />
  //         ) : (
  //           <img
  //             className="max-w-xs mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
  //             src={image}
  //             alt={title}
  //           />
  //         )}

  //         <div className="px-10">
  //           <h1 className="headerTitle px-0 pb-2">{title}</h1>
  //           <div className="flex space-x-4 divide-x-2">
  //             <h2 className="font-bold">By : {author || "Unknown"}</h2>
  //             <h2 className="font-bold pl-4">Source : {source || "Unknown"}</h2>
  //             <p className="pl-4">{published_at}</p>
  //           </div>
  //           <p className="pt-4">{description}</p>
  //         </div>
  //       </article>
  //     </section>
  //   );

  return <div>{Object.entries(searchParams!).length}!!!</div>;
};

export default ArticlePage;

// export async function getServerSideProps(context) {
//   return {
//     props: { searchParams }, // will be passed to the page component as props
//   };
// }
