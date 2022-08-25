import "./DarkMode.css";

const DarkMode = () => {

  const ToggleTheme = () =>{

    
    console.log("Hello react");

    
  };
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          onChange={ToggleTheme}
          
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;