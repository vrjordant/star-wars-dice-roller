import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';

function App() {
  const [greenDice, setGreenDice] = useState<number>(0)
  const [yellowDice, setYellowDice] = useState<number>(0)
  const [blueDice, setBlueDice] = useState<number>(0)
  const [purpleDice, setPurpleDice] = useState<number>(0)
  const [blackDice, setBlackDice] = useState<number>(0)
  const [redDice, setRedDice] = useState<number>(0)
  const [whiteDice, setWhiteDice] = useState<number>(0)

  const [rolls, setRolls] = useState({
    greenRolls: [],
    yellowRolls: [],
    blueRolls: [],
    purpleRolls: [],
    blackRolls: [],
    redRolls: [],
    whiteRolls: []
  })
  const { greenRolls, yellowRolls, blueRolls, purpleRolls, blackRolls, redRolls, whiteRolls } = rolls;

  const greenDiceValues = [ { }, { success: 1}, { success: 2}, { advantage: 1}, { success: 1}, { success: 1, advantage: 1}, { advantage: 1}, { advantage: 2}]
  const yellowDiceValues = [ { }, { success: 1}, { success: 2}, { success: 1, advantage: 1}, { success: 1, advantage: 1}, { advantage: 2}, { triumph: 1, success: 1}, { success: 1}, { success: 2}, { advantage: 1}, { success: 1, advantage: 1}, { advantage: 2}]
  const blueDiceValues = [ {}, {}, { success: 1}, { advantage: 1}, {success: 1, advantage: 1}, { advantage: 2}]
  const purpleDiceValues = [ {}, { failure: 2 }, { threat: 1}, { failure: 1, threat: 1}, { threat: 1}, { failure: 1}, { threat: 1}, { threat: 2}]
  const blackDiceValues = [ {}, {}, { threat: 1}, { threat: 1}, { failure: 1}, { failure: 1}]
  const redDiceValues = [ {}, { failure: 1}, { threat: 1}, { failure: 2}, { failure: 1, threat: 1}, { threat: 2}, { despair: 1, failure: 1}, { threat: 1}, { failure: 2}, { threat: 1, failure: 1}, { threat: 2}, { failure: 1}]
  const whiteDiceValues = [ { black: 2}, { black: 1}, { black: 1}, { black: 1}, { white: 1}, { white: 2}, { white: 2}, { white: 2}, { white: 1}, { black: 1}, { black: 1}, {black: 1}]

  const addGreenDice = () => {
    setGreenDice(c => c + 1)
  }

  const addYellowDice = () => {
    setYellowDice(c => c + 1)
  }

  const addBlueDice = () => {
    setBlueDice(c => c + 1)
  }

  const addPurpleDice = () => {
    setPurpleDice(c => c + 1)
  }

  const addBlackDice = () => {
    setBlackDice(c => c + 1)
  }

  const addRedDice = () => {
    setRedDice(c => c + 1)
  }

  const addWhiteDice = () => {
    setWhiteDice(c => c + 1)
  }

  const removeGreenDice = () => {
    setGreenDice(c => c > 0 ? c - 1 : 0)
  }

  const removeYellowDice = () => {
    setYellowDice(c => c > 0 ? c - 1 : 0)
  }

  const removeBlueDice = () => {
    setBlueDice(c => c > 0 ? c - 1 : 0)
  }

  const removePurpleDice = () => {
    setPurpleDice(c => c > 0 ? c - 1 : 0)
  }

  const removeBlackDice = () => {
    setBlackDice(c => c > 0 ? c - 1 : 0)
  }

  const removeRedDice = () => {
    setRedDice(c => c > 0 ? c - 1 : 0)
  }

  const removeWhiteDice = () => {
    setWhiteDice(c => c > 0 ? c - 1 : 0)
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const rollDice = async () => {
    const greenRolls: any[] = []
    const yellowRolls: any[] = []
    const blueRolls: any[] = []
    const purpleRolls: any[] = []
    const blackRolls: any[] = []
    const redRolls: any[] = []
    const whiteRolls: any[] = []

    for (let currentGreen = 0; currentGreen < greenDice; currentGreen++) {
      const diceRoll = greenDiceValues[getRandomInt(8)]
      greenRolls.push(diceRoll)
    }

    // Yellow dice
    for (let currentYellow = 0; currentYellow < yellowDice; currentYellow++) {
      const diceRoll = yellowDiceValues[getRandomInt(12)]
      yellowRolls.push(diceRoll)
    }

    // Blue dice
    for (let currentBlue = 0; currentBlue < blueDice; currentBlue++) {
      const diceRoll = blueDiceValues[getRandomInt(6)]
      blueRolls.push(diceRoll)
    }

    // Purple rolls
    for (let currentPurple = 0; currentPurple < purpleDice; currentPurple++) {
      const diceRoll = purpleDiceValues[getRandomInt(8)]
      purpleRolls.push(diceRoll)
    }

    // Black rolls
    for (let currentBlack = 0; currentBlack < blackDice; currentBlack++) {
      const diceRoll = blackDiceValues[getRandomInt(6)]
      blackRolls.push(diceRoll)
    }

    // Red rolls
    for (let currentRed = 0; currentRed < redDice; currentRed++) {
      const diceRoll = redDiceValues[getRandomInt(12)]
      redRolls.push(diceRoll)
    }

    // White rolls
    for (let currentWhite = 0; currentWhite < whiteDice; currentWhite++) {
      const diceRoll = whiteDiceValues[getRandomInt(12)]
      whiteRolls.push(diceRoll)
    }

    setRolls({
      greenRolls,
      yellowRolls,
      blueRolls,
      purpleRolls,
      blackRolls,
      redRolls,
      whiteRolls
    })
  }

  const calculateResults = () => {
    let successes = 0;
    let advantages = 0;
    let failures = 0;
    let threats = 0;
    let triumphs = 0;
    let despairs = 0;
    let whitePips = 0;
    let blackPips = 0;

    // Green rolls
    for (const roll of greenRolls) {
      if (roll.success) {
        successes += roll.success
      }
      if (roll.advantage) {
        advantages += roll.advantage
      }
    }

    // Yellow rolls
    for (const roll of yellowRolls) {
      if (roll.success) {
        successes += roll.success
      }
      if (roll.advantage) {
        advantages += roll.advantage
      }
      if (roll.triumph) {
        triumphs += roll.triumph
      }
    }

    // Blue rolls
    for (const roll of blueRolls) {
      if (roll.success) {
        successes += roll.success
      }
      if (roll.advantage) {
        advantages += roll.advantage
      }
    }

    // Purple rolls
    for (const roll of purpleRolls) {
      if (roll.failure) {
        failures += roll.failure
      }
      if (roll.threat) {
        threats += roll.threat
      }
    }

    // Black rolls
    for (const roll of blackRolls) {
      if (roll.failure) {
        failures += roll.failure
      }
      if (roll.threat) {
        threats += roll.threat
      }
    }

    // Red rolls
    for (const roll of redRolls) {
      if (roll.failure) {
        failures += roll.failure
      }
      if (roll.threat) {
        threats += roll.threat
      }
      if (roll.despair) {
        despairs += roll.despair
      }
    }

    // White rolls
    for (const roll of whiteRolls) {
      if (roll.white) {
        whitePips += roll.white
      }
      if (roll.black) {
        blackPips += roll.black
      }
    }

    return {
      successes,
      advantages,
      triumphs,
      failures,
      threats,
      despairs,
      whitePips,
      blackPips
    }
  }

  const rollResults = calculateResults();
  const { successes, advantages, triumphs, failures, threats, despairs, whitePips, blackPips} = rollResults;
  const netSuccesses = successes - failures
  const netAdvantages = advantages - threats

  const formatNetResults = () => {
    let message = ``;

    // Successes/Failures
    if (netSuccesses >= 0) {
      message += `${netSuccesses} success${netSuccesses === 1 ? "" : "es"}, `
    } else {
      const netFailures = Math.abs(netSuccesses)
      message += `${netFailures} failure${netFailures === 1 ? "" : "s"}, `
    }

    // Advantages/Threats
    if (netAdvantages >= 0) {
      message += `${netAdvantages} advantage${netSuccesses === 1 ? "" : "s"}`
    } else {
      const netThreats = Math.abs(netAdvantages)
      message += `${netThreats} threat${netThreats === 1 ? "" : "s"}`
    }

    return message;
  }
  
  const formatTriumphs = () => {
    if (triumphs) {
      return <>, <Yellow>{triumphs} TRIUMPH{triumphs === 1 ? "" : "S"}</Yellow></>
    }
    return <></>
  }

  const formatDespairs = () => {
    if (despairs) {
      return <>, <Red>{despairs} DESPAIR{despairs === 1 ? "" : "S"}</Red></>
    }
    return ""
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Dice Roller</h1>
        <h2>Current Dice Selection</h2>
        <DiceContainer><Green>Green</Green>: {greenDice}<button onClick={addGreenDice}>+</button><button onClick={removeGreenDice}>-</button></DiceContainer>
        <DiceContainer><Yellow>Yellow</Yellow>: {yellowDice}<button onClick={addYellowDice}>+</button><button onClick={removeYellowDice}>-</button></DiceContainer>
        <DiceContainer><Blue>Blue</Blue>: {blueDice}<button onClick={addBlueDice}>+</button><button onClick={removeBlueDice}>-</button></DiceContainer>
        <DiceContainer><Purple>Purple</Purple>: {purpleDice}<button onClick={addPurpleDice}>+</button><button onClick={removePurpleDice}>-</button></DiceContainer>
        <DiceContainer><Black>Black</Black>: {blackDice}<button onClick={addBlackDice}>+</button><button onClick={removeBlackDice}>-</button></DiceContainer>
        <DiceContainer><Red>Red</Red>: {redDice}<button onClick={addRedDice}>+</button><button onClick={removeRedDice}>-</button></DiceContainer>
        <DiceContainer><White>White</White>: {whiteDice}<button onClick={addWhiteDice}>+</button><button onClick={removeWhiteDice}>-</button></DiceContainer>
        <RollButton onClick={rollDice}>Roll!</RollButton>
        <h2>Roll Results</h2>
        <NoMargins><Bold>Force Dice</Bold>: <White>{whitePips} white pip{whitePips === 1 ? "" : "s"}</White>, <Black>{blackPips} black pip{blackPips === 1 ? "" : "s"}</Black></NoMargins>
        <NoMargins><Bold>Net Results</Bold>: {formatNetResults()}{formatTriumphs()}{formatDespairs()}</NoMargins>
        <Tooltip>*Successes/Failures from triumphs and despairs are included in the net results.</Tooltip>
        <div>
          {greenRolls.map((roll) => {
            const successes = roll.success;
            const advantages = roll.advantage
            return (
              <RollContainer><Green>G</Green>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}</RollContainer>
            )
          })}
          {yellowRolls.map((roll) => {
            const successes = roll.success;
            const advantages = roll.advantage
            const triumphs = roll.triumph
            return (
              <RollContainer><Yellow>Y</Yellow>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}{triumphs ? <>, <Yellow>1 TRIUMPH</Yellow></>: ""}</RollContainer>
            )
          })}
          {blueRolls.map((roll) => {
            const successes = roll.success;
            const advantages = roll.advantage
            return (
              <RollContainer><Blue>B</Blue>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}</RollContainer>
            )
          })}
          {purpleRolls.map((roll) => {
            const failures = roll.failure;
            const threats = roll.threat
            return (
              <RollContainer><Purple>P</Purple>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}</RollContainer>
            )
          })}
          {blackRolls.map((roll) => {
            const failures = roll.failure;
            const threats = roll.threat
            return (
              <RollContainer><Black>B</Black>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}</RollContainer>
            )
          })}
          {redRolls.map((roll) => {
            const failures = roll.failure;
            const threats = roll.threat
            const despairs = roll.despair;
            return (
              <RollContainer><Red>R</Red>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}{despairs ? <>, <Red>1 DESPAIR</Red></>: ""}</RollContainer>
            )
          })}
          {whiteRolls.map((roll) => {
            const whitePips = roll.white;
            const blackPips = roll.black;
            return (
              <RollContainer><White>W</White>: <White>{whitePips ? whitePips : 0} white pip{whitePips === 1 ? "" : "s"}</White>, <Black>{blackPips ? blackPips : 0} black pip{blackPips === 1 ? "" : "s"}</Black></RollContainer>
            )
          })}
        </div>
      </header>
    </div>
  );
}

const Tooltip = styled.sub`
  margin-bottom: 18px;
  font-size: 18px;
  margin-top: 4px;
  color: lightgrey;
`

const NoMargins = styled.p`
  margin: 0;
`

const Bold = styled.span`
  font-weight: bold;
`

const RollContainer = styled.p`
  margin: 0;
`

const DiceContainer = styled.p`
  margin: 0;
  display: flex;
  white-space: pre-wrap;
`

const RollButton = styled.button`
  margin-top: 12px;
`

const Green = styled.span`
  color: green;
`

const Yellow = styled.span`
  color: yellow;
`

const Blue = styled.span`
  color: blue;
`

const Purple = styled.span`
  color: purple;
`

const Black = styled.span`
  color: grey;
`

const Red = styled.span`
  color: red;
`

const White = styled.span`
  color: white;
`

export default App;
