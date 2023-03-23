import "./styles.css";
import { useRef, useEffect } from "react";
export default function App() {
  const UR = useRef(null);
  useEffect(() => {
    UR.current.value = 3;
    UR.current.focus();
  }, []);
  console.log(UR);
  return (
    <div className="App">
      <input ref={UR} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
