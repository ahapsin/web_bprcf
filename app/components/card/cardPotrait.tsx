import { Card, Col, Text } from "@nextui-org/react";

type propCardPotrait = {
  img: string;
};

const CardPotrait = (prop: propCardPotrait) => {
  return (
    <Card css={{ w: "100%", h: "216px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={prop.img}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
    </Card>
  );
};

export default CardPotrait;
