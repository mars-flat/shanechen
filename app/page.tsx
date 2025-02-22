import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="h-[70vh] bg-gray-200"></div>
      <div className="h-[80vh] bg-gradient-to-b from-gray-200 to-green-700"></div>
      <div className="h-[100vh] bg-green-700"></div>
      <Footer />
    </div>
  );
}
