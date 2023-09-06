import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요. 오전입니다.',
  },
  {
    id: 2,
    message: '안녕하세요. 오후입니다.',
  },
  {
    id: 3,
    message: '안녕하세요. 저녁입니다.',
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  };

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval( () => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);

        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });

        clearInterval(timer);
      }
    }, 1000);
  };

  render() {
    return (
      <div>
        {
          this.state.notifications.map( (noti) => {
            return <Notification key={noti.id} id={noti.id} message={noti.message} />;
          })
        }
      </div>
    );
  };
}

export default NotificationList;