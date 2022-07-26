import { memo, SVGAttributes } from 'react';

type TwitterIconSvgProps = SVGAttributes<SVGElement>;

const TwitterIconSvg = ({ ...props }: TwitterIconSvgProps) => {
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
        d='M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95433 31.0457 0 20 0ZM19.443 16.9483L19.401 16.2562C19.2751 14.4626 20.3802 12.8242 22.129 12.1887C22.7725 11.9627 23.8637 11.9345 24.5772 12.1322C24.8569 12.217 25.3886 12.4994 25.7662 12.7537L26.4517 13.2197L27.2072 12.9797C27.6269 12.8525 28.1865 12.6407 28.4382 12.4994C28.6761 12.3723 28.8859 12.3017 28.8859 12.3441C28.8859 12.5842 28.3683 13.4033 27.9347 13.8553C27.3471 14.4908 27.515 14.5473 28.7041 14.1236C29.4176 13.8835 29.4315 13.8835 29.2917 14.1518C29.2077 14.2931 28.774 14.7874 28.3123 15.2393C27.5289 16.0162 27.487 16.1009 27.487 16.7506C27.487 17.7533 27.0113 19.8436 26.5357 20.9876C25.6543 23.1343 23.7657 25.3517 21.8772 26.4674C19.2192 28.0352 15.6797 28.4306 12.7 27.5126C11.7067 27.2018 10 26.4109 10 26.2697C10 26.2273 10.5176 26.1708 11.1472 26.1567C12.4622 26.1285 13.7772 25.7612 14.8963 25.1116L15.6518 24.6597L14.7844 24.3631C13.5533 23.9393 12.4482 22.9648 12.1684 22.0468C12.0844 21.7502 12.1124 21.7361 12.8958 21.7361L13.7072 21.722L13.0217 21.3972C12.2103 20.9876 11.4689 20.2955 11.1052 19.5893C10.8393 19.0809 10.5037 17.7957 10.6016 17.6968C10.6295 17.6545 10.9233 17.7392 11.2591 17.8522C12.2243 18.2052 12.3502 18.1205 11.7907 17.5273C10.7414 16.454 10.4197 14.858 10.9233 13.3468L11.1612 12.6689L12.0844 13.5869C13.9731 15.4371 16.1974 16.5387 18.7435 16.8636L19.443 16.9483Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const TwitterIcon = memo(TwitterIconSvg);
