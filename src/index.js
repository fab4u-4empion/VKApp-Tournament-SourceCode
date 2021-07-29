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


// Init VK  Mini App
bridge.send("VKWebAppInit");

const App = lazy(() => import('./App'))

const CoockiPlaceholder =   <AdaptivityProvider>
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
    ReactDOM.render(<FullApp/>, document.getElementById("root"));
} catch {
    ReactDOM.render(CoockiPlaceholder, document.getElementById("root"));
}

//import("./eruda").then(({ default: eruda }) => {}); //runtime download

