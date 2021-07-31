import "core-js/features/map";
import "core-js/features/set";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import '@vkontakte/vkui/dist/vkui.css';
import './style.css';
import { AdaptivityProvider, AppRoot, Panel, Placeholder, ScreenSpinner, View } from "@vkontakte/vkui";
import ErrorBoundary from './errorBoundary'
import { Icon56ErrorOutline } from '@vkontakte/icons';
import checkSubscriptions from './notification/activeSubscriptions'

// Init VK  Mini App
bridge.send("VKWebAppInit");

var windowFocus = false
var windowFocusCounter = 0
var windowFocusTime

const App = lazy(() => import('./App'))

const CookiePlaceholder =   <AdaptivityProvider>
                                <AppRoot>
                                    <View>
                                        <Panel>
                                            <Placeholder Placeholder
                                                stretched
                                                icon={<Icon56ErrorOutline fill={'var(--red)'}/>}
                                            >
                                                Сервис не может работать с выключенными Cookie <br/> или в режиме инкогнито
                                            </Placeholder>
                                        </Panel>
                                    </View>
                                </AppRoot>
                            </AdaptivityProvider>


window.history.pushState(null, null)

bridge.subscribe((e) => {
    if (e.detail.type === "VKWebAppUpdateConfig") {
        document.body.setAttribute("scheme", e.detail.data.scheme);
    }
});

function FullApp() {
    return (
        <AdaptivityProvider>
            <AppRoot>
                <View>
                    <Panel>
                        <ErrorBoundary>
                            <Suspense fallback={<ScreenSpinner/>}>
                                <App/>
                            </Suspense>
                        </ErrorBoundary>
                    </Panel>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    )
}

try {
    localStorage.setItem('test', 'test')
    checkSubscriptions()
    ReactDOM.render(<FullApp/>, document.getElementById("root"));
} catch {
    ReactDOM.render(CookiePlaceholder, document.getElementById("root"));
}

import("./eruda").then(({ default: eruda }) => {
    console.log('test1')
}); //runtime download

window.addEventListener('load', () => {
    windowFocusTime = new Date().getTime()
})

window.addEventListener("focus", () => {
    console.log(windowFocus)
    if(!windowFocus && windowFocusCounter < 6) {
        checkSubscriptions()
        windowFocus = true
        windowFocusCounter += 1
        var d = new Date().getTime()
        if (d - windowFocusTime > 2500) {
            windowFocusCounter = 0
            windowFocusTime = new Date().getTime()
        }
        if (windowFocusCounter == 6) {
            setTimeout(() => {
                windowFocusCounter = 0
            }, 30000)
        } 
    }
})

window.addEventListener("blur", () => {
    if(windowFocus) {
        windowFocus = false
    }
})

