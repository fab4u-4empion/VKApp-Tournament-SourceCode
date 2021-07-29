import React from "react";
import { AdaptivityProvider, Panel, Placeholder, View, AppRoot, ScreenSpinner } from "@vkontakte/vkui";
import { Icon56WifiOutline } from '@vkontakte/icons';

class Preloader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: <ScreenSpinner/>
        };
    }

    render() {
        window.addEventListener('offline', () => {
            this.setState({content: <Placeholder
                                        stretched
                                        icon={<Icon56WifiOutline fill={'var(--red)'}/>}
                                    >
                                        Нет подключения к интернету <br/> Включите интернет и перезагрузите приложение с очисткой кэша
                                    </Placeholder>})
        })

        return(
            <AdaptivityProvider>
                <AppRoot>
 				    <View>
                        <Panel>
                            {this.state.content}  
                        </Panel>
                    </View>
 			    </AppRoot>
 		    </AdaptivityProvider>    
        )
    }  
}

export default Preloader