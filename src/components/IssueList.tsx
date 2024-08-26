import React from 'react';

interface Issue {
    title: string;
    solutions: string[];
}

interface IssueListProps {
    issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
    return (
        <div className="issue-list">
            {issues.length > 0 ? (
                issues.map((issue, index) => (
                    <div key={index} className="issue-item">
                        <h2>{issue.title}</h2>
                        <ul>
                            {issue.solutions.map((solution, i) => (
                                <li key={i}>{solution}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No issues found.</p>
            )}
        </div>
    );
};

export default IssueList;