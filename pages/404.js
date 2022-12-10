import Image from "next/image";
import { useRouter } from "next/router";
import Layouts from "../components/Layouts";
import Title from "../components/Title";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Title name="Page Not Found 404" />
      <Layouts className="mt-0 mb-0 my-0">
        <div className="h-screen">
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <Image src="/assets/404.png" width={250} height={250} />
            <p className="text-2xl">Page not Found</p>
            <button
              onClick={() => router.back()}
              className="py-2 px-3 bg-th-red rounded-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layouts>
    </>
  );
}
