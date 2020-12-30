import React from "react";

interface DisplayProps {
  text: string;
}
const Display: React.FC<DisplayProps> = (props) => {
  //props = gameover,text
  return (
    <>
      <div>Display component</div>
    </>
  );
};

export default Display;
