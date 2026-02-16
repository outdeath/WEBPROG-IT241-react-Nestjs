import { useEffect, useState } from 'react';
import './App.css';

// Use environment variable for the backend URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/guestbook';

export default function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setEntries(data || []);
    } catch (error) {
      console.error('Error loading entries:', error);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const save = async (e) => {
    e.preventDefault();
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setForm({ name: '', message: '' });
      load();
    } catch (error) {
      console.error('Error saving entry:', error);
      alert('Failed to save entry. Please try again.');
    }
  };

  const remove = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;
    
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      load();
    } catch (error) {
      console.error('Error deleting entry:', error);
      alert('Failed to delete entry. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="app-container">
      <h1>🌟 My Guestbook</h1>
      
      <form className="guestbook-form" onSubmit={save}>
        <div className="form-group">
          <input 
            placeholder="Your Name" 
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
            required 
          />
        </div>
        <div className="form-group">
          <textarea 
            placeholder="Leave a message..." 
            value={form.message} 
            onChange={e => setForm({...form, message: e.target.value})} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Sign Guestbook</button>
      </form>

      <hr />

      {loading ? (
        <div className="loading">Loading entries...</div>
      ) : entries.length === 0 ? (
        <div className="empty-state">
          <p>📝 No entries yet!</p>
          <p>Be the first to sign the guestbook.</p>
        </div>
      ) : (
        <div className="entries-list">
          {entries.map(entry => (
            <div key={entry.id} className="entry-card">
              <div className="entry-header">
                <span className="entry-name">{entry.name}</span>
                <span className="entry-date">{formatDate(entry.created_at)}</span>
              </div>
              <div className="entry-message">{entry.message}</div>
              <button onClick={() => remove(entry.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
