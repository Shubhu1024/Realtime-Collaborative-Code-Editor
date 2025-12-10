import {io} from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    // Use env var if provided; otherwise default to localhost:5000
    const backendUrl =
      process.env.REACT_APP_BACKEND_URL ||
      `${window.location.protocol}//${window.location.hostname}:3001`;

    return io(backendUrl, options);
};