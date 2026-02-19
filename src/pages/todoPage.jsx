import { Navbar } from "../components/templates/navbar";
import { Form } from "../components/molecules/form";
import { Info } from "../components/molecules/info";
import { Todo } from "../components/organism/todo";
import rocket from "../assets/rocket.png";

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <Navbar />
      <div className="flex justify-center items-center bg-(--base-gray-200) dark:bg-[#0D0D0D] min-w-full h-52 gap-2">
        <img src={rocket} alt="Rocket" className="h-10" />
        <h1 className="text-5xl font-extrabold text-(--blue)">
          to<span className="text-(--purple-dark)">do</span>
        </h1>
      </div>

      <div>
        <div className="absolute top-46 w-full flex justify-center px-4">
          <Form className="max-w-4xl w-full" />
        </div>

        <div className="flex justify-center mt-20">
          <div className="max-w-4xl w-full">
            <div className="px-3 md:px-0">
              <Info />
            </div>
            <div className="mt-8 mb-10 px-3 md:px-0">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
