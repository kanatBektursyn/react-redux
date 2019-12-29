import React from "react";

import { DialogItem } from "components";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <DialogItem
        user={{ fullname: "Kanat Bektursyn", isOnline: true }}
        unreaded={0}
      />
      <DialogItem
        user={{ fullname: "Kanat Bektursyn", isOnline: true }}
        unreaded={1}
      />
      <DialogItem
        user={{ fullname: "Kanat Bektursyn", isOnline: true }}
        unreaded={0}
      />
      {/* <Dialogs
        items={[
          {
            user: { fullname: "Kanat Bektursyn", avatar: null },
            message: {
              text:
                "Каков смысл жизни? Какой в ней толк? Любить ли отчизну, взвалив на себя её долг?",
              isReaded: false,
              created_at: new Date()
            }
          }
        ]}
      /> */}
      {/* <Message
        avatar="https://cdn.dtcn.com/dt/dt-logo-small.png"
        text="Source is built for use in small, low-traffic applications. For production uses, we recommend the official Unsplash API which has more robust features and supports high-traffic use cases.

"
        date={new Date()}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            filename: "image2.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]}
      ></Message>
      <Message
        avatar="https://i5.walmartimages.com/asr/03762e06-b778-4b36-9a79-96bf72272ebd_1.aee7e6d35445c86eb188d83de1026a37.jpeg"
        text="Hello back, My Friend!"
        date={new Date()}
        isMe={true}
        isReaded={true}
      ></Message>
      <Message
        avatar="https://cdn.dtcn.com/dt/dt-logo-small.png"
        isTyping
      ></Message>{" "}
      <Message
        avatar="https://cdn.dtcn.com/dt/dt-logo-small.png"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          }
        ]}
      ></Message> */}
    </section>
  );
};

export default Home;
