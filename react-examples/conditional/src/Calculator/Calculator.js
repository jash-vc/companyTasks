import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import AddExpanse from "../budgetFinder/AddExpanse";

function Calculator() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [add, setAdd] = useState(0);
  const arr = [{}];
  return (
    <>
      <FormGroup>
        <Label>Enter Number</Label>{" "}
        <Input
          type="number"
          name="first"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Enter Number</Label>{" "}
        <Input
          type="number"
          name="second"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </FormGroup>
      <Button value={add} onClick={(e) => setAdd(first + second)}>
        ADD
      </Button>
    </>
  );
}

export default Calculator;
