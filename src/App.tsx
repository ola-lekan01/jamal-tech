import React, { useState, useEffect } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

interface Issue {
    title: string;
    solution: string;
}

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        fetch('/issues.json')
            .then(response => response.json())
            .then(data => setIssues(data))
            .catch(error => console.error('Error loading issues:', error));
    }, []);

    const filteredIssues = issues.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <header className="header">
                <img src="/logo.png" alt="Logo" className="logo" />
                <h1>Common Laptop Issues</h1>
            </header>
            <main className="main-content">
                <SearchBar setSearchTerm={setSearchTerm} />
                {searchTerm && <IssueList issues={filteredIssues} />}
            </main>
        </div>
    );
};

export default App;
