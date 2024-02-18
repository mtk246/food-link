import { useState } from 'react';

export default function Resources() {
    const [userInput, setUserInput] = useState('');
    const [conversationLog, setConversationLog] = useState([]);

    const handleClick = async () => {
        setConversationLog(prevLog => [
            ...prevLog,
            { role: 'user', content: userInput }
        ]);

        const response = await fetchGptResponse(userInput);

        setConversationLog(prevLog => [
            ...prevLog,
            { role: 'bot', content: response }
        ]);

        setUserInput('');
    };

    const fetchGptResponse = async (userMessage) => {
        try {
            const url = process.env.GPT_API_URL;
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.GPT_X_RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.GPT_X_RAPID_API_HOST
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'user', content: userMessage }
                    ]
                })
            };

            const response = await fetch(url, options);
            const result = await response.json();
            return result.choices[0].message.content;
        } catch (error) {
            console.error('Error fetching data:', error);
            return 'Error fetching data';
        }
    };

    return (
        <div className="chat-container container-fluid">
            <div className="page-header">
                <h2 className='display-5 fw-bold text-secondary'>FoodLink GPT</h2>
            </div>
            <div className="row">
                <div className='col col-md-2'>
                    <button
                        className="btn btn-outline-primary m-2"
                        onClick={handleClick}
                    >
                        <div className="d-flex align-items-center">
                            <div>
                                <p>icons</p>
                            </div>
                            <div>
                                What are some tips for grocery shopping on a budget?
                            </div>
                        </div>
                    </button>
                    <button
                        className="btn btn-outline-secondary m-2"
                        onClick={handleClick}
                    >
                        <div className="d-flex align-items-center">
                            <div>
                                <p>icons</p>
                            </div>
                            <div>
                                What are some tips for grocery shopping on a budget?
                            </div>
                        </div>
                    </button>
                    <button
                        className="btn btn-outline-success m-2"
                        onClick={handleClick}
                    >
                        <div className="d-flex align-items-center">
                            <div>
                                <p>icons</p>
                            </div>
                            <div>
                                What are some tips for grocery shopping on a budget?
                            </div>
                        </div>
                    </button>
                </div>
                <div className='col col-md-10 px-3'>
                    <div className="chat-log">
                        {conversationLog.map((message, index) => (
                            <div
                                key={index}
                                className={`chat-log__item chat-log__item--${message.role} ${message.role === 'user' ? 'float-end' : 'float-start'}`}
                            >
                                <h3 className="chat-log__author">
                                    {message.role === 'user' ? 'User' : 'Bot'}
                                </h3>
                                <div className="chat-log__message">
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-form">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-10 col-xs-8">
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        placeholder="Ask a question..."
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-2 col-xs-4">
                                    <button
                                        onClick={() => handleClick()}
                                        className="btn btn-success btn-block p-4"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
