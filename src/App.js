import CustomButton from "./components/CustomBtn";

function App() {
  return (
    <div className="App">
      <CustomButton hint="going Home Page" text="Click" warnMessage="ok" />
      <CustomButton hint="Show list" text="Button" />
      <CustomButton text="Test" warnMessage="test btn" />
    </div>
  );
}

export default App;
