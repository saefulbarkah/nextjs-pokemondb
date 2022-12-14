import Image from "next/image";
import Link from "next/link";
import Layouts from "../components/Layouts";
import Title from "../components/Title";

export default function Custom404() {
  return (
    <>
      <Title name="Page Not Found 404" />
      <Layouts noMarginTop="true">
        <div className="h-screen w-full">
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <Image
              src="/assets/404.png"
              width={250}
              height={250}
              priority
              quality={20}
            />
            <p className="text-2xl">Page not Found</p>
            <Link href="/" className="py-2 px-3 bg-th-red rounded-lg">
              Go Home
            </Link>
          </div>
        </div>
      </Layouts>
    </>
  );
}
