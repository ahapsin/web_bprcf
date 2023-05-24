import Image from "next/image";
import IconLogo from "../icon/IconLogo";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex place items-center">
              <div className="p-2">
                <IconLogo width="32px" />
              </div>
              <div className="p-2 flex items-center">
                <strong>PT. BPR CAHAYA FAJAR </strong>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              <strong>Kantor Pusat</strong>
              <p>Jl. Karanggetas No. 142 Cirebon</p>
              <p>
                Telp : 0231 - 248400 <br />
                Email: bprcahayafajar@yahoo.com <br />
                Fax: 0231 - 204520
              </p>
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0 text-gray-400">
            <p>terdaftar dan diawasi oleh: </p>
            <div className="flex gap-4">
              <Image src="/icon/ojk.png" width={120} height={60} alt="ojk" />
              <Image src="/icon/lps.png" width={100} height={100} alt="lps" />
            </div>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
