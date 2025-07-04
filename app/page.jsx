import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="min-h-dvh bg-black/60 flex items-center justify-center ">
      <div className="space-y-10 text-white md:px-20 p-4 lg:w-3/4 ">
      <h1 className="md:text-5xl text-3xl text-center font-black">
        Home of all Recipes. Diversity in Delicacies.
      </h1>
      <p className="md:text-lg text-lg text-center">
        Here at 
        <span className="md:text-2xl text-blue-600 font-bold">KookBook</span>,
       we specialize in the collection of
      recipes, instructions, and information about the preparation and
      serving of foods. It includes a variety of appetizers, salads, main 
      courses, side dishes and deserts
      </p>
      <div className="flex justify-center gap-4 md:gap-10 max-md:flex-col">
        <Link 
        href={"/recipes"} 
        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex
        items-center justify-center gap-2 text-xl hover:bg-blue-700 transition-all"
        >
          Explore Recipes
          <MdArrowOutward />
        </Link>
        <Link 
        href={"/about"}
        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold flex
        items-center justify-center gap-2 text-xl hover:bg-blue-700 transition-all"
        >
          Learn More
        </Link>
      </div>
      </div>
      </section>

      <section className="bg-gray-100 min-h-[70vh] p-10">
        <h1>Why Choose Us</h1>
        <div className="lg:px-5 p-3 grid lg:grid-cols-3 md:grid-cols-2">
          <div>
            
          </div>
        </div>
      </section>
    </main>
  )
}
