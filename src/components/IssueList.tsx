import React from 'react';

interface Issue {
    title: string;
    solution: string;
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
                        <p>{issue.solution}</p>
                    </div>
                ))
            ) : (
                <p>No issues found.</p>
            )}
        </div>
    );
};

export default IssueList;
