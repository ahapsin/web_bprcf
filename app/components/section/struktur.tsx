import Card from "../card";

const list = [
  {
    title: "nama orang",
    img: "/potrait/5.jpg",
  },
  {
    title: "nama",
    img: "/potrait/4.jpg",
  },
  {
    title: "nama",
    img: "/potrait/3.jpg",
  },
  {
    title: "nama",
    img: "/potrait/1.jpg",
  },
  {
    title: "nama",
    img: "/potrait/2.jpg",
  },
  {
    title: "nama",
    img: "/potrait/6.jpg",
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
