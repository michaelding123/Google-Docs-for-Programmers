import logo from './logo.svg';
import './App.css';
import Editor from "@monaco-editor/react";

function App() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="python"
      defaultValue="// some comment"
      onChange={(value, event) => {
        console.log("value:", value);
      }}
    />
  );
}

export default App;
