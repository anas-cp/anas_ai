
import React from 'react';
import { ChatMessage, Sender } from '../types';
import { AiIcon, UserIcon } from './icons';

interface ChatBubbleProps {
  message: ChatMessage;
  isLoading?: boolean;
}

const LoadingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1">
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
  </div>
);

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isLoading = false }) => {
  const isUser = message.sender === Sender.User;

  const bubbleClasses = isUser
    ? 'bg-indigo-600 text-white rounded-br-none'
    : 'bg-gray-700 text-gray-200 rounded-bl-none';

  const layoutClasses = isUser ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex items-start gap-3 ${layoutClasses}`}>
      <div className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-gray-800 border border-gray-600">
        {isUser ? <UserIcon className="w-5 h-5 text-indigo-400" /> : <AiIcon className="w-5 h-5 text-purple-400" />}
      </div>
      <div className={`px-4 py-3 rounded-2xl max-w-lg md:max-w-xl lg:max-w-2xl whitespace-pre-wrap ${bubbleClasses}`}>
        {isLoading ? <LoadingIndicator /> : message.text || <span className="opacity-50">...</span>}
      </div>
    </div>
  );
};
