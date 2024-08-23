import React from 'react';

interface SearchBarProps {
    setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search issues..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
        </div>
    );
};

export default SearchBar;