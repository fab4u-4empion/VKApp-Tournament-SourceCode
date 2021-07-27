import React from "react";
import { AdaptivityProvider, Panel, ScreenSpinner, View, AppRoot } from "@vkontakte/vkui";

const Spinner = () => {
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View>
                    <Panel>
                        <ScreenSpinner/>    
                    </Panel>
                </View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default Spinner