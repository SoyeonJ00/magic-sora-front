import React from "react";
import Banner2 from "../components/banner/Banner2";
import BoardContent from "../components/board/BoardContent";

function Hot() {
  return (
    <div>
      <Banner2 width={270} height={"100vh"} />
      {/* BoardContent props로 전달? */}
      <BoardContent board_name={"핫한 고민"} />
    </div>
  );
}

export default Hot;
