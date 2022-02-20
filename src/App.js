import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
} from "grommet";
import { Notification } from "grommet-icons";
import { useState } from "react";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          Hello, Grommet!
          <Heading level="3" margin="none">
            My App
          </Heading>
          <Button
            icon={<Notification />}
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            app body
          </Box>
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
