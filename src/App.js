import "./styles.css";
import { useRef, useEffect } from "react";
export default function App() {
  const UR = useRef(0);
  useEffect(() => {
    UR.current = 3;
  }, []);
  console.log(UR);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{UR.current}</h1>
    </div>
  );
}
