import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import "./style.css";

const EnrollSection = () => {
  const [enroll, setEnroll] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    let values = { ...enroll };
    values[id] = value;
    setEnroll(values);
  };

  const enrollData = [
    {
      value: enroll.fullName,
      type: "text",
      onChange,
      id: "fullName",
      placeHolder: "Full Name",
    },
    {
      value: enroll.email,
      type: "text",
      onChange,
      id: "email",
      placeHolder: "Email",
    },
    {
      value: enroll.phoneNumber,
      type: "text",
      onChange,
      id: "phoneNumber",
      placeHolder: "Phone Number",
    },
    {
      value: enroll.address,
      type: "text",
      onChange,
      id: "address",
      placeHolder: "Address",
    },
    {
      value: enroll.city,
      type: "text",
      onChange,
      id: "city",
      placeHolder: "City",
    },
    {
      value: enroll.state,
      type: "text",
      onChange,
      id: "state",
      placeHolder: "State",
    },
    {
      value: enroll.zipCode,
      type: "text",
      onChange,
      id: "zipCode",
      placeHolder: "Zip Code",
    },
  ];

  return (
    <section className="enroll">
      <div className="enroll__content">
        <h1 className="enroll__heading">Enroll Here</h1>
        <div className="enroll__inputs">
          {enrollData.map((res) => (
            <div key={res.id} className="enroll__input">
              <Input
                id={res.id}
                placeholder={res.placeHolder}
                type={res.type}
                value={res.value}
                onChange={res.onChange}
              />
            </div>
          ))}
        </div>
        <div className="enroll__btn">
          <Button text="Submit" />
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
