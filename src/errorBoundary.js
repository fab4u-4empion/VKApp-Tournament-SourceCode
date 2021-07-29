import { Icon56WifiOutline } from '@vkontakte/icons';
import { Placeholder } from '@vkontakte/vkui';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            networkError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        window.addEventListener('offline', () => {
            this.setState({networkError: true})
        })

        if(this.state.hasError) {
            return (
                <Placeholder
                    stretched
                    icon={<Icon56WifiOutline fill={'var(--red)'}/>}
                >
                    Нет подключения к интернету <br/> Включите интернет и перезагрузите приложение с очисткой кэша
                </Placeholder>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary