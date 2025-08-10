import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, Users, User } from 'lucide-react';

// ============ HOOKS ============

// Hook for tracking browser online/offline status
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

// Hook for tracking user activity (active/idle)
const useUserActivity = (timeout = 300000) => { // 5 minutes default
  const [isActive, setIsActive] = useState(true);
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      setIsActive(true);
      setLastActivity(Date.now());
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsActive(false);
      }, timeout);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, resetTimeout, true);
    });

    resetTimeout();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimeout, true);
      });
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return { isActive, lastActivity };
};

// Hook for managing user presence
const useUserPresence = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', status: 'online', lastSeen: new Date() },
    { id: 2, name: 'Bob Smith', status: 'away', lastSeen: new Date(Date.now() - 600000) },
    { id: 3, name: 'Carol Davis', status: 'offline', lastSeen: new Date(Date.now() - 3600000) },
    { id: 4, name: 'David Wilson', status: 'online', lastSeen: new Date() },
  ]);

  const updateUserStatus = (userId, status) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status, lastSeen: new Date() }
        : user
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const statuses = ['online', 'away', 'offline'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      updateUserStatus(randomUser.id, randomStatus);
    }, 10000);

    return () => clearInterval(interval);
  }, [users]);

  return { users, updateUserStatus };
};

// ============ UTILITY FUNCTIONS ============

const formatLastSeen = (date) => {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return date.toLocaleDateString();
};

// ============ UI COMPONENTS ============

// Status indicator dot component
const StatusIndicator = ({ status, size = 'small' }) => {
  const sizeClasses = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-6 h-6'
  };

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400'
  };

  return (
    <div className={`${sizeClasses[size]} ${statusColors[status]} rounded-full border-2 border-white shadow-sm`} />
  );
};

// Avatar component
const Avatar = ({ name, size = 'medium', status }) => {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-10 h-10 text-base',
    large: 'w-16 h-16 text-xl'
  };

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold`}>
        {name.charAt(0)}
      </div>
      {status && (
        <div className="absolute -bottom-1 -right-1">
          <StatusIndicator status={status} size={size === 'large' ? 'large' : 'medium'} />
        </div>
      )}
    </div>
  );
};

// Individual user card component
const UserCard = ({ user, onStatusChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar name={user.name} status={user.status} />
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{user.status}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">
            {formatLastSeen(user.lastSeen)}
          </p>
          <select 
            value={user.status} 
            onChange={(e) => onStatusChange(user.id, e.target.value)}
            className="mt-1 text-xs border rounded px-2 py-1"
          >
            <option value="online">Online</option>
            <option value="away">Away</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Current user status component
const CurrentUserStatus = ({ isOnline, isActive, lastActivity }) => {
  const currentUserStatus = isOnline ? (isActive ? 'online' : 'away') : 'offline';

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <User className="mr-2" size={24} />
        Your Status
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar name="You" size="large" status={currentUserStatus} />
          <div>
            <p className="text-lg font-medium capitalize">{currentUserStatus}</p>
            <p className="text-sm text-gray-500">
              {isOnline ? (
                <span className="flex items-center">
                  <Wifi className="mr-1" size={16} />
                  Connected
                </span>
              ) : (
                <span className="flex items-center">
                  <WifiOff className="mr-1" size={16} />
                  No internet connection
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last activity:</p>
          <p className="text-sm font-medium">
            {new Date(lastActivity).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

// Status overview stats component
const StatusOverview = ({ users }) => {
  const onlineCount = users.filter(user => user.status === 'online').length;
  const awayCount = users.filter(user => user.status === 'away').length;
  const offlineCount = users.filter(user => user.status === 'offline').length;

  const StatCard = ({ label, count, status }) => (
    <div className={`bg-${status === 'online' ? 'green' : status === 'away' ? 'yellow' : 'gray'}-50 border border-${status === 'online' ? 'green' : status === 'away' ? 'yellow' : 'gray'}-200 rounded-lg p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-${status === 'online' ? 'green' : status === 'away' ? 'yellow' : 'gray'}-800 font-medium`}>{label}</p>
          <p className={`text-2xl font-bold text-${status === 'online' ? 'green' : status === 'away' ? 'yellow' : 'gray'}-900`}>{count}</p>
        </div>
        <StatusIndicator status={status} size="large" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard label="Online" count={onlineCount} status="online" />
      <StatCard label="Away" count={awayCount} status="away" />
      <StatCard label="Offline" count={offlineCount} status="offline" />
    </div>
  );
};

// User list component
const UserList = ({ users, updateUserStatus }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users className="mr-2" size={24} />
        All Users ({users.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onStatusChange={updateUserStatus}
          />
        ))}
      </div>
    </div>
  );
};

// Implementation notes component
const ImplementationNotes = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h3 className="font-semibold text-blue-900 mb-2">Implementation Notes:</h3>
      <ul className="text-sm text-blue-800 space-y-1">
        <li>• Browser online/offline detection using navigator.onLine</li>
        <li>• User activity tracking with mouse/keyboard/scroll events</li>
        <li>• Simulated multi-user presence system</li>
        <li>• Real implementation would need WebSocket or polling for live updates</li>
        <li>• Try disconnecting your internet to see offline status</li>
      </ul>
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">User Status Tracker</h1>
      <p className="text-gray-600">Track online, away, and offline status of users</p>
    </div>
  );
};

// ============ MAIN APP COMPONENT ============

export default function OnlineStatusTracker() {
  const isOnline = useOnlineStatus();
  const { isActive, lastActivity } = useUserActivity();
  const { users, updateUserStatus } = useUserPresence();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <CurrentUserStatus 
          isOnline={isOnline} 
          isActive={isActive} 
          lastActivity={lastActivity} 
        />
        <StatusOverview users={users} />
        <UserList users={users} updateUserStatus={updateUserStatus} />
        <ImplementationNotes />
      </div>
    </div>
  );
}