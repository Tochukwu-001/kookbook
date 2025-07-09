<<<<<<< HEAD
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
export default function home() {
  const chooseus = [
    {
      image: "/bg.jpg",
      title: "Expert Culinary culture",
      desc: "....",
    },
    {
      image: "/bg.jpg",
      title: "Nutritional Insights",
      desc: "....",
    },
    {
      image: "/bg.jpg",
      title: "Cultural Insights",
      desc: "....",
=======
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  const chooseUs = [
    {
      image: "/c1.jpg",
      title: "Expert Culinary Culture",
      desc: "Choose us for our expertise, unique perspective, commitment to quality and continous improvement. We showcase a strong passion for food by staying current with culinary trends and techniques.",
    },
    {
      image: "/c2.jpg",
      title: "Nutritional Insights",
      desc: "We analyze the meals of our esteemed clients, providing detailed information about their nutritional content. Our core value is to keep you healthy while providing the best of kitchen services",
    },
    {
      image: "/c3.jpg",
      title: "Cultural Insights",
      desc: "We inspire our clients to share their various traditional and native recipes and perspective on foods and cooking adding depth and richness to your kitchen desires.",
>>>>>>> 97fd02b3d402c4a239c8e12c8d9d9b6c78e995a7
    },
  ];
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="min-h-dvh bg-black/60 flex items-center justify-center">
        <div className="space-y-10 text-white md:px-20 p-4 lg:w-3/4">
<<<<<<< HEAD
          <h1 className="text-3xl text-center font-black md:text-5xl ">
            Home of all Recipies. Diversity in Delicacies.
          </h1>
          <p>
            Here at{" "}
            <span className=" text-blue-600 font-bold text-center md:text-2xl">
              KooKBook
            </span>
            , we specialize in the collection of recipies, instructions,and
            information about the preparation and serving of food. It includes a
            variety of appetizers,salads,main courses,side dishes and deserts
          </p>
          <div className="flex justify-center gap-4 md:gap-10 max-md:flex-col">
            <Link
              href={"/recipies"}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex
            items-center justify-center gap-2 text-base md:text-xl hover:bg-blue-700
            transition-all"
            >
              Explore Recipies
=======
          <h1 className="md:text-5xl text-3xl text-center font-black">
            Home of all Recipes. Diversity in Delicacies.
          </h1>
          <p className="md:text-2xl text-lg text-center">
            Here at
            <span className="md:text-2xl text-blue-600 font-bold">
              {" "}
              KookBook
            </span>
            , we specialize in the collection of recipes, instructions, and
            information about the preparation and serving of foods. It includes
            a variety of appetizers, salads, main courses, side dishes and
            deserts
          </p>
          <div className="flex justify-center gap-4 md:gap-10 max-md:flex-col">
            <Link
              href={"/recipes"}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 text-base md:text-xl hover:bg-blue-700 transition-all"
            >
              Explore Recipes
>>>>>>> 97fd02b3d402c4a239c8e12c8d9d9b6c78e995a7
              <MdOutlineArrowOutward />
            </Link>
            <Link
              href={"/about"}
<<<<<<< HEAD
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex
            items-center justify-center gap-2 text-base md:text-xl hover:bg-blue-700
            transition-all"
            >
              Learn more
=======
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 text-base md:text-xl hover:bg-blue-700 transition-all"
            >
              Learn More
>>>>>>> 97fd02b3d402c4a239c8e12c8d9d9b6c78e995a7
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 min-h-[70vh] p-3 md:p-10">
<<<<<<< HEAD
        <h1 className="text-center text-3xl md:text-5xl text-blue-600 font-bold mb-5">
          Why Choose Us
        </h1>
        <div className="lg:px-5 p-3 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {chooseus.map((reason, i) => (
            <div key={i} className="space-y-3">
              <Image
                src={reason.image}
                alt="img"
                width={800}
                height={800}
                className=""
              />
              <h2 className="text-center font-bold text-gray-700 text-xl">
                {reason.title}
              </h2>
=======
        <h1 className="text-center text-3xl md:text-5xl text-blue-600 font-bold mb-5">Why Choose Us</h1>
        <div className="lg:px-5 p-3 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {chooseUs.map((reason, i) => (
            <div key={i} className="space-y-3">
              <Image alt={reason.title.slice(0,4)} src={reason.image} width={800} height={800} className="" />
              <h2 className="text-center font-bold text-gray-700 text-xl">{reason.title}</h2>
>>>>>>> 97fd02b3d402c4a239c8e12c8d9d9b6c78e995a7
              <p className="text-sm text-gray-600 text-center">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
