import React from 'react';
import {Avatar, Snackbar, PanelHeader, Group, Tabs, HorizontalScroll, ConfigProvider, TabsItem, FixedLayout, Separator, withPlatform, ViewWidth} from '@vkontakte/vkui';
import Upcoming from "./getTournament/Upcoming";
import All from "./getTournament/all";
import RegStart from "./getTournament/RegistrationStart";
import RegFinish from "./getTournament/RegistrationFinish";
import Running from "./getTournament/Running";
import Finish from "./getTournament/Finish";
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel'
import bridge from "@vkontakte/vk-bridge";
import getLaunchParams from './getParams/search'
import { Icon16Done } from '@vkontakte/icons';

var isOpen = false

class Application extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
        contextOpened: false,
        mode: 'all',
		activeTab: 'all',
		snackbar: null
	  };
	}

	enableNotifications() {
		this.setState({snackbar: null})
		bridge
			.send("VKWebAppAllowNotifications")
			.then(() => {
				const snackbar =
						<Snackbar
							onClose={() => this.setState({ snackbar: null })}
							duration="1650"
							before={<Avatar size={24} style={{ background: 'var(--green)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
						>
							Вы включили уведомления
						</Snackbar>
				this.setState({snackbar: snackbar})			
			})
	}

	componentDidMount() {
        if (window.location.hash != '' && !isOpen && !sessionStorage.getItem(window.location.hash.slice(1))) {
            const errorSnackbar =
				<Snackbar
					onClose={() => 
						this.setState({ snackbar: null })
					}
					duration="2000"
					before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
				>
					Нет информации о турнире
				</Snackbar>
			this.setState({snackbar: errorSnackbar})		
            isOpen = true
        }

		var params = getLaunchParams()

		setTimeout(() => {
			console.log(sessionStorage.getItem('activeSubscriptions'))
			if (window.location.hash == '' && !JSON.parse(sessionStorage.getItem('activeSubscriptions')).length == 0 && params.vk_are_notifications_enabled == 0) {
				const errorSnackbar =
					<Snackbar
						onClose={() => 
							this.setState({ snackbar: null })
						}
						layout="vertical"
						duration="2650"
						action="Включить уведомления"
						onActionClick={() => {
							this.enableNotifications()
						}}
						before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
					>
						У вас есть активные подписки, но вы отключили уведомления <br/> Уведомления о нужных турнирах не придут 
					</Snackbar>
				this.setState({snackbar: errorSnackbar})		
			}
		}, 500)
    }

	render() {
		const isDesktop = this.props.viewWidth > ViewWidth.MOBILE;

		bridge.subscribe((e) => {
			if (e.detail.type === "VKWebAppDenyNotificationsResult") {
				const errorSnackbar =
					<Snackbar
						onClose={() => 
							this.setState({ snackbar: null })
						}
						duration="2500"
						layout="vertical"
						action="Включить уведомления"
						onActionClick={() => {
							this.enableNotifications()
						}}
						before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
					>
						Вы отключили уведомления от приложения <br/> Уведомления о нужных турнирах не придут 
					</Snackbar>
				this.setState({snackbar: errorSnackbar})
			}
		});

		if (isDesktop) {
			window.onfocus = (e) => {
				let x = window.scrollX
				let y = window.scrollY

				document.body.style.height = "105%"
				window.scroll(x, y + 5)
				window.scroll(x, y - 5)
				document.body.style.height = "100%"
			}
		}

		let content;
		if (this.state.activeTab === 'all') {
			content = <All/>
		}
		if (this.state.activeTab === 'upcoming') {
			content = <Upcoming/>;
		}
		if (this.state.activeTab === 'registration_started') {
			content = <RegStart/>;
		}
		if (this.state.activeTab === 'registration_finished') {
			content = <RegFinish/>;
		}
		if (this.state.activeTab === 'running') {
			content = <Running/>;
		}
		if (this.state.activeTab === 'finish') {
			content = <Finish/>;
		}
		return (
			//<ConfigProvider platform="ios">
			<span>
				<PanelHeader>Tурниры WoT Blitz</PanelHeader>
				<Group style={{paddingTop: 40}}>
					<FixedLayout vertical="top" filled>
						<Tabs>
							<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
								<TabsItem
									onClick={() => {
											this.setState({activeTab: 'all'})
											window.scrollTo(0, 0)
										}
									}
									selected={this.state.activeTab === 'all'}
								>Все</TabsItem>
								<TabsItem
									onClick={() => {
											this.setState({activeTab: 'registration_started'})
											window.scrollTo(0, 0)
										}
									}
									selected={this.state.activeTab === 'registration_started'}
								>Идёт регистрация</TabsItem>
								<TabsItem
									onClick={() => {
											this.setState({activeTab: 'upcoming'})
											window.scrollTo(0, 0)
										}
									}
									selected={this.state.activeTab === 'upcoming'}
								>Запланированные</TabsItem>
								<TabsItem
									onClick={() => { 
											this.setState({activeTab: 'registration_finished'})
											window.scrollTo(0, 0)
										}
									}
									selected={this.state.activeTab === 'registration_finished'}
								>Регистрация завершена</TabsItem>
								<TabsItem
									onClick={() => {
											this.setState({activeTab: 'running'})
											window.scrollTo(0, 0)	
										}
									}
									selected={this.state.activeTab === 'running'}
								>Идут бои</TabsItem>
								<TabsItem
									onClick={() => { 
											this.setState({activeTab: 'finish'})
											window.scrollTo(0, 0)
										}
									}
									selected={this.state.activeTab === 'finish'}
								>Бои завершены</TabsItem>
							</HorizontalScroll>
						</Tabs>
						<Separator wide />
					</FixedLayout>
					{content}
					{this.state.snackbar} 
				</Group>
			</span>
			//</ConfigProvider>
		);
	}
}



const App = () => {
	return (
		<Application/>	
	);
}

export default withPlatform(App);

