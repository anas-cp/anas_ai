
import React from 'react';

interface IconProps {
  className?: string;
}

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="24"
    height="24"
  >
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

export const AiIcon: React.FC<IconProps> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width="24"
      height="24"
    >
        <path d="M12.75 3.375a.75.75 0 00-1.5 0V4.5h-1.5a.75.75 0 000 1.5h1.5v1.5a.75.75 0 001.5 0V6h1.5a.75.75 0 000-1.5h-1.5V3.375z" />
        <path fillRule="evenodd" d="M9.06 8.94l-.348.347a.75.75 0 001.06 1.06l.348-.347a.75.75 0 00-1.06-1.06zM15 11.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
        <path d="M11.25 18.75a.75.75 0 001.5 0v-1.5h1.5a.75.75 0 000-1.5h-1.5v-1.5a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5h1.5v1.5z" />
        <path fillRule="evenodd" d="M5.558 8.442a.75.75 0 00-1.06 1.06l.347.348a.75.75 0 001.06-1.06l-.347-.348zM14.004 8.096a.75.75 0 00-1.06-1.06l-.348.347a.75.75 0 001.06 1.06l.348-.347zM8.94 15.06l-.347.348a.75.75 0 001.06 1.06l.347-.348a.75.75 0 00-1.06-1.06z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.875 2.25a.75.75 0 00-.75.75v.516c-.663.093-1.3.268-1.898.512a.75.75 0 00.493 1.411c.548-.22 1.13-.374 1.755-.42V6a.75.75 0 001.5 0V4.52c.626.046 1.207.199 1.755.42a.75.75 0 00.493-1.41c-.598-.245-1.235-.42-1.898-.513V3a.75.75 0 00-.75-.75z" clipRule="evenodd" />
        <path d="M12 21.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5zM4.065 12A7.935 7.935 0 0112 4.065 7.935 7.935 0 0119.935 12 7.935 7.935 0 0112 19.935 7.935 7.935 0 014.065 12z" />
    </svg>
);
