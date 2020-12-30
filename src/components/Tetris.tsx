import React from "react";
//components
import Display from "./tetris_componets/Display";
import Stage from "./tetris_componets/Stage";
import StartButton from "./tetris_componets/StartButton";

const Tetris: React.FC = () => {
  return (
    <>
      <Stage />
      <aside>
        <div>
          <Display text="scor" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
      <div>tetris component</div>
    </>
  );
};

export default Tetris;
