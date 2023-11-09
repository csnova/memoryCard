import { useState } from "react";
import Print from "./components/Print";

function App() {
  const [count, setCount] = useState(0);

  return <Print />;
}

export default App;
