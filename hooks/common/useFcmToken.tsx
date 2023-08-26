import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '@/helper/utils/firebase/firebase';

const useFcmToken = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Retrieve the notification permission status
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          // Check if permission is granted before retrieving the token
          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
              vapidKey:
                'BE-7SCgI6C8t2duJ_WnJwp96u0pvhD6kW-a6RJk_tR5NIcjQwIJawsERbj-5nCFZKpSYUJ1sZCKBWsB8RBDlaQM',
            });
            if (currentToken) {
                alert(currentToken)
              setToken(currentToken);
            } else {
                alert('No registration token available. Request permission to generate one.')
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          }
        }
      } catch (error) {
        alert(error)
        console.log('An error occurred while retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
