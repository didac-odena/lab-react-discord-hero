import discordLogoWhite from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import discordBG from "./assets/discord-background.png";

function App() {
  return (
    <div className="bg-primary color min-vh-100 w-100">

      <div className="tittle text-light d-flex justify-content-between p-3 mb-5">
        <img src={discordLogoWhite} alt="Discord" className="w-25 h-auto" />
        <img src={menuIcon} alt="Discord" className="w-auto h-auto" />
      </div>

      <p className="tittle text-light fs-1 d-flex justify-content-between ps-3">
        IMAGINE A
      </p>
      <p className="tittle text-light d-flex justify-content-between ps-3 fs-1 mb-5">
        PLACE...{" "}
      </p>

      <div className="textcontent ps-3 text-light">
        <p>...where you can belong to a school club, a gaming group, or a</p>
        <p>worldwide art community. Where just you and a handful of</p>
        <p>friends can spend time together. A place that makes it easy to</p>
        <p>talk every day and hang out more often.</p>
      </div>

        <img src={discordBG} alt="Discord" className="position-absolute bottom-0 end-0" />

      
    </div>
  );
}

export default App;
