import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChatMessage, Sender } from './types';
import { streamChatMessage } from './services/geminiService';
import { ChatBubble } from './components/ChatBubble';
import { MessageInput } from './components/MessageInput';
import { AiIcon, UserIcon } from './components/icons';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: Sender.AI,
      text: "Ahlan! Ana AI dyal ala. Kifach nqder n3awnek lyoum?",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (userInput: string) => {
    if (!userInput.trim()) return;

    setError(null);
    setIsLoading(true);
    const newUserMessage: ChatMessage = { sender: Sender.User, text: userInput };
    setMessages(prev => [...prev, newUserMessage]);

    // Add a placeholder for the AI's response
    setMessages(prev => [...prev, { sender: Sender.AI, text: '' }]);

    try {
      const stream = streamChatMessage(userInput);
      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.sender === Sender.AI) {
            const updatedMessages = [...prev];
            updatedMessages[prev.length - 1] = {
              ...lastMessage,
              text: lastMessage.text + chunkText,
            };
            return updatedMessages;
          }
          return prev;
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error('Error streaming chat message:', err);
      setError(`Sorry, I couldn't get a response. Error: ${errorMessage}`);
      // Remove the empty AI placeholder on error
      setMessages(prev => prev.slice(0, prev.length - 1));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800/50 backdrop-blur-sm p-4 border-b border-gray-700 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
            <div className="p-2 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-lg">
                <AiIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-wider">ALA AI Chat</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg, index) => (
            <ChatBubble key={index} message={msg} />
          ))}
          {isLoading && messages[messages.length - 1].sender === Sender.User && (
            <ChatBubble message={{ sender: Sender.AI, text: '' }} isLoading={true} />
          )}
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-center">
                <p>{error}</p>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      <footer className="bg-gray-800/50 backdrop-blur-sm p-4 border-t border-gray-700">
        <div className="max-w-4xl mx-auto">
          <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </footer>
    </div>
  );
};

export default App;