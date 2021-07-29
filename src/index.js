import "core-js/features/map";
import "core-js/features/set";
import Preloader from './blank_panels/preloader'
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import '@vkontakte/vkui/dist/vkui.css';
import './style.css';

// Init VK  Mini App
bridge.send("VKWebAppInit");

window.history.pushState(null, null)

bridge.subscribe((e) => {
    if (e.detail.type === "VKWebAppUpdateConfig") {
        document.body.setAttribute("scheme", e.detail.data.scheme);
    }
});

ReactDOM.render(<Preloader/>, document.getElementById("root"));

function load() {
    let obj = import("./App")
    obj.then(({default: App}) => {
        ReactDOM.render(<App/>, document.getElementById("root"));
    })    
}

load()


import("./eruda").then(({ default: eruda }) => {}); //runtime download

