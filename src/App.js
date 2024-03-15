import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from "./data"
function App() {
  const cards = data.map (item =>{
    return (
      <Main
       key = {item.id} 
       item = {item}
      />

    )
  })
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 py-10 px-5">
        {cards}
      </div>
    </div>
  );
}

export default App;
