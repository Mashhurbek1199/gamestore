import {Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./redux";
import {PersistGate} from "redux-persist/integration/react";
import HomePage from "./pages/home-page/home-page";
import GamePage from "./pages/game-page/game-page";
import OrderPage from "./pages/order-page/order-page";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/app/:title" element={<GamePage />} />
            <Route exact path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
