import React from 'react';
import {Root, CardGrid, Card, Button, ModalPage, ModalRoot, ModalPageHeader, PanelHeaderButton, Group, Placeholder, withAdaptivity, ViewWidth, withPlatform, ANDROID, PanelHeaderClose, IOS} from "@vkontakte/vkui";
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon16CancelCircleOutline from '@vkontakte/icons/dist/16/cancel_circle_outline';
import Icon16Recent from '@vkontakte/icons/dist/16/recent';
import Icon16CheckCircleOutline from '@vkontakte/icons/dist/16/check_circle_outline';
import Icon16ReplyOutline from '@vkontakte/icons/dist/16/reply_outline';
import Icon16InfoOutline from '@vkontakte/icons/dist/16/info_outline';
import Time from "../time/TimeComponent";
import TimeStr from "../time/TimeString";
import {Snackbar, Avatar, ActionSheetItem, ActionSheet} from '@vkontakte/vkui'
import Icon16Done from '@vkontakte/icons/dist/16/done'
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel'
import bridge from "@vkontakte/vk-bridge";
import { Icon24Dismiss } from '@vkontakte/icons';
import subscribeResult from '../notification/notification_subscribe'
import unsubscribeResult from '../notification/notification_unsubscribe';
import { Icon28NotificationAddOutline } from '@vkontakte/icons';
import { Icon24NotificationCheckOutline } from '@vkontakte/icons';
import getLaunchParams from '../getParams/search'

var tournamentsID = []  
var positionY 
var positionX
var stylesIsUpdated
var buttonHeight
var bellArrayButtons = {}
var bellArrayModalAndroid = {}
var bellArrayModalIOS = {}
var activeBells = []

function getPosition() {
    stylesIsUpdated = false
    buttonHeight = event.target.closest(".vkuiButton").getBoundingClientRect().height
    positionY = event.target.closest(".vkuiButton").getBoundingClientRect().top
    positionX = event.target.closest(".vkuiButton").getBoundingClientRect().left
}

var tournament = new XMLHttpRequest();
    tournament.open("POST", "https://api.wotblitz.ru/wotb/tournaments/list/?application_id=132530213b8f23d4c0e1d1f423c307a9&status=upcoming", false)
    tournament.send();

    var TournamentList = JSON.parse(tournament.responseText);

    var tournamentInfo = TournamentList['data'].reduce(
        function(p,e){
            var tournamentInfoRequest = new XMLHttpRequest();
            tournamentInfoRequest.open("POST", "https://api.wotblitz.ru/wotb/tournaments/info/?application_id=132530213b8f23d4c0e1d1f423c307a9&tournament_id=" + e.tournament_id + "&fields=teams", false)
            tournamentInfoRequest.send();
            p[e["tournament_id"]] = JSON.parse(tournamentInfoRequest.responseText).data[e["tournament_id"]].teams;
            return p;
        },
        {}
    );

    TournamentList['data'].map((elem) => {
        tournamentsID.push(elem.tournament_id)
    })

    bellArrayButtons = TournamentList['data'].reduce(
        (p, e) => {
            if (activeBells.indexOf(e.tournament_id) != -1) 
                p[e.tournament_id] = <Icon24NotificationCheckOutline width={19} height={21}/>
            else
                p[e.tournament_id] = <Icon28NotificationAddOutline width={19} height={21}/>
            return p
        }, {}
    )

    bellArrayModalAndroid = TournamentList['data'].reduce(
        (p, e) => {
            if (activeBells.indexOf(e.tournament_id) != -1)
                p[e.tournament_id] = <Icon24NotificationCheckOutline width={28} height={28}/>
            else
                p[e.tournament_id] = <Icon28NotificationAddOutline/>
            return p
        }, {}
    )

    bellArrayModalIOS = TournamentList['data'].reduce(
        (p, e) => {
            if (activeBells.indexOf(e.tournament_id) != -1)
                p[e.tournament_id] = <Icon24NotificationCheckOutline/>
            else    
                p[e.tournament_id] = <Icon28NotificationAddOutline width={24} height={24}/>
            return p
        }, {}
    )

class UpcommingComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            activeModal: null,
            modalHistory: [],
            popout: null,
            snackbar: null,
            elem: null,
            bellsButtons: bellArrayButtons,
            bellsAndroid: bellArrayModalAndroid,
            bellsIOS: bellArrayModalIOS
        };
        
        this.sendPost = this.sendPost.bind(this)
        this.shareTargetRef = React.createRef()
        this.shareLink = this.shareLink.bind(this)
    
        this.modalBack = () => {
            this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
    }

    subscribeToNotification(elem) {
        var snackbar
        if (activeBells.indexOf(elem.tournament_id) == -1) {
            subscribeResult(elem)
                .then(() => {
                    activeBells.push(elem.tournament_id)
                    bellArrayModalAndroid[elem.tournament_id] = <Icon24NotificationCheckOutline width={28} height={28}/>
                    bellArrayModalIOS[elem.tournament_id] = <Icon24NotificationCheckOutline/>
                    bellArrayButtons[elem.tournament_id] = <Icon24NotificationCheckOutline width={19} height={21}/>
                    this.setState({bellsAndroid: bellArrayModalAndroid})
                    this.setState({bellsIOS: bellArrayModalIOS})
                    this.setState({bellsButtons: bellArrayButtons})
                    snackbar =
                        <Snackbar
                            onClose={() => this.setState({ snackbar: null })}
                            duration="2000"
                            before={<Avatar size={24} style={{ background: 'var(--green)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
                        >
                            Вы будете уведомлены о начале регистрации на турнир
                        </Snackbar>
                    this.setState({snackbar : snackbar})    
                })
                .catch(() => {
                    snackbar =
                        <Snackbar
                            onClose={() => 
                                this.setState({ snackbar: null })
                            }
                            duration="1500"
                            before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
                        >
                            Ошибка при подписке на уведомление
                        </Snackbar> 
                    this.setState({snackbar : snackbar})       
                })
        } else {
            unsubscribeResult(elem)
                .then(() => {
                    activeBells.splice(activeBells.indexOf(elem.tournament_id), 1)
                    bellArrayModalAndroid[elem.tournament_id] = <Icon28NotificationAddOutline/>
                    bellArrayModalIOS[elem.tournament_id] = <Icon28NotificationAddOutline width={24} height={24}/>
                    bellArrayButtons[elem.tournament_id] = <Icon28NotificationAddOutline width={19} height={21}/>
                    this.setState({bellsAndroid: bellArrayModalAndroid})
                    this.setState({bellsIOS: bellArrayModalIOS})
                    this.setState({bellsButtons: bellArrayButtons})
                })
                .catch(() => {
                    snackbar =
                        <Snackbar
                            onClose={() => 
                                this.setState({ snackbar: null })
                            }
                            duration="1500"
                            before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
                        >
                            Ошибка при отписке от уведомления
                        </Snackbar> 
                    this.setState({snackbar : snackbar})     
                })
        }
    }

    buildRequest(elem) {
        let request
        let message = TimeStr(elem.start_at, "day") + " запланирован турнир \"" + elem.title + "\"" +
                      "\n\nНачало регистрации: " + TimeStr(elem.registration_start_at, "dayAndTime") +
                      "\nОкончание регистрации: " + TimeStr(elem.registration_end_at, "dayAndTime") +
                      "\n\nНачало боев: " + TimeStr(elem.start_at, "dayAndTime") +
                      "\nПодробнее можно узнать в приложении:"
        request = {
            "message": message,
            "attachments": "https://vk.com/app7446072#" + elem.tournament_id
        }
        return request
    }

    sendPost() {
        const successSnackbar =
            <Snackbar
                onClose={() => this.setState({ snackbar: null })}
                duration="2000"
                before={<Avatar size={24} style={{ background: 'var(--green)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
            >
                Запись опубликована
            </Snackbar> 

        const errorSnackbar =
            <Snackbar
                onClose={() => 
                    this.setState({ snackbar: null })
                }
                duration="2000"
                before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
            >
                Ошибка при публикации записи
            </Snackbar>

        let request = this.buildRequest(this.state.elem)

        bridge
            .send("VKWebAppShowWallPostBox", request)
            .then(data => {
                if (this.state.snackbar) return
                this.setState({snackbar: successSnackbar})
            }) 
            .catch(error => {
                if (this.state.snackbar) return
                this.setState({snackbar: errorSnackbar})
            })      
    }

    shareLink() {
        const errorSnackbar =
            <Snackbar
                onClose={() => 
                    this.setState({ snackbar: null })
                }
                duration="2000"
                before={<Avatar size={24} style={{ background: 'var(--red)' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
            >
                Ошибка при отправке ссылки
            </Snackbar>

        let link = "https://vk.com/app7446072#" + this.state.elem.tournament_id

        bridge
            .send("VKWebAppShare", {"link": link})
            .catch(error => {
                if (this.state.snackbar) return
                this.setState({snackbar: errorSnackbar})
            })      
    }

    openShareActionSheet(e) {
        getPosition()
        this.setState({elem: e})
        this.setState({ popout:
            <ActionSheet 
                onClose={() => this.setState({ popout: null })}
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                header="Как вы хотите поделиться турниром?"
                toggleRef={this.shareTargetRef.current}
            >
                <ActionSheetItem autoclose onClick={() => this.sendPost()}>
                    На стене
                </ActionSheetItem>
                <ActionSheetItem autoclose onClick={() => this.shareLink()}>
                    Отправить ссылку
                </ActionSheetItem>
          </ActionSheet>
        });
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];
    
        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }
    
        this.setState({
            activeModal,
            modalHistory
        });
    };

    componentDidMount() {
        if (window.location.hash != '' && !isOpenedFirstTime && tournamentsID.indexOf(Number(window.location.hash.slice(1))) != -1) {
            this.setActiveModal(Number(window.location.hash.slice(1)))
            isOpenedFirstTime = true
        }

        var activeSubscriptions = new XMLHttpRequest()
        var params = getLaunchParams()
        activeSubscriptions.open('GET', `https://wotbtournamentvkapp.ru/vkapp/activeSubscriptions?user_id=${params.vk_user_id}`, true)
        activeSubscriptions.send()
        activeSubscriptions.onload = () => {
            try {
                activeBells = JSON.parse(activeSubscriptions.responseText)  
            } catch (error) {
                console.log(error)
            }
            bellArrayButtons = TournamentList['data'].reduce(
                (p, e) => {
                    if (activeBells.indexOf(e.tournament_id) != -1) 
                        p[e.tournament_id] = <Icon24NotificationCheckOutline width={19} height={21}/>
                    else
                        p[e.tournament_id] = <Icon28NotificationAddOutline width={19} height={21}/>
                    return p
                }, {}
            )
            bellArrayModalAndroid = TournamentList['data'].reduce(
                (p, e) => {
                    if (activeBells.indexOf(e.tournament_id) != -1)
                        p[e.tournament_id] = <Icon24NotificationCheckOutline width={28} height={28}/>
                    else
                        p[e.tournament_id] = <Icon28NotificationAddOutline/>
                    return p
                }, {}
            )
            bellArrayModalIOS = TournamentList['data'].reduce(
                (p, e) => {
                    if (activeBells.indexOf(e.tournament_id) != -1)
                        p[e.tournament_id] = <Icon24NotificationCheckOutline/>
                    else    
                        p[e.tournament_id] = <Icon28NotificationAddOutline width={24} height={24}/>
                    return p
                }, {}
            ) 
            this.setState({bellsAndroid: bellArrayModalAndroid})
            this.setState({bellsIOS: bellArrayModalIOS})
            this.setState({bellsButtons: bellArrayButtons})
        }
    }

    componentDidUpdate() {
        var elem = document.getElementsByClassName("vkuiActionSheet--desktop")
        if (elem[0]) {
            var observer = new MutationObserver(function(mutations) {
                if (mutations && !stylesIsUpdated) {
                    if (document.documentElement.clientHeight - positionY < 200) {
                        positionY = positionY - elem[0].getBoundingClientRect().height - 5    
                    } else {
                        positionY += buttonHeight + 5    
                    }
                    elem[0].style.top = positionY + "px"
                    elem[0].style.left = positionX + "px"
                    stylesIsUpdated = true
                } 
            });
            
            observer.observe(elem[0], { attributes : true, attributeFilter : ['style'] }); 
        } 
    }

    render() {

        const isDesktop = this.props.viewWidth > ViewWidth.MOBILE;
        const isMobile = this.props.viewWidth <= ViewWidth.MOBILE;

        const platform = this.props.platform

        if (TournamentList.data.length !== 0) {
            const Modal = (
                <ModalRoot activeModal={this.state.activeModal} onClose={this.modalBack}>
                    {
                        TournamentList['data'].map((elem) =>
                            <ModalPage id={elem.tournament_id}
                                onClose={this.modalBack}
                                header={
                                    <ModalPageHeader 
                                        left={
                                            (isMobile && platform === IOS && <PanelHeaderButton onClick={() => this.subscribeToNotification(elem)}>{this.state.bellsIOS[elem.tournament_id]}</PanelHeaderButton>)
                                            ||
                                            (isMobile && platform === ANDROID && <PanelHeaderClose onClick={this.modalBack}></PanelHeaderClose>)
                                        }
                                        right={
                                            isMobile && (platform === IOS && <PanelHeaderButton onClick={this.modalBack}><Icon24Dismiss/></PanelHeaderButton> )
                                            ||
                                            (isMobile && platform === ANDROID && <PanelHeaderButton onClick={() => this.subscribeToNotification(elem)}>{this.state.bellsAndroid[elem.tournament_id]}</PanelHeaderButton>)
                                            ||
                                            (<PanelHeaderButton onClick={() => this.subscribeToNotification(elem)}>{this.state.bellsAndroid[elem.tournament_id]}</PanelHeaderButton>)
                                        }
                                    >
                                        Информация 
                                    </ModalPageHeader>
                                }
                            >
                                <div className="ModalPage__Content Turnament-Information__Group">
                                    <Group className="vkuiGroup--custom-separator">
                                        <h4>{elem.title}</h4>
                                    </Group>
                                    <Group className="vkuiGroup--custom-separator">
                                        <div className="TournamentCard__Info-Main-Title">Статус</div>
                                        <div style={{marginLeft: 5}}>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                Запланирован
                                            </span>
                                        </div>
                                        <br/>
                                        <div className="TournamentCard__Info-Main-Title">Регистрация</div>
                                        <div style={{marginLeft: 5}}>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                <Icon16CheckCircleOutline width={17} height={17}/><Time timestamp={elem.registration_start_at}/>
                                            </span>
                                            <br/>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                <Icon16CancelCircleOutline width={17} height={17}/><Time timestamp={elem.registration_end_at}/>
                                            </span>
                                        </div>
                                        <br/>
                                        
                                        <div className="TournamentCard__Info-Main-Title">Продолжительность боёв</div>
                                        <div style={{marginLeft: 5}}>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                <Icon16Recent width={17} height={17} style={{color: "green"}}/><Time timestamp={elem.start_at}/>
                                            </span>
                                            <br/>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                <Icon16Recent width={17} height={17} style={{color: "rgb(200, 0, 0)"}}/><Time timestamp={elem.end_at}/>
                                            </span>
                                        </div>
                                        <br/>

                                        <div className="TournamentCard__Info-Main-Title">Команды</div>
                                        <div style={{marginLeft: 5}}>
                                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                                <span style={{fontWeight: "450"}}>Максимальное число команд:&nbsp;</span> {tournamentInfo[elem["tournament_id"]].max}
                                            </span>
                                        </div>
                                    </Group>
                                    <Group className="vkuiGroup--custom-separator">
                                        <p className="Pre">
                                            {elem.description}
                                        </p>
                                    </Group>
                                </div>
                            </ModalPage>    
                        )
                    }
                </ModalRoot>
            );
            
            var List = (
                <Root modal={Modal} popout={this.state.popout}>
                    <CardGrid size={isDesktop ? "m" : "l"}>
                        {
                            TournamentList['data'].map((elem) => 
                                    <Card mode="outline">
                                            <div className={elem.status + " border"}></div>
                                            <div className="TournamentCard">
                                                <div className="TournamentCard__Header">{elem.title}</div>
                                                <div className="TornamentCard__Info">
                                                    <div className="TornamentCard__Info-Start">
                                                        <Icon20CalendarOutline width={23} height={23}/>
                                                        <div className="TornamentCard__Info-Start-Text">
                                                            <Time timestamp={elem.start_at} mode="day"/>
                                                        </div>
                                                    </div>
                                                    <div className="TournamentCard__Info-Main">
                                                        <div className="TournamentCard__Info-Main-Registration">
                                                            <div className="TournamentCard__Info-Main-Title">Регистрация</div>
                                                            <div style={{marginLeft: 5}}>
                                                                <span style={{display: "inline-flex", alignItems: "center"}}>
                                                                    <Icon16CheckCircleOutline width={17} height={17}/><Time timestamp={elem.registration_start_at}/>
                                                                </span>
                                                                <br/>
                                                                <span style={{display: "inline-flex", alignItems: "center"}}>
                                                                    <Icon16CancelCircleOutline width={17} height={17}/><Time timestamp={elem.registration_end_at}/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="TournamentCard__Info-Main-Start">
                                                            <div className="TournamentCard__Info-Main-Title">Начало боёв</div>
                                                            <div style={{marginLeft: 5}}>
                                                                <span style={{display: "inline-flex", alignItems: "center"}}>
                                                                    <Icon16Recent width={17} height={17}/><Time timestamp={elem.start_at} mode="dayAndTime"/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="TornamentCard__Footer">
                                                    <Button className="TornamentCard__Footer-Button" mode="outline" before={<Icon16InfoOutline/>} onClick={() => this.setActiveModal(elem.tournament_id)}>Подробнее</Button> 
                                                    <Button className="TornamentCard__Footer-Button TornamentCard__Footer-SmallButton" mode="outline" getRootRef={this.shareTargetRef} onClick={() => this.openShareActionSheet(elem)}><Icon16ReplyOutline/></Button>
                                                    <Button className="TornamentCard__Footer-Button TornamentCard__Footer-SmallButton" mode="outline" onClick={() => this.subscribeToNotification(elem)}>{this.state.bellsButtons[elem.tournament_id]}</Button>
                                                </div> 
                                            </div>
                                    </Card>
                            
                            )
                        }
                    </CardGrid> 
                    {this.state.snackbar}
                </Root>
            )
        } else {
            if (this.props.mode == "none") {
                List = (<span></span>)
            } else {
                var List = ( <Placeholder>Нет запланированных турниров</Placeholder>);
            }
        }
        return(List);
    }
}

const Upcomming = withPlatform(withAdaptivity(UpcommingComponent, { viewWidth: true }))

export default Upcomming;