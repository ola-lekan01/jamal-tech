import React, { useState } from 'react';

interface ProblemSolution {
    title: string;
    problem: string;
    solutions: string[];
}

const data: ProblemSolution[] = [
    {
        title: 'Slow Performance',
        problem: 'Laptop runs sluggishly, takes time to open apps, or freezes.',
        solutions: [
            'Free up disk space: Delete unnecessary files, empty recycle bin, and uninstall unused programs.',
            'Manage startup programs: Prevent unnecessary programs from launching at startup.',
            'Close background processes: End resource-intensive tasks running in the background.',
            'Update software: Ensure your operating system and applications are up-to-date.',
            'Check for malware: Run a full system scan with antivirus software.',
            'Consider hardware upgrades: If performance is still poor, adding more RAM or upgrading your storage might help.',
        ],
    },
    {
        title: 'Blue Screens of Death (BSOD)',
        problem: 'Laptop unexpectedly shuts down or displays a blue screen with error messages.',
        solutions: [
            'Update drivers: Ensure all device drivers are up-to-date.',
            'Check for overheating: Clean vents and consider using a cooling pad.',
            'Run a memory test: Check for RAM issues.',
            'Scan for malware: Remove any potential threats.',
            'Create a system restore point: This allows you to revert to a previous working state.',
            'Reinstall operating system: If other solutions fail, a clean install might be necessary.',
        ],
    },
    {
        title: 'Malware and Viruses',
        problem: 'Slow performance, pop-ups, unusual behavior, data loss.',
        solutions: [
            'Run a full system scan: Use reputable antivirus software.',
            'Update antivirus software: Ensure it has the latest virus definitions.',
            'Be cautious with downloads: Avoid suspicious websites and attachments.',
            'Keep software updated: Install security patches to protect against vulnerabilities.',
        ],
    },
    {
        title: 'Wi-Fi Issues',
        problem: 'Slow or intermittent Wi-Fi connection.',
        solutions: [
            'Restart router and modem: This can resolve temporary connection issues.',
            'Check Wi-Fi signal strength: Move closer to the router or use a Wi-Fi extender.',
            'Update network drivers: Ensure your network adapter has the latest drivers.',
            'Forget and reconnect: Remove and re-add the Wi-Fi network.',
            'Troubleshoot network adapter: Check for hardware issues.',
        ],
    },
];

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="results">
                {filteredData.map((item, index) => (
                    <div key={index} className="result-item">
                        <h3>{item.title}</h3>
                        <p>{item.problem}</p>
                        <ul>
                            {item.solutions.map((solution, i) => (
                                <li key={i}>{solution}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
