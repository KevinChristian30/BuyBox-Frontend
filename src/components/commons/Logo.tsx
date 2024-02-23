import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image src={'/BuyBoxLogo.svg'} height={0} width={100} alt="logo"/>
  );
};

export default Logo;
