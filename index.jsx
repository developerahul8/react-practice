const { createRoot } = require("react-dom/client");
const { default: App } = require("./app");

const root = createRoot(document.querySelector("#root"));

root.render(<App/>)