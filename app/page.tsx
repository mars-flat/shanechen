import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="h-[70vh] bg-gray-200 font-inter flex justify-center items-center">
        <div className="w-[50%] h-[50%] border-2">
          <p className="text-xl mb-[1%]">Nice to meet you! I'm</p>
          <p className="text-6xl font-bold mb-[2%]">Shane Chen.</p>
          <p className="text-lg">I'm a <strong>computer science</strong> student at the <em>University of Waterloo</em>, class of 2029.</p>
          <p className="text-lg mb-[2%]">You may be interested in my resume or my projects, which I have on this site.</p>
          <p className="text-lg">I'm currently looking for <strong>summer 2025</strong> internships. Let's have a chat!</p>
        </div>
        <div className="w-[30%] border-2">
          Hello
        </div>
      </div>
      <div className="h-[80vh] bg-gradient-to-b from-gray-200 to-green-900"></div>
      <div className="h-[100vh] bg-green-900"></div>
      <Footer />
    </div>
  );
}
