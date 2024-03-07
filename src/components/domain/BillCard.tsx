import { Button, Card } from "antd";
import React from "react";

interface IBillCardProps {
  total: number;
}

const BillCard = (props: IBillCardProps) => {
  const { total } = props;

  return (
    <Card className="h-fit w-[300px] shadow-2xl" title={`Total: ${total} ICP`}>
      <Button shape="round" size="large" type="primary" className="w-full">
        Checkout
      </Button>
    </Card>
  );
};

export default BillCard;
