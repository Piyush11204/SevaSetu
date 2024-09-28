import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import img from '../../img/certi.png';

// import "./App.css"; // You may not need this if all styles are moved to Tailwind.

class Certification extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    Date: "",
    Subject: "",
    ngo: "",
  };
  render() {
    return (
      <div className="flex p-4">
        <div className="flex-grow pr-4">
          <h1 className="text-2xl font-bold">Certificate of Volunteer Service</h1>

          <p className="mt-2">Enter the name of NGO.</p>
          <input
            type="text"
            placeholder="Enter the name of NGO..."
            value={this.state.ngo}
            onChange={(e) => {
              this.setState({ ngo: e.target.value });
            }}
            className="mt-2 p-2 w-full border-2 border-gray-300 rounded shadow-sm"
          />
          
          <p className="mt-4">Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
            className="mt-2 p-2 w-full border-2 border-gray-300 rounded shadow-sm"
          />
          
          <p className="mt-4">What has been done</p>
          <input
            type="text"
            placeholder="Subject"
            value={this.state.Subject}
            onChange={(e) => {
              this.setState({ Subject: e.target.value });
            }}
            className="mt-2 p-2 w-full border-2 border-gray-300 rounded shadow-sm"
          />
          
          <h1 className="mt-4">Enter the date</h1>
          <input
            type="date"
            value={this.state.Date}
            onChange={(e) => {
              this.setState({ Date: e.target.value });
            }}
            className="mt-2 p-2 w-full border-2 border-gray-300 rounded shadow-sm"
          />
          
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null },
              });
            }}
            className="mt-4 px-4 py-2 border-2 border-cyan-400 bg-cyan-300 rounded-lg cursor-pointer hover:bg-cyan-400 transition-colors"
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper} className="p-5">
          <div id="certificateWrapper" className="shadow-lg rounded overflow-hidden relative">
            <p className="absolute left-[250px] top-[259px] text-[32pt]">{this.state.Name}</p>
            <p className="date absolute left-[172px] top-[410px] text-[14pt] font-cursive">{this.state.Date}</p>
            <p className="Subject absolute left-[150px] top-[340px] text-[9.5pt] font-cursive">{this.state.Subject}</p>
            <p className="ngo absolute left-[250px] top-[130px] text-[29pt] text-teal-700 font-cursive">{this.state.ngo}</p>
            <img src={img} alt="Certificate" className="block" />
          </div>
        </div>
      </div>
    );
  }
}

export default Certification;
