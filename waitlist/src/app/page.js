import Image from "next/image";
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import MainHead from "@/components/MainHead";
import FormCard from "@/components/FormCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Logo />

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className=" mx-auto text-center">
          <MainHead />
          <FormCard />
        </div>
      </main>
    </div>
  );
}
