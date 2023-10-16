import React from "react";

function ContactUs({ data }) {
  return (
    <div className="center">
      <p>{data.heading}</p>
      <p>{data.subHeading}</p>
    </div>
  );
}
export default ContactUs;
