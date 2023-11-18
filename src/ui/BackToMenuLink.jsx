import React from "react";
import LinkButton from "./Link";

function BackToMenuLink() {
  return (
    <LinkButton type="empty" to="/menu" className=" ">
      <span className="text-base font-bold flex gap-3 hover:text-accent200">
        <strong>&larr;</strong>
        Back to menu
      </span>
    </LinkButton>
  );
}

export default BackToMenuLink;
