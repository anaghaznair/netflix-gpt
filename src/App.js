import { Provider } from "react-redux";
import Body from "./components.js/Body";
import appStore from "./utils.js/appStore.js";

function App() {
  return (
    <div className="h-[100vh]">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
