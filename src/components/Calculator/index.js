import React, { useState } from "react";
import {
  Container,
  Result,
  OperationContainer,
  OperationInput,
  OperationButton,
  Display,
  ErrorMessage,
} from "./styles";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState("");

  const algarisms = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  function handleSaveInput(input) {
    setError("");
    setResult(0);
    if (input) {
      let inputValue = input.replace(/\s/g, "").toUpperCase();
      setOperation(input);
      const values = inputValue.split(/[+-]/g);
      const symbols = inputValue.split(/[^+-]/g).filter((item) => item);
      const nums = romanToArabic(values);
      if (nums) {
        const arabicNum = calculate(nums, symbols);
        setResult(arabicToRoman(arabicNum));
      }
    } else {
      return setError(`Entre com uma operação, por exemplo: "X+V" ou "X-V"`);
    }
  }

  function calculate(values, symbols) {
    let total = 0;
    values.forEach((value, index) => {
      if (index === 0 || symbols[index - 1] === "+") {
        total += value;
        return null;
      }
      if (symbols[index - 1] === "-") {
        total -= value;
        return null;
      }
    });
    return total;
  }

  const romanToArabic = (values) => {
    let num = 0;
    let arabicValues = [];
    let isUndefined;
    values.forEach((value) => {
      for (let i = 0; i < value.length; i++) {
        const curr = algarisms[value[i]];
        const next = algarisms[value[i + 1]];
        if (curr) {
          curr < next ? (num -= curr) : (num += curr);
        } else {
          i = value.length;
          isUndefined = true;
          return setError("Algarismo ou operação inválida");
        }
      }
      arabicValues.push(num);
      num = 0;
    });
    return isUndefined ? undefined : arabicValues;
  };

  const arabicToRoman = (value) => {
    var str = "";
    if (value <= 3999 && value > 0) {
      for (var i of Object.keys(algarisms)) {
        var q = Math.floor(value / algarisms[i]);
        value -= q * algarisms[i];
        str += i.repeat(q);
      }
      return str;
    } else {
      return setError(
        `O número ${value} não pode ser representado com este sistema.`
      );
    }
  };

  return (
    <Display>
      <Container>
        <OperationContainer>
          <OperationInput
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && handleSaveInput(input);
            }}
            placeholder="Entre com sua operação..."
          />
          <OperationButton onClick={() => handleSaveInput(input)}>
            =
          </OperationButton>
        </OperationContainer>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <Result>{result && `${operation} = ${result}`}</Result>
        )}
      </Container>
    </Display>
  );
}

export default Calculator;
