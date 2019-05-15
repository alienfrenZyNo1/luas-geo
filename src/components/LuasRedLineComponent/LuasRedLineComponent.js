import React, { Component } from 'react';
import './LuasRedLineComponent.css';
import MaterialTableComponent from '../MaterialTableComponent/MaterialTableComponent';
import Select from "react-dropdown-select";
import {luasRedLineData} from '../../LuasRedLineData';

import Typography from '@material-ui/core/Typography';

import styled from '@emotion/styled';

class LuasRedLineComponent extends Component {
  state = {
      inboundTime: '',
      outboundTime: '',
      inboundDestination: '',
      outboundDestination: '',
      stopName: '',
      noticeMsg: '',
      inboundDestinations: [],
      inboundDueMins: [],
      outboundDestinations: [],
      outboundDueMins: [],
      stopAbbreviation: 'tpt'
  }


  componentDidMount() {
    this.fetchTimes(this.state.stopAbbreviation);
    this.timer = setInterval(() => this.fetchTimes(this.state.stopAbbreviation), 5000);  
  }

  
  handleChangeStop = (event) => {
    const stopAbbreviation = event;
    this.setState({
      stopAbbreviation
    })
    this.fetchTimes(stopAbbreviation);
  }

  fetchTimes(stopAbbreviation) {
    fetch(`http://luasforecasts.rpa.ie/xml/get.ashx?action=forecast&stop=${stopAbbreviation}&encrypt=false`)
    .then(response => response.text())
    .then(data => (new window.DOMParser()).parseFromString(data, "text/xml"))
    .then(results => {
    const inboundDestination = results.getElementsByTagName('direction')[0];
    const tramsInbound = inboundDestination.getElementsByTagName('tram');
    const outboundDestination = results.getElementsByTagName('direction')[1];
    const tramsOutbound = outboundDestination.getElementsByTagName('tram');
    const stopName = results.getElementsByTagName('stopInfo')[0].getAttribute('stop');
    const messageTag = results.getElementsByTagName('message')[0];
    const noticeMsg = messageTag.childNodes[0].nodeValue;

    let inboundDestinations = [];
    let inboundDueMins = [];
    let outboundDestinations = [];
    let outboundDueMins = [];

    for (let i = 0; i < tramsInbound.length; i++) {
      inboundDestinations.push(inboundDestination.getElementsByTagName('tram')[i].getAttribute('destination'));
      inboundDueMins.push(inboundDestination.getElementsByTagName('tram')[i].getAttribute('dueMins'));
    }

    for (let i = 0; i < tramsOutbound.length; i++) {
      outboundDestinations.push(outboundDestination.getElementsByTagName('tram')[i].getAttribute('destination'));
      outboundDueMins.push(outboundDestination.getElementsByTagName('tram')[i].getAttribute('dueMins'));
    }

    this.setState({ inboundDestination,
                    outboundDestination,
                    stopName,
                    noticeMsg,
                    inboundDestinations,
                    inboundDueMins,
                    outboundDestinations,
                    outboundDueMins
                  });
  });
  }
  


  render() {
   

    return (
      <div className="LuasRedLineComponent">
      <Typography variant="display3">Red Line</Typography>
        <StyledSelect options={luasRedLineData} clearOnSelect={true} labelField="pronunciation"  valueField="abrev" values={[]} onChange={
        (value) => value[0] === undefined ? '' : this.handleChangeStop(value[0].abrev)
      }/>
        <Typography variant="display1">{this.state.stopName}</Typography>
        <Typography variant="title">{this.state.noticeMsg}</Typography>
        <Typography variant="headline">Inbound</Typography>
        <MaterialTableComponent 
          destinations={this.state.inboundDestinations} 
          destination={this.state.inboundDestinations} 
          dueMins={this.state.inboundDueMins} />
         <Typography variant="headline">Outbound</Typography> 
        <MaterialTableComponent 
          destinations={this.state.outboundDestinations} 
          destination={this.state.outboundDestinations} 
          dueMins={this.state.outboundDueMins} />
      </div>
    );
  }
}

const StyledSelect = styled(Select)`
  background: #333;
  border: #333 !important;
  color: #fff;
  width: 95%;
  margin: 10px;
  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #fff;
  }
  .react-dropdown-select-option {
    border: 1px solid #fff;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #fff;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-height: 500px;
    overflow: auto;
    z-index: 9;
    background: #333;
    box-shadow: none;
    color: #fff !important;
  }
  .react-dropdown-select-item {
    color: #fff;
    border-bottom: 1px solid #333;
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    //background: #111;
    border-bottom: 1px solid #333;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #ccc;
  }
`;

export default LuasRedLineComponent;
