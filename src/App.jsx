import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import EntryData from "./data";

function App() {
  const entryElements = EntryData.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
