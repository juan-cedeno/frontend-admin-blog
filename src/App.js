import { AppRouter } from "./routers/AppRouter";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './App.css'
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {

  return (


    <div>
      <Provider store = {store}>

        <AppRouter/>
        
      </Provider>
        <ReactNotification />

    </div>
  );
}

export default App;
