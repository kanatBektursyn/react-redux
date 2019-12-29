import React from "react";
import classNames from "classnames";

import { Time, IconReaded } from "components";

import "./DialogItem.scss";

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    //makeAvatar
  }
};

const DialogItem = ({ user, message, online, unreaded }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.avatar} avatar`} /> */}
        {getAvatar(
          "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
        )}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Kanat Bektursyn</b>
          <span>
            {/* <Time date={new Date()}></Time> */}
            13:01
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>
            We are deeply concerned in your ability to continue improving your
            own level of competition
          </p>

          <IconReaded isMe={true} isReaded={true}></IconReaded>

          {unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unreaded > 9 ? "+9" : unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
