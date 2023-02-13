import {Firstpage} from "./First";
import Second from "./Second";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from "./MyRouter";
import './mystyle.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalContextProvider } from "./hooks/GlobalContext";
import { Provider } from "react-redux";
import myStore from "./redux/store";

function App() {
  return (
    <>
     {/*<FirstPage/>
    <Second/>*/} 
    <GlobalContextProvider>
      <Provider store={myStore}>
    <MyRoutes/>
    </Provider>
    </GlobalContextProvider>
    </>
    
  );
}

export default App;
