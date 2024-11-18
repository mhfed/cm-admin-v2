import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000';

// Backend cần cấu hình cors chấp nhận url localhost:5173
export const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ['websocket'],
  withCredentials: true,
});

// Add to window object
declare global {
  interface Window {
    socket: unknown;
    socketConnected: boolean;
  }
}

socket.on('connect', () => {
  console.log('Socket connected');
  window.socket = socket;
  window.socketConnected = true;
});

socket.on('disconnect', () => {
  console.log('Socket disconnected');
  window.socketConnected = false;
});

socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error);
});

// Socket helper functions
export const joinRoom = (roomId: string) => {
  if (socket.connected) {
    socket.emit('join-room', { roomId });
  }
};

export const leaveRoom = (roomId: string) => {
  if (socket.connected) {
    socket.emit('leave-room', { roomId }); 
  }
};

export default socket; 