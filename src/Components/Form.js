import React from "react";

function Form() {
  return (
    <div>
      <h1>Interested in joining the Team?</h1>
      <input type="text" name="firstname" placeholder="First Name" />
      <input type="text" name="lastname" placeholder="Last Name" />
      <input type="text" name="Email" placeholder="Email" />
      <input type="submit" value="Submit" />
      <h1>Fill out your information</h1>
      <p>
        Enter you information and one of our staff will contact you for an
        offical tryout
      </p>
    </div>
  );
}

export default Form;
