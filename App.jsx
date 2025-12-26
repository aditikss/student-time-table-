import { useState } from 'react';
import { TimetableProvider } from './contexts/TimetableContext';
import Header from './components/Header';
import TimetableForm from './components/TimetableForm';
import TimetableList from './components/TimetableList';
import CalendarView from './components/CalendarView';
import Notifications from './components/Notifications';
import Timer from './components/Timer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('calendar');
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <TimetableProvider>
      <div className="app">
        <Header
          currentView={currentView}
          onViewChange={setCurrentView}
          onAddClick={handleAddClick}
        />

        <Notifications />
        <Timer />

        <main className="app-main">
          {currentView === 'list' ? <TimetableList /> : <CalendarView />}
        </main>

        {showForm && <TimetableForm onClose={handleCloseForm} />}
      </div>
    </TimetableProvider>
  );
}

export default App;
