import Image from "next/image";

type cardProps = {
  img?: string;
  title?: string;
  subtitle?: string;
  desc?: string;
  className?: string;
};
const Card = (props: cardProps) => {
  return (
    <a href="#" className={`${props.className} group relative block bg-black`}>
      <Image
        alt="Developer"
        src={`${props.img}`}
        width={2250}
        height={1390}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 h-[32rem] md:h-full">
        <p className="text-sm font-medium uppercase tracking-widest text-yellow-500">
          {props.subtitle}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          {props.title}
        </p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{props.desc}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
