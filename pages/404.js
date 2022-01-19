import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl">404</h1>
      <h2 className="text-3xl">
        Darnit, this page does not exist just like my love life 😔
      </h2>
      <p text-xl>
        Redirect to the <Link href="/">Home Page</Link> for more JAMstack
        goodness..
      </p>
    </div>
  );
}
