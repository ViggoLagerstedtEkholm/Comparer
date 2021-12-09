import TextComparer from "./Components/TextComparer";
import {ContextProvider} from "./Components/ContextProvider";

function App() {
    return (
        <ContextProvider>
            <TextComparer/>
        </ContextProvider>
    );
}

export default App;
