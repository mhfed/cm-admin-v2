import { useSocket } from '@hooks/useSocket';
import { joinRoom, leaveRoom } from '@/services/socket';
import { useEffect, useState } from 'react';

const ExampleSocket = () => {
  const socket = useSocket();

  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [orderId, setOrderId] = useState<string>('');
  
  useEffect(() => {
    if (window.socketConnected) {
      joinRoom(`order-${orderId}`);
      
      socket.on('online-users', (users) => {
        setOnlineUsers(users);
      });
    }
    
    return () => {
      leaveRoom(`order-${orderId}`);
      socket.off('online-users');
    };
  }, [orderId]);

  // Rest of component code
};

export default ExampleSocket;