"use client";
import { Badge } from "@nextui-org/react";
import {
  IconBriefcase,
  IconCircleCheck,
  IconEye,
  IconHeart,
  IconHeartHandshake,
  IconHeartPlus,
  IconTargetArrow,
  IconUserHeart,
  IconUsersGroup,
} from "@tabler/icons-react";
import StrukturOrg from "./struktur";
import Title from "../title";
import SingleSec from "./singlesec";

const VisiMisi = () => {
  const misions = [
    "Memberikan pelayanan perbankan terbaik bagi kepuasan dan loyalitas nasabah.",
    "Mewujudkan tata kelola BPR yang baik untuk meningkatkan produktifitas dan pertumbuhan BPR.",
    "Membentuk sumber daya manusia yang profesional dan berintegritas tinggi",
    "Mensejahterakan dan memberikan nilai tambah kepada seluruh stakeholders.",
    "Memberikan manfaat yang baik bagi masyarakat sekitar.",
  ];
  const value = [
    "Love",
    "Integrity",
    "Positive",
    "professionalism",
    "Team Work",
    "Customer Focus",
  ];
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <div>
                <IconEye color="grey" />
                <h1 className="bg-gradient-to-r from-sky-900 via-red-500 to-yellow-600  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Visi Perusahaan
                </h1>

                <p className="mt-4 text-gray-600">
                  Menjadi BPR Terbaik dan Terpercaya bagi Masyarakat Cirebon
                </p>
              </div>
              <div className="pt-5">
                <IconHeart color="grey" />
                <h1 className="bg-gradient-to-r from-sky-900 via-red-500 to-yellow-600  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Nilai Perusahaan
                </h1>

                <div className="mt-4 max-w-full text-gray-600 gap-1">
                  <Badge color="error">
                    <IconHeart size={16} />
                    Love
                  </Badge>
                  <Badge color="primary">
                    <IconHeartHandshake size={16} />
                    Integrity
                  </Badge>
                  <Badge color="secondary">
                    <IconHeartPlus size={16} />
                    Positive
                  </Badge>
                  <Badge color="primary">
                    <IconBriefcase size={16} />
                    Professionalism
                  </Badge>
                  <Badge color="primary">
                    <IconUsersGroup size={16} />
                    Team Work
                  </Badge>
                  <Badge color="error">
                    <IconUserHeart size={16} />
                    Customer Focus
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <IconTargetArrow color="grey" />
              <h1 className="bg-gradient-to-r from-sky-900 via-red-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Misi Perusahaan
              </h1>
              <div className="block rounded-xl border p-2 gap-2 shadow-sm border-gray-200">
                {misions.map((item, index) => (
                  <div className="flex gap-2 py-2" key={index}>
                    <IconCircleCheck color="green" />
                    <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Title heading="Dewan Komisaris" subtitle="PT. BPR Cahaya Fajar" />
      <StrukturOrg />
      <SingleSec />
    </>
  );
};

export default VisiMisi;
