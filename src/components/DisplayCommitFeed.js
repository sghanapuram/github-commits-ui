import React from 'react';

const DisplayCommitFeed = ({ data }) => (
    <table className="commits-table">
        <thead>
            <tr>
                <th>Timestamp</th>
                <th>Commit</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, i) => (
                    <tr key={ i }>
                        <td className="date">
                            { item.commit.author.date }
                        </td>
                        <td className="message">
                            <a
                                className="commit-link"
                                href={ item.html_url }
                                target="_blank"
                                rel="noreferrer"
                            >
                                { item.commit.message }
                            </a>
                        </td>
                        <td className="author">
                            { item.commit.author.name }
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);

export default DisplayCommitFeed;
