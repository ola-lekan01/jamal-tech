import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import './styles.css';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

interface Issue {
    title: string;
    solutions: string[];
}

const MainPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [issues, setIssues] = useState<Issue[]>([]);
    const [showContactPrompt, setShowContactPrompt] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/issues.json')
            .then(response => response.json())
            .then(data => setIssues(data))
            .catch(error => console.error('Error loading issues:', error));
    }, []);

    const filteredIssues = issues.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (searchTerm && filteredIssues.length === 0) {
            setShowContactPrompt(true); // Show the prompt if no results are found
        } else {
            setShowContactPrompt(false);
        }
    }, [searchTerm, filteredIssues]);

    const handleContactClick = () => {
        navigate('/contact'); // Navigate to the contact page when user clicks
    };

    return (
        <div className="app-container">
            <header className="header">
                <img src="/logo.png" alt="Logo" className="logo" />
                <h1>Common Laptop Issues</h1>
            </header>
            <main className="main-content">
                <SearchBar setSearchTerm={setSearchTerm} />
                {showContactPrompt && (
                    <div className="contact-prompt">
                        <p>We do not seem to find a related solution. Would you like one of our agents to contact you?</p>
                        <button onClick={handleContactClick}>Click here to talk to us directly</button>
                    </div>
                )}
                {searchTerm && filteredIssues.length > 0 && <IssueList issues={filteredIssues} />}
            </main>
        </div>
    );
};



const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
