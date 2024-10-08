import { ReactElement } from "react";
import "./App.css";

interface AppProps {
  children: ReactElement;
}

function App({ children }: AppProps) {
  return <>{children}</>;
}

export default App;
