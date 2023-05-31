"use client";
import { Image, Link } from "@nextui-org/react";
import Card from "../components/card";
import VisiMisi from "../components/section/visimisi";

const Page = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10 gap-10">
        <Link href="http://bprcahayafajar.co.id:82" isExternal target="blank">
          <div>
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-centerbg-base-200">
                <Image src="./internal.png" alt="internal" />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="http://bprcahayafajar.co.id:83/kpi_app/"
          isExternal
          target="blank"
        >
          <div>
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-center bg-base-200">
                <Image src="./kpi.png" alt="kpi" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Page;
