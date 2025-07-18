import Image from "next/image";
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import MainHead from "@/components/MainHead";
import FormCard from "@/components/FormCard";
import BluredCircle from "@/components/BluredCircle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export default function Home() {
  return (
    <div className="min-h-screen py-6 bg-black flex flex-col items-center justify-center h-screen overflow-hidden overflow-x-hidden">
      <BluredCircle />
      <Logo />

      <main className="flex-1 flex items-center z-10 justify-center px-6 ">
        <div className=" mx-auto text-center">
          <MainHead />
          <FormCard />
        </div>
      </main>
    </div>
  );
}
