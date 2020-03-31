import React from "react";
import { Component } from "react";

const Avatar = ({ image, firstName, lastName }) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div>
      <img src={image} />
      <h1>{fullName}</h1>
    </div>
  );
};

class Avatar extends Component {
  render() {
    const { image, firstName, lastName } = this.props;
    const fullName = `${firstName} ${lastName}`;
    return (
      <div>
        <img src={image} />
        <h1>
          {fullName}
        </h1>
      </div>
    );
  }
}

export default Avatar;
