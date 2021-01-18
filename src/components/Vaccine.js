import React from "react";
import axios from "axios";
import Table from "./Table";

class Vaccine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: [],
    };
  }

  componentDidMount() {
    axios.get("https://disease.sh/v3/covid-19/vaccine").then((res) => {
      const vaccines = res.data.data;
      this.setState({ vaccines });
    });
  }

  render() {
    return (
      <div className="bg-gray-100">
        <div className="container p-10">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-10">
            Vaccines Dashboard
          </h2>
          <Table data={this.state.vaccines} />
        </div>
      </div>
    );
  }
}

export default Vaccine;
