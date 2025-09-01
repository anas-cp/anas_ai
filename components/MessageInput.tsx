
import React, { useState, KeyboardEvent } from 'react';
import { SendIcon } from './icons';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-gray-800 border border-gray-700 rounded-full p-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow duration-200">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={isLoading ? "Kantssena jawab..." : "Kteb lmessage dyalk..."}
        className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none px-4"
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={isLoading || !input.trim()}
        className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        aria-label="Send message"
      >
        <SendIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
