import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    document.querySelector("body").classList.toggle("overflow-hidden");
    window.scrollTo(0, 0);
  }

  render() {
    const [sponsors, institutions] = [[], []];

    for (const [index, value] of this.props.data.sponsors.entries()) {
      sponsors.push(<li key={index}>{value}</li>);
    }
    for (const [index, value] of this.props.data.institutions.entries()) {
      institutions.push(<li key={index}>{value}</li>);
    }

    return (
      <>
        {this.state.isToggleOn ? (
          <div className="modal absolute w-full h-full top-0 left-0 md:flex md:items-center md:justify-center flex-wrap">
            <div
              className="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"
              onClick={this.handleClick}
            ></div>
            <div className="relative sm:w-full md:w-1/2 h-48 smbg-white rounded-sm shadow-lg">
              <div className="text-left px-4 py-5 sm:px-6 bg-white">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Vaccine Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
                <FontAwesomeIcon
                  className="absolute -top-0 -right-0 mt-4 mr-4 cursor-pointer"
                  icon="times"
                  onClick={this.handleClick}
                />
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="text-left bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className=" text-sm font-medium text-gray-500">
                      Candidate Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {this.props.data.candidate}
                    </dd>
                  </div>
                  <div className="text-left bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className=" text-sm font-medium text-gray-500">
                      Mechanism
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {this.props.data.mechanism}
                    </dd>
                  </div>
                  <div className="text-left bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className=" text-sm font-medium text-gray-500">
                      Sponsors
                    </dt>
                    <dd className="block mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="block break-words overflow-clip overflow-hidden">
                        <ul>{sponsors}</ul>
                      </span>
                    </dd>
                  </div>
                  <div className="text-left bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className=" text-sm font-medium text-gray-500">
                      Trial Phase
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {this.props.data.trialPhase}
                      </span>
                    </dd>
                  </div>
                  <div className="text-left bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className=" text-sm font-medium text-gray-500">
                      Institutions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 overflow-clip overflow-hidden">
                      <ul>{institutions}</ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ) : null}

        <p
          className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
          onClick={this.handleClick}
        >
          View More
        </p>
      </>
    );
  }
}

export default Modal;
