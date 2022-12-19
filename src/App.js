// import logo from "./logo.svg";

// THIS IS THE APP WHERE WE IMPORT OUR DATA OR CONTENT
import "./App.css";
import React from "react";
import BasicInfo from "./component/basicInfo";

class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        number: "",
        dob: "",
      },
      people: [
        {
          name: "Ray T",
          number: "123-456-7890",
          dob: "07/12/01",
        },
        {
          name: "Los L",
          number: "132-456-7890",
          dob: "02/23/97",
        },
        {
          name: "Mariah T",
          number: "321-456-7890",
          dob: "05/11/98",
        },
      ],
    };
  }
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    });
  }
}

//EASY Challenge CREATE Constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  // //HARD CHALLENGE

  render() {
    return (
      <>
        <div>
          <BasicInfo />
        </div>
      </>
    );
  }
}

export default App1;
