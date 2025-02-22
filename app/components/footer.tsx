import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[50vh]">
      <div className="h-full bg-black text-white p-[1%] flex justify-center items-center">
        <div className="h-[80%] w-[30%] p-4">
          <h1 className="text-4xl my-[5%]">Contact</h1>
          <p className="text-xl mb-2">Email: example@example.com</p>
          <p className="text-xl">Phone: +123 456 7890</p>
        </div>

        <div className="h-[80%] w-[30%] border-2 p-4">
          <h1 className="text-4xl mb-4">Socials</h1>
          <ul className="text-xl space-y-2">
            <li>
              <Link href="https://www.linkedin.com/in/yourprofile">LinkedIn</Link>
            </li>
            <li><Link href="https://github.com/yourprofile">GitHub</Link>
            </li>
            <li>
              <Link href="https://twitter.com/yourprofile">Twitter</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/yourprofile">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}