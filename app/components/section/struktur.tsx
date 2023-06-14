import Card from "../card";

const list = [
  {
    title: "WIDODO",
    jabatan: "DEWAN KOMISARIS",
    img: "/potrait/6.jpg",
  },
  {
    title: "SOEGENG NOTODIHARDJO",
    jabatan: "KOMISARIS",
    img: "/potrait/4.jpg",
  },
  {
    title: "SOENARYO HALIM",
    jabatan: "KOMISARIS",
    img: "/potrait/5.jpg",
  },
  {
    title: "ROBBY SANTOSO",
    jabatan: "DIREKSI",
    img: "/potrait/2.jpg",
  },
  {
    title: "GUNADI",
    img: "/potrait/1.jpg",
  },
  {
    title: "FEBY FERNADY MASURA",
    img: "/potrait/3.jpg",
  },
];
const StrukturOrg = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 p-5">
      {list.map((item, index) => (
        <Card key={index} img={item.img} desc={item.title} />
      ))}
    </div>
  );
};

export default StrukturOrg;
