import React from 'react';

import Modal from './Modal';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortedField: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {

    let itemsList = [];

    // Looping through the vaccines
    for(let [index, value] of this.props.data.entries()) {

      /* Adjusting the style of the phase to the value */
      let trialPhase = "";
      if(value.trialPhase === "Pre-clinical") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            {value.trialPhase}
          </span>
        )
      } else if(value.trialPhase === "Phase 1") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            {value.trialPhase}
          </span>
        )
      } else if(value.trialPhase === "Phase 1/2") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {value.trialPhase}
          </span>
        )
      } else if(value.trialPhase === "Phase 2") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            {value.trialPhase}
          </span>
        )
      } else if(value.trialPhase === "Phase 2/3") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
            {value.trialPhase}
          </span>
        )
      } else if(value.trialPhase === "Phase 3") {
        trialPhase = (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
            {value.trialPhase}
          </span>
        )
      }

      itemsList.push(
        <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {value.candidate}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {value.mechanism}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {trialPhase}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Modal data={value} />
                    </td>
                  </tr>

      );
    }

    return (
      <div className="flex flex-col w-full">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y table-auto divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    >
                      Candidate
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Mechanism
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Trial Phase
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View More</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {itemsList}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;