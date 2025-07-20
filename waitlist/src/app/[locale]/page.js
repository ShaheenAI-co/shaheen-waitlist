import Image from "next/image";
import Form from "@/components/Form";
import MainHead from "@/components/MainHead";
import Header from "@/components/Header";
import FormCard from "@/components/FormCard";
import BluredCircle from "@/components/BluredCircle";

export default function Home() {
  return (
    <div className="min-h-screen pb-4 bg-black flex flex-col  justify-center h-screen overflow-hidden overflow-x-hidden">
      <BluredCircle />

      <Header />
      <main className="flex-1 flex items-center z-10 justify-center px-6 ">
        <div className=" mx-auto text-center">
          <MainHead />
          <FormCard />
        </div>
      </main>
    </div>
  );
}
