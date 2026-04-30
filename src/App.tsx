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

  interface RollResult {
    success?: number;
    advantage?: number;
    failure?: number;
    threat?: number;
    triumph?: number;
    despair?: number;
    white?: number;
    black?: number;
  }

  interface Rolls {
    greenRolls: RollResult[];
    yellowRolls: RollResult[];
    blueRolls: RollResult[];
    purpleRolls: RollResult[];
    blackRolls: RollResult[];
    redRolls: RollResult[];
    whiteRolls: RollResult[];
  }

  const [rolls, setRolls] = useState<Rolls>({
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

  const addDie = (color: string) => {
    switch(color) {
      case "green":
        setGreenDice(c => c + 1)
        break
      case "yellow":
        setYellowDice(c => c + 1)
        break
      case "blue":
        setBlueDice(c => c + 1)
        break
      case "purple":
        setPurpleDice(c => c + 1)
        break
      case "black":
        setBlackDice(c => c + 1)
        break
      case "red":
        setRedDice(c => c + 1)
        break
      case "white":
        setWhiteDice(c => c + 1)
        break
    }
  }

  const removeDie = (color: string) => {
    switch(color) {
      case "green":
        setGreenDice(c => c > 0 ? c - 1 : 0)
        break
      case "yellow":
        setYellowDice(c => c > 0 ? c - 1 : 0)
        break
      case "blue":
        setBlueDice(c => c > 0 ? c - 1 : 0)
        break
      case "purple":
        setPurpleDice(c => c > 0 ? c - 1 : 0)
        break
      case "black":
        setBlackDice(c => c > 0 ? c - 1 : 0)
        break
      case "red":
        setRedDice(c => c > 0 ? c - 1 : 0)
        break
      case "white":
        setWhiteDice(c => c > 0 ? c - 1 : 0)
        break
    }
  }

  /**
   * Returns a random integer in a given range
   * @param max Max value, noninclusive
   * @returns A pseudo-random number from [0, max)
   */
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  const rollDice = async () => {
    const greenRolls: RollResult[] = []
    const yellowRolls: RollResult[] = []
    const blueRolls: RollResult[] = []
    const purpleRolls: RollResult[] = []
    const blackRolls: RollResult[] = []
    const redRolls: RollResult[] = []
    const whiteRolls: RollResult[] = []

    // Green dice
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
      message += `${netAdvantages} advantage${netAdvantages === 1 ? "" : "s"}`
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

  const rerollDie = (color: string, index: number) => {
    let values: RollResult[] = [];
    let rollsToUpdate: RollResult[] = [];
    switch(color) {
      case "green":
        values = greenDiceValues
        rollsToUpdate = greenRolls
        break
      case "yellow":
        values = yellowDiceValues
        rollsToUpdate = yellowRolls
        break
      case "blue":
        values = blueDiceValues
        rollsToUpdate = blueRolls
        break
      case "purple":
        values = purpleDiceValues
        rollsToUpdate = purpleRolls
        break
      case "black":
        values = blackDiceValues
        rollsToUpdate = blackRolls
        break
      case "red":
        values = redDiceValues
        rollsToUpdate = redRolls
        break
      case "white":
        values = whiteDiceValues
        rollsToUpdate = whiteRolls
        break
    }
    const newRoll = values[getRandomInt(values.length)]
    rollsToUpdate[index] = newRoll
    setRolls({...rolls})
  }

  const clearDice = () => {
    setGreenDice(0)
    setYellowDice(0)
    setBlueDice(0)
    setPurpleDice(0)
    setBlackDice(0)
    setRedDice(0)
    setWhiteDice(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Dice Roller</h1>
        <h2>Current Dice Selection</h2>
        <DiceContainer><Green>Green</Green>: {greenDice}<button onClick={() => addDie("green")}>+</button><button onClick={() => removeDie("green")}>-</button></DiceContainer>
        <DiceContainer><Yellow>Yellow</Yellow>: {yellowDice}<button onClick={() => addDie("yellow")}>+</button><button onClick={() => removeDie("yellow")}>-</button></DiceContainer>
        <DiceContainer><Blue>Blue</Blue>: {blueDice}<button onClick={() => addDie("blue")}>+</button><button onClick={() => removeDie("blue")}>-</button></DiceContainer>
        <DiceContainer><Purple>Purple</Purple>: {purpleDice}<button onClick={() => addDie("purple")}>+</button><button onClick={() => removeDie("purple")}>-</button></DiceContainer>
        <DiceContainer><Black>Black</Black>: {blackDice}<button onClick={() => addDie("black")}>+</button><button onClick={() => removeDie("black")}>-</button></DiceContainer>
        <DiceContainer><Red>Red</Red>: {redDice}<button onClick={() => addDie("red")}>+</button><button onClick={() => removeDie("red")}>-</button></DiceContainer>
        <DiceContainer><White>White</White>: {whiteDice}<button onClick={() => addDie("white")}>+</button><button onClick={() => removeDie("white")}>-</button></DiceContainer>
        <div>
          <RollButton onClick={rollDice}>Roll!</RollButton>
          <RollButton onClick={clearDice}>Clear</RollButton>
        </div>
        <h2>Roll Results</h2>
        <NoMargins><Bold>Force Dice</Bold>: <White>{whitePips} white pip{whitePips === 1 ? "" : "s"}</White>, <Black>{blackPips} black pip{blackPips === 1 ? "" : "s"}</Black></NoMargins>
        <NoMargins><Bold>Net Results</Bold>: {formatNetResults()}{formatTriumphs()}{formatDespairs()}</NoMargins>
        <Tooltip>*Successes/Failures from triumphs and despairs are included in the net results.</Tooltip>
        <div>
          {greenRolls.map((roll, index) => {
            const successes = roll.success;
            const advantages = roll.advantage
            return (
              <RollContainer><Green>G</Green>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}<button onClick={() => rerollDie("green", index)}>Reroll?</button></RollContainer>
            )
          })}
          {yellowRolls.map((roll, index) => {
            const successes = roll.success;
            const advantages = roll.advantage
            const triumphs = roll.triumph
            return (
              <RollContainer><Yellow>Y</Yellow>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}{triumphs ? <>, <Yellow>1 TRIUMPH</Yellow></>: ""}<button onClick={() => rerollDie("yellow", index)}>Reroll?</button></RollContainer>
            )
          })}
          {blueRolls.map((roll, index) => {
            const successes = roll.success;
            const advantages = roll.advantage
            return (
              <RollContainer><Blue>B</Blue>: {successes ? successes : 0} success{successes === 1 ? "" : "es"}, {advantages ? advantages : 0} advantage{advantages === 1 ? "" : "s"}<button onClick={() => rerollDie("blue", index)}>Reroll?</button></RollContainer>
            )
          })}
          {purpleRolls.map((roll, index) => {
            const failures = roll.failure;
            const threats = roll.threat
            return (
              <RollContainer><Purple>P</Purple>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}<button onClick={() => rerollDie("purple", index)}>Reroll?</button></RollContainer>
            )
          })}
          {blackRolls.map((roll, index) => {
            const failures = roll.failure;
            const threats = roll.threat
            return (
              <RollContainer><Black>B</Black>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}<button onClick={() => rerollDie("black", index)}>Reroll?</button></RollContainer>
            )
          })}
          {redRolls.map((roll, index) => {
            const failures = roll.failure;
            const threats = roll.threat
            const despairs = roll.despair;
            return (
              <RollContainer><Red>R</Red>: {failures ? failures : 0} failure{failures === 1 ? "" : "s"}, {threats ? threats : 0} threat{threats === 1 ? "" : "s"}{despairs ? <>, <Red>1 DESPAIR</Red></>: ""}<button onClick={() => rerollDie("red", index)}>Reroll?</button></RollContainer>
            )
          })}
          {whiteRolls.map((roll, index) => {
            const whitePips = roll.white;
            const blackPips = roll.black;
            return (
              <RollContainer><White>W</White>: <White>{whitePips ? whitePips : 0} white pip{whitePips === 1 ? "" : "s"}</White>, <Black>{blackPips ? blackPips : 0} black pip{blackPips === 1 ? "" : "s"}</Black><button onClick={() => rerollDie("white", index)}>Reroll?</button></RollContainer>
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
