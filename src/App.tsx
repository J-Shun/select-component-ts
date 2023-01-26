import { useState } from "react";
import { Select, SelectOption } from "./Select";
import { Wrapper } from "./App.styles";
import GlobalStyles from "./Global.styles";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Select
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        ></Select>
        <br />
        <Select
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        ></Select>
      </Wrapper>
    </>
  );
}

export default App;
