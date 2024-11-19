import { useEffect, useRef } from 'react';
import { socket } from '@services/socket';

export const useSocket = () => {
  const socketRef = useRef(socket);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, []);

  return socketRef.current;
}; 