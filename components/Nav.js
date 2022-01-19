import Link from "next/link";
export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl ">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              Fran_The_Dev Nerd Blogs
            </span>
          </a>
        </Link>
      </div>
      <div className="absolute bottom-0 right-11 text-lg  font-bold flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="https://github.com/Fran-A-Dev">
          <a>My Github Projects</a>
        </Link>
      </div>
    </header>
  );
}
