import { Button, Card } from "antd";
import React from "react";

const BillCard = () => {
  return (
    <Card className="h-fit w-[300px] shadow-2xl" title="Total: 100 ICP">
      <Button shape="round" size="large" type="primary" className="w-full">
        Pay
      </Button>
    </Card>
  );
};

export default BillCard;
