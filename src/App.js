import "./App.css";
import SearchBar from "./components/SearchBar";

const data = [
  {
    key: "What is a dog?",
    value:
      "A dog is a type of domesticated animal. Known for its loyalty and" +
      "faithfulness, it can be found as a welcome guest in many households" +
      "across the world.",
  },
  {
    key: "What kinds of dogs are there?",
    value:
      "There are many breeds of dogs. Each breed varies in size and" +
      "temperament. Owners often select a breed of dog that they find to be" +
      "compatible with their own lifestyle and desires from a companion.",
  },
  {
    key: "How do you acquire a dog?",
    value:
      "A pet shop may be the most convenient way to buy a dog. Buying a dog" +
      "from a private owner allows you to assess the pedigree and upbringing" +
      "of your dog before choosing to take it home. Lastly, finding your dog" +
      "from a shelter, helps give a good home to a dog who may not find one" +
      "so readily.",
  },
];

function App() {
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
