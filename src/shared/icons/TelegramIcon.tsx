import { memo, SVGAttributes } from 'react';

type TelegramIconSvgProps = SVGAttributes<SVGElement>;

const TelegramIconSvg = ({ ...props }: TelegramIconSvgProps) => {
  return (
    <svg
      fill='none'
      height='40'
      viewBox='0 0 40 40'
      width='40'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95433 31.0457 0 20 0C8.95433 0 0 8.95433 0 20ZM16.3333 29.1667L16.6736 24.0686L16.6733 24.0683L25.9474 15.6992C26.3544 15.3379 25.8586 15.1617 25.3183 15.4894L13.8728 22.7102L8.92892 21.1672C7.86125 20.8403 7.85358 20.1067 9.16858 19.5792L28.4336 12.1507C29.3135 11.7512 30.1627 12.3621 29.8268 13.7088L26.546 29.1693C26.3169 30.2679 25.6531 30.5307 24.7333 30.0232L19.7356 26.3308L17.3333 28.6667C17.3257 28.674 17.3182 28.6813 17.3107 28.6887C17.0421 28.9502 16.8197 29.1667 16.3333 29.1667Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const TelegramIcon = memo(TelegramIconSvg);
