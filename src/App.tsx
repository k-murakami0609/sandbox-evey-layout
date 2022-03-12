import React from "react";
import { Stack } from "./ui/Stack";

function App() {
  return (
    <div className="App">
      <Stack space="s4">
        <div>aaaa</div>
        <div>aaaa</div>
        <Stack space="s2">
          <div>bbbb</div>
          <div>bbbb</div>
        </Stack>
        <div>aaaa</div>
        <div>aaaa</div>
      </Stack>
    </div>
  );
}

export default App;
