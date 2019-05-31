import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

var name = 'Calvin'
var element = <span id>Click the buttons bellow to roll stats for tabletop RPG's (i.e D&D/Pathfinder)</span>
var rollStatsButtonStandard = <button type="button" onclick="rollStats()">Standard</button>
var rollStatsButtonClassic = <button type="button" onclick="rollStats()">Classic</button>
var rollStatsButtonHeroic = <button type="button" onclick="rollStats()">Heroic</button>
var statBlock = 0

function StatBlock(){
  return <div className="StatBlock">
    <table>
      <tr>
        <td>
          STR
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
      <tr>
        <td>
          DEX
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
      <tr>
        <td>
          CON
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
      <tr>
        <td>
          INT
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
      <tr>
        <td>
          WIS
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
      <tr>
        <td>
          CHA
        </td>
        <td>
          {statBlock}
        </td>
      </tr>
    </table>
  </div>;
}

function App() {
  return (
    <div className="App">
      <h2>{element}</h2>
      <div>
        {rollStatsButtonStandard}{rollStatsButtonClassic}{rollStatsButtonHeroic}
      </div>
      <StatBlock/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
