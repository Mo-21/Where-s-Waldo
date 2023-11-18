import "../styles/App.css";
import Image from "./Image";
import { PositionProvider } from "./CoordinatesContext";

function App() {
  return (
    <>
      <PositionProvider>
        <Image />
      </PositionProvider>
    </>
  );
}

export default App;
