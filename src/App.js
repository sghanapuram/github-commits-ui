import React, { Fragment, useState, useEffect } from 'react';
import { Octokit } from "@octokit/core";
import DisplayCommitFeed from './components/DisplayCommitFeed';
import './App.css';

const App = () => {
    const octokit = new Octokit({ auth: '90488c9baf6e540302dde5c0b7459903d2fbfb8e' });
    const count = 10;
    const[commits, setCommits] = useState([]);
    const[commitsPerPage, setCommitsPerPage] = useState(count);
    const[error, setError] = useState(false);
    const location = window.location.pathname;
    const params = location.split('/');
    const getCommits = async () => {
        try {
            const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: params[1],
                repo: params[2]
            });
            setCommits(response.data);
        } catch {
            setError(true);
        }
    }
    useEffect(() => {
        getCommits();
    }, []);
    return (
        <div className="app">
            <header className="header">
                Commit Feed
            </header>
            <main className="body">
                <p>{ location }</p>
                {
                    error && <p className="error-message">No commits found</p>
                }
                {
                    (commits && commits.length > 0) &&
                        <Fragment>
                            <DisplayCommitFeed
                                data={ commits.slice(0, commitsPerPage) }
                            />
                            <button
                                type="button"
                                className="load-more"
                                disabled={ commitsPerPage > commits.length }
                                onClick={ () => setCommitsPerPage(commitsPerPage + count) }
                            >
                                Load More
                            </button>
                        </Fragment>
                }
            </main>
        </div>
    );
};

export default App;
