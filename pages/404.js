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
    <div className="not-found">
      <h1>404</h1>
      <h2>Darnit, this page does not exist just like my love life 😔</h2>
      <p>
        Redirect to the <Link href="/">Home Page</Link> for more JAMstack
        goodness..
      </p>
    </div>
  );
}
