import observable from 'core/observable.ts';

import { useState } from 'react';

function handleClick() {
  observable.notify('User clicked button!');
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

observable.subscribe(logger);

function App() {
  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'This is a success message!', type: 'success' },
    { id: 2, message: 'This is an error message!', type: 'error' },
    { id: 3, message: 'This is an info message!', type: 'info' },
  ]);

  const removeNotification = id => {
    setNotifications(
      notifications.filter(notification => notification.id !== id),
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            handleClick();
            setCount(count => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* TODO: создать врапер для постоянного контейнера */}
      <div className="notification-container">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
