"use client";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

type Props = {
  time: number;
};

const LiveTimeAgo = ({ time }: Props) => {
  return (
    <>
      <ReactTimeAgo
        date={time}
        locale="en-US"
      />
    </>
  );
};

export default LiveTimeAgo;
