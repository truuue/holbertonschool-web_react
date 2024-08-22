import React from 'react'

const NotificationItem = ({type, html, value}) => {
  let listItems;

  if (value) {
    listItems = (
      <li data-notification-type={type}>{value}</li>
    )
  } else {
    listItems = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    )
  }

  return listItems
}

export default NotificationItem