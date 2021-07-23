import React from 'react';
import {View, Panel, PanelHeader, Group, Tabs, HorizontalScroll, TabsItem, AppRoot, AdaptivityProvider, ConfigProvider, FixedLayout, Separator} from '@vkontakte/vkui';
import Upcoming from "./getTournament/Upcoming";
import All from "./getTournament/all";
import RegStart from "./getTournament/RegistrationStart";
import RegFinish from "./getTournament/RegistrationFinish";
import Running from "./getTournament/Running";
import Finish from "./getTournament/Finish";

	
class Application extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
        contextOpened: false,
        mode: 'all',
		activeTab: 'all'
	  };
	}

	render() {
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
			<View>
				<Panel>
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
					</Group>
				</Panel>
			</View>
			//</ConfigProvider>
		);
	}
}



const App = () => {
	return (
		<AdaptivityProvider>
			<AppRoot>
				<Application/>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;

