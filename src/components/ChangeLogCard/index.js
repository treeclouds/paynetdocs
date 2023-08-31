import React from "react";
import { Wrapper, Capsule, ChangelogCardDate, ChangelogCardStatus, ChangelogPill } from "./element";
import Calendar from "@site/static/img/calendar.svg";
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
            <ChangelogCardDate>
              <Calendar />
              <p className="t16 w-max-content">{moment(value.date, "DD-MM-YYYY").format("MMMM YYYY")}</p>
            </ChangelogCardDate>
            <div className="horizontal-line"></div>
            <ChangelogCardStatus>
              <ChangelogPill type={value.type}>{value.type}</ChangelogPill>
              <p className="t14sm-t16lg font-gray-600">{value.description}</p>
              {value.additional.length > 0
              ? value.additional.map((additional, index2) => {
                  return (
                    <ChangelogCardStatus key={index2}>
                      <ChangelogPill type={additional.type_additional}>
                        {additional.type_additional}
                      </ChangelogPill>

                      {additional.list.map((list, indexList) => {
                        return (
                          <ul key={indexList}>
                            <li className="t14sm-t16lg font-gray-500">{list}</li>
                          </ul>
                        );
                      })}
                    </ChangelogCardStatus>
                  );
                })
              : null}
            </ChangelogCardStatus>

     
          </Capsule>
        );
      })}
    </Wrapper>
  );
};

export default HelloCard;