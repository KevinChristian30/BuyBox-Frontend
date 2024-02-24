import { Card } from "antd";
import React from "react";

export enum ChatBubbleAlignment {
  LEFT,
  RIGHT,
}

export interface IChatBubbleProps {
  alignment: ChatBubbleAlignment;
  text: string;
}

const ChatBubble = (props: IChatBubbleProps) => {
  const { alignment, text } = props;

  if (alignment === ChatBubbleAlignment.LEFT) {
    return (
      <div className="w-full flex my-2">
        <p className="max-w-[70%] w-fit bg-gray-200 p-2 rounded-xl">{text}</p>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-end self-end my-2  text-white">
        <p className="max-w-[70%] bg-primary p-2 rounded-xl">{text}</p>
      </div>
    );
  }
};

export default ChatBubble;
