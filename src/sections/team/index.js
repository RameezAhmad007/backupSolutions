import React from "react";
import team1 from "../../img/team/client.jpeg";
import team2 from "../../img/team/client2.jpeg";
import "./style.css";

const teamData = [
  {
    id: "0",
    pic: team1,
    name: "Abdoulaye Diallo",
    desc: "President & Founder of Backup Solutions",
  },
  {
    id: "1",
    pic: team2,
    name: "Elliot Dcruz",
    desc: "Vice President Sales Channel Operator",
  },
];

const TeamSection = () => {
  return (
    <section className="team">
      <div className="team__content">
        <h1 className="team__heading">Team</h1>
        <div className="team__card-container">
          {teamData.map((res) => (
            <div key={res.id} className="card-container__card">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={res.pic}
                  alt="pic not found"
                />
              </div>
              <div className="card__content">
                <p className="card__heading">{res.name}</p>
                <p className="card__desc">{res.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
