import "core-js/features/map";
import "core-js/features/set";
import { ScreenSpinner } from "@vkontakte/vkui";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import '@vkontakte/vkui/dist/vkui.css';
//import App from "./App";
import './style.css';


// Init VK  Mini App
bridge.send("VKWebAppInit");

bridge.subscribe((e) => {
    if (e.detail.type === "VKWebAppUpdateConfig") {
        document.body.setAttribute("scheme", e.detail.data.scheme);
    }
});

ReactDOM.render(<ScreenSpinner/>, document.getElementById("root"));

async function load() {
    let obj = await import("./App")
    let App = obj.default
    ReactDOM.render(<App/>, document.getElementById("root"));    
}

load()
    
import("./eruda").then(({ default: eruda }) => {}); //runtime download

