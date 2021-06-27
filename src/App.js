import "./App.css";
import Navi from "./layouts/Navi/Navi";
import UserDashboard from "./layouts/Dashboards/UserDashboard";
function App() {
  return (
    <div className="App">
      <Navi />
      <UserDashboard />
    </div>
  );
}

export default App;
