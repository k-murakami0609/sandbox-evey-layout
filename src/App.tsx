import React from "react";
import { Stack } from "./ui/Stack";
import { Box } from "./ui/Box";

function App() {
  return (
    <div className="App">
      <Stack space="s4">
        <Box>sssss</Box>
        <div>aaaa</div>
        <Box padding="sm3" borderWidth={"10px"}>
          sssss
        </Box>
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
