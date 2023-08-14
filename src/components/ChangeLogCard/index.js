import React from "react";
import { Wrapper, Capsule } from "./element";
import Image from "@theme/IdealImage";
import Calendar from "../../../static/img/calendar.png";
import moment from "moment";

const HelloCard = () => {
  const data = [
    {
      date: "2-02-2023",
      type: "Added",
      description: "PayNet API docs",
      additional: [],
    },
    {
      date: "2-02-2023",
      type: "Launched",
      description: "PayNet API docs",
      additional: [],
    },
    {
      date: "22-02-2023",
      type: "Launched",
      description: "This changelog tracks changes related to bug fixes and enchancements to the PayNet API, and any changes to the Developer Portal, SDKs, functionality and resources. Updates are released periodically.",
      additional: [
        {
          type_additional: "Added",
          list: ["Just in case need bullet", "Another Bullets"],
        },
      ],
    },
  ];

  return (
    <Wrapper>
      {data?.map((value, index) => {
        return (
          <Capsule key={index}>
            <div className="padding-10">
              <Image
                img={Calendar}
                style={{
                  width: "30px",
                  height: "auto",
                }}
              />
              <p>{moment(value.date, "DD-MM-YYYY").format("MMMM YYYY")}</p>
            </div>
            <div className="horizontal-line"></div>
            <div className="padding-10 flex-wrapper">
              <p className="button-changelog">{value.type}</p>
              <p>{value.description}</p>
              {value.additional.length > 0
              ? value.additional.map((additional, index2) => {
                  return (
                    <div className="padding-10 flex-wrapper" key={index2}>
                      <p className="button-changelog">
                        {additional.type_additional}
                      </p>

                      {additional.list.map((list, indexList) => {
                        return (
                          <ul key={indexList}>
                            <li>{list}</li>
                          </ul>
                        );
                      })}
                    </div>
                  );
                })
              : null}
            </div>

     
          </Capsule>
        );
      })}
    </Wrapper>
  );
};

export default HelloCard;
