import { store } from 'react-notifications-component';



export const notificationMessage = (title , message , type) => {
 
    store.addNotification({
        title: title,
        message: message ,
        type: type,
        insert: "top",
        container: "top-right",
        dismiss: {
          duration: 4000,
          onScreen: true
        }
      });
    
}
