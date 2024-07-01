// Imports
// ------
import React from 'react';

// Styles
// ------
import { Jacket } from './styles';

// Component
// ------
const Icon = ({ type, className, onClick }) => {
	if (type === 'facebook')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M24,12.072A12,12,0,1,0,10.125,23.926V15.541H7.078V12.072h3.047V9.428c0-3.007,1.792-4.669,4.532-4.669a18.611,18.611,0,0,1,2.687.234V7.947H15.83a1.734,1.734,0,0,0-1.947,1.49,1.71,1.71,0,0,0-.008.385v2.25H17.2l-.532,3.469h-2.8v8.385A12,12,0,0,0,24,12.072Z' />
			</Jacket>
		);

	if (type === 'codepen')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M24,8.2C24,8.2,24,8.2,24,8.2c0-0.1,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1 c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l-11-7.3 c-0.3-0.2-0.8-0.2-1.1,0l-11,7.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1v7.3 c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1 c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0l11,7.3c0.2,0.1,0.4,0.2,0.6,0.2 c0.2,0,0.4-0.1,0.6-0.2l11-7.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1 c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1V8.3 C24,8.3,24,8.3,24,8.2z M13,3l8.1,5.4l-3.6,2.4l-4.5-3V3z M11,3v4.8l-4.5,3L2.9,8.3L11,3z M2.1,10.3L4.6,12l-2.6,1.7V10.3z M11,21 l-8.1-5.4l3.6-2.4l4.5,3V21z M12,14.4L8.4,12L12,9.6l3.6,2.4L12,14.4z M13,21v-4.8l4.5-3l3.6,2.4L13,21z M21.9,13.7L19.4,12l2.6-1.7 V13.7z' />
			</Jacket>
		);

	if (type === 'dribbble')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M22.1,13.6c-0.4-0.1-3.2-1-6.4-0.4c1.3,3.7,1.9,6.7,2,7.3C20,19,21.7,16.5,22.1,13.6z M16,21.5c-0.2-0.9-0.7-4-2.2-7.8 c0,0,0,0-0.1,0c-5.8,2-7.9,6-8,6.4c1.7,1.4,3.9,2.2,6.3,2.2C13.4,22.3,14.8,22,16,21.5z M4.4,18.9c0.2-0.4,3-5.1,8.3-6.8 c0.1,0,0.3-0.1,0.4-0.1c-0.3-0.6-0.5-1.2-0.8-1.7c-5.1,1.5-10.1,1.5-10.5,1.5c0,0.1,0,0.2,0,0.3C1.8,14.6,2.7,17.1,4.4,18.9z M2,9.9 c0.5,0,4.7,0,9.5-1.2c-1.7-3-3.5-5.6-3.8-5.9C4.8,4.1,2.6,6.7,2,9.9z M9.6,2.1c0.3,0.4,2.1,2.9,3.8,6c3.6-1.4,5.2-3.4,5.4-3.7 C17,2.7,14.6,1.8,12,1.8C11.2,1.8,10.4,1.9,9.6,2.1z M19.9,5.5c-0.2,0.3-1.9,2.5-5.7,4c0.2,0.5,0.5,1,0.7,1.5 c0.1,0.2,0.1,0.4,0.2,0.5c3.4-0.4,6.8,0.3,7.1,0.3C22.2,9.5,21.4,7.3,19.9,5.5z'
				/>
			</Jacket>
		);

	if (type === 'instagram')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<path d='M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z' />
				<path d='M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z' />
				<circle cx='17.872' cy='6.128' r='1.32' />
			</Jacket>
		);

	if (type === 'linkedin')
		return (
			<Jacket
				height='24px'
				width='24px'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				className={className}
				onClick={onClick}>
				<path d='M23,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V1C24,0.4,23.6,0,23,0z M7.1,20.5H3.6V9h3.6 V20.5z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1C7.4,6.5,6.5,7.4,5.3,7.4z M20.5,20.5h-3.6 v-5.6c0-1.3,0-3-1.8-3c-1.9,0-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6h0c0.5-0.9,1.6-1.8,3.4-1.8c3.6,0,4.3,2.4,4.3,5.5V20.5z' />
			</Jacket>
		);

	if (type === 'arrow-right')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M5 12H18.1818' strokeLinecap='square' />
				<path d='M12 5L19 12L12 19' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-down')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M12 5L12 18.1818' strokeLinecap='square' />
				<path d='M19 12L12 19L5 12' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-left')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 12L5.81818 12' strokeLinecap='square' />
				<path d='M12 19L5 12L12 5' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-up')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M12 19L12 5.81818' strokeLinecap='square' />
				<path d='M5 12L12 5L19 12' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'return' || type === 'enter')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 7V11H5.83L9.41 7.41L8 6L2 12L8 18L9.41 16.59L5.83 13H21V7H19Z' />
			</Jacket>
		);

	if (type === 'arrow-up-right')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M7 17L16.5 7.5' strokeLinecap='square' />
				<path d='M7 7H17V17' strokeLinecap='square' />
			</Jacket>
		);

	if (type === 'arrow-left')
		return (
			<Jacket
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M19 12L5.81818 12' />
				<path d='M12 19L5 12L12 5' />
			</Jacket>
		);

	if (type === 'warning')
		return (
			<Jacket
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M15.8,12.526,9.483.88A1.668,1.668,0,0,0,8.8.2,1.693,1.693,0,0,0,6.516.88L.2,12.526A1.678,1.678,0,0,0,1.686,15H14.314a1.7,1.7,0,0,0,.8-.2,1.673,1.673,0,0,0,.687-2.274ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13ZM9,9.5a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,7,9.5v-4A.5.5,0,0,1,7.5,5h1a.5.5,0,0,1,.5.5Z' />
			</Jacket>
		);
	if (type === 'plus')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<path d='M12 5v14' />
				<path d='M5 12h14' />
			</Jacket>
		);

	if (type === 'Awwwards')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M65.6002 69.4L56.5002 36H44.7002C44.7002 36 39.1002 58.3 36.4002 69.4C33.6002 61.6 25.9002 36 25.9002 36H14.2002L30.3002 87H41.7002L50.5002 55.8L59.8002 87H70.6002L86.9002 36H74.7002L65.6002 69.4ZM97.0002 70.4C92.5002 70.4 88.8002 74.3 88.8002 79.1C88.8002 83.9 92.5002 87.8 97.0002 87.8C101.5 87.8 105.2 83.9 105.2 79.1C105.2 74.3 101.6 70.4 97.0002 70.4Z' />
			</Jacket>
		);

	if (type === 'CSSDA')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M72.6001 48.1999L62.5001 38.2999L52.7001 48.1999H47.1001L68.0001 27.3999H46.0001L25.1001 48.1999H17.1001V49.6999H102.9V48.1999H72.6001Z' />
				<path d='M17.1001 72H47.2001L57.0001 81.8L67.0001 72H72.4001L51.6001 92.6H73.5001L84.5001 81.8L94.4001 72H102.9V70.5H17.1001V72Z' />
				<path d='M33.7001 57.2999C34.1001 57.2999 34.5001 57.3999 34.9001 57.4999C35.3001 57.5999 35.6001 57.7999 36.0001 57.8999L36.8001 55.7999C35.8001 55.2999 34.8001 55.0999 33.8001 55.0999C32.8001 55.0999 32.0001 55.2999 31.3001 55.6999C30.6001 56.0999 30.0001 56.6999 29.7001 57.4999C29.3001 58.2999 29.1001 59.0999 29.1001 60.1999C29.1001 61.7999 29.5001 62.9999 30.3001 63.8999C31.1001 64.7999 32.2001 65.1999 33.7001 65.1999C34.7001 65.1999 35.6001 64.9999 36.5001 64.6999V62.4999C36.1001 62.6999 35.7001 62.7999 35.3001 62.8999C34.9001 62.9999 34.5001 63.0999 34.1001 63.0999C32.7001 63.0999 32.0001 62.1999 32.0001 60.2999C32.0001 59.3999 32.2001 58.6999 32.5001 58.1999C32.6001 57.5999 33.1001 57.2999 33.7001 57.2999Z' />
				<path d='M45.4003 63C44.9003 63 44.5003 62.8999 43.9003 62.7999C43.4003 62.6999 42.8003 62.5 42.3003 62.2V64.5C42.8003 64.7 43.2003 64.9 43.7003 65C44.1003 65.1 44.7003 65.0999 45.3003 65.0999C46.1003 65.0999 46.8003 64.9999 47.3003 64.6999C47.9003 64.3999 48.3003 64.0999 48.6003 63.5999C48.9003 63.0999 49.1003 62.6 49.1003 62C49.1003 61.3 48.9003 60.8 48.6003 60.4C48.3003 60 47.7003 59.6 46.9003 59.2C46.0003 58.8 45.5003 58.5 45.3003 58.4C45.1003 58.2 45.0003 58.1 45.0003 57.9C45.0003 57.7 45.1003 57.6 45.2003 57.5C45.4003 57.4 45.6003 57.2999 45.9003 57.2999C46.6003 57.2999 47.3003 57.5 48.3003 57.9L49.1003 55.9C48.1003 55.4 47.0003 55.2 46.0003 55.2C44.9003 55.2 44.0003 55.5 43.3003 56C42.6003 56.5 42.3003 57.1999 42.3003 58.0999C42.3003 58.5999 42.4003 58.9999 42.5003 59.2999C42.7003 59.6999 42.9003 60 43.2003 60.2C43.5003 60.5 44.0003 60.7 44.6003 61C45.3003 61.3 45.7003 61.4999 45.9003 61.5999C46.1003 61.6999 46.2003 61.8 46.3003 61.9C46.4003 62 46.4003 62.0999 46.4003 62.2999C46.4003 62.4999 46.3003 62.6999 46.1003 62.7999C46.0003 62.8999 45.8003 63 45.4003 63Z' />
				<path d='M57.8002 63C57.3002 63 56.9002 62.8999 56.3002 62.7999C55.8002 62.6999 55.2002 62.5 54.7002 62.2V64.5C55.2002 64.7 55.6002 64.9 56.1002 65C56.5002 65.1 57.1002 65.0999 57.7002 65.0999C58.5002 65.0999 59.2002 64.9999 59.7002 64.6999C60.3002 64.3999 60.7002 64.0999 61.0002 63.5999C61.3002 63.0999 61.5002 62.6 61.5002 62C61.5002 61.3 61.3002 60.8 61.0002 60.4C60.7002 60 60.1002 59.6 59.3002 59.2C58.4002 58.8 57.9002 58.5 57.7002 58.4C57.5002 58.2 57.4002 58.1 57.4002 57.9C57.4002 57.7 57.5002 57.6 57.6002 57.5C57.8002 57.4 58.0002 57.2999 58.3002 57.2999C59.0002 57.2999 59.7002 57.5 60.7002 57.9L61.5002 55.9C60.5002 55.4 59.4002 55.2 58.4002 55.2C57.3002 55.2 56.4002 55.5 55.7002 56C55.0002 56.5 54.7002 57.1999 54.7002 58.0999C54.7002 58.5999 54.8002 58.9999 54.9002 59.2999C55.1002 59.6999 55.3002 60 55.6002 60.2C55.9002 60.5 56.4002 60.7 57.0002 61C57.7002 61.3 58.1002 61.4999 58.3002 61.5999C58.5002 61.6999 58.6002 61.8 58.7002 61.9C58.8002 62 58.8002 62.0999 58.8002 62.2999C58.8002 62.4999 58.7002 62.6999 58.5002 62.7999C58.4002 62.8999 58.1002 63 57.8002 63Z' />
				<path d='M75.8 59.9C75.8 58.4 75.4 57.2 74.5 56.4C73.7 55.6 72.4 55.2 70.9 55.2H67.5V65H70.6C72.2 65 73.5 64.6 74.4 63.7C75.4 62.8 75.8 61.6 75.8 59.9ZM72.5 62.0999C72.1 62.5999 71.5 62.7999 70.7 62.7999H70.1V57.4H70.9C71.6 57.4 72.2 57.6 72.5 58C72.9 58.4 73 59.1 73 60C73.1 61 72.9 61.6999 72.5 62.0999Z' />
				<path d='M87.6 63.2L88 65H90.9L87.7 55.2H84.2L81 65H83.9L84.4 63.2H87.6ZM85.7 58C85.8 57.5 85.9 57.1 85.9 56.9C85.9 57.1 86 57.4999 86.2 58.0999C86.3 58.6999 86.5 59.1 86.6 59.5L87 61H84.9C85.3 59.5 85.6 58.5 85.7 58Z' />
			</Jacket>
		);

	if (type === 'FWA')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='120'
				height='120'
				viewBox='0 0 120 120'>
				<path d='M96.5998 51.5999C96.9998 51.5999 97.3998 51.7 97.6998 51.9C98.3998 52.3 98.8998 53 98.8998 53.9V60.4H105.2C106.5 60.4 107.5 61.4 107.5 62.7C107.5 64 106.5 65 105.2 65H98.8998V71.1999C98.8998 72.4999 97.8998 73.5 96.5998 73.5C96.2998 73.5 79.0998 73.5 79.0998 73.5C77.7998 73.5 76.7998 72.4999 76.7998 71.1999V62.5999C76.8998 61.3999 77.8998 60.4 79.0998 60.4H94.2998V56.2H76.7998L68.4998 71.6999C68.3998 72.3999 67.8998 73 67.2998 73.3C66.9998 73.5 66.5998 73.5 66.2998 73.5C65.4998 73.5 64.6998 73.1 64.2998 72.4C64.1998 72.3 64.0998 72.1 64.0998 72L57.4998 59L50.8998 71.6999C50.5998 72.3999 50.1998 73 49.4998 73.3C49.1998 73.5 48.7998 73.5 48.4998 73.5C47.6998 73.5 46.8998 73.1 46.4998 72.4C46.3998 72.3 46.2998 72.1 46.2998 72L38.2998 56.2H24.8998V60.4H35.6998C36.9998 60.4 37.9998 61.4 37.9998 62.7C37.9998 64 36.9998 65 35.6998 65H24.8998V71.3C24.8998 72.6 23.8998 73.5999 22.5998 73.5999C21.2998 73.5999 20.2998 72.6 20.2998 71.3V65H13.9998C12.6998 65 11.6998 64 11.6998 62.7C11.6998 61.4 12.6998 60.4 13.9998 60.4H20.2998V53.9C20.2998 53 20.7998 52.3 21.4998 51.9C21.7998 51.7 22.1998 51.5999 22.5998 51.5999H39.5998C39.9998 51.5999 40.2998 51.6999 40.5998 51.7999C41.0998 51.9999 41.4998 52.4 41.6998 52.9L48.3998 66.1999L55.0998 53.5C55.3998 52.8 55.5998 52.1999 56.3998 51.7999C56.6998 51.5999 57.0998 51.5999 57.3998 51.5999C57.9998 51.5999 58.4998 51.8 58.8998 52.2C59.2998 52.5 59.4998 52.6999 59.7998 53.2999L66.1998 66.1999L73.2998 52.9C73.4998 52.6 73.6998 52.2999 73.9998 52.0999C74.3998 51.7999 74.8998 51.5999 75.4998 51.5999H96.5998ZM81.2998 68.8H94.2998V64.9H81.2998V68.8ZM96.5998 46.9H75.5998C74.0998 46.9 72.5998 47.3999 71.3998 48.2999C70.5998 48.8999 69.8998 49.7 69.3998 50.5L66.4998 55.9C66.4998 55.9 63.0998 49.3 62.0998 48.4C60.7998 47.3 59.1998 46.7 57.5998 46.7C56.5998 46.7 55.4998 46.9 54.5998 47.4C52.7998 48.3 51.7998 49.8999 50.8998 51.7999L48.6998 55.9L45.9998 50.5999C45.2998 49.1999 44.0998 48 42.6998 47.4C41.7998 46.9 40.6998 46.7 39.6998 46.7H22.6998C21.4998 46.7 20.3998 47 19.3998 47.5C17.1998 48.7 15.7998 51.0999 15.7998 53.5999V55.4H14.1998C10.3998 55.4 7.2998 58.5 7.2998 62.4C7.2998 66.2 10.3998 69.4 14.1998 69.4H15.7998V71C15.7998 74.8 18.8998 78 22.6998 78C26.4998 78 29.5998 74.9 29.5998 71V69.4H35.7998C37.0998 69.4 38.3998 69 39.3998 68.4L42.0998 73.8C42.1998 74.1 42.3998 74.3999 42.5998 74.6999C43.8998 76.7999 46.0998 78.0999 48.4998 78.0999C49.4998 78.0999 50.5998 77.9 51.4998 77.4C53.1998 76.6 54.6998 75.2 55.3998 73.4L57.3998 69L59.8998 73.8C59.9998 74.1 60.1998 74.3999 60.3998 74.6999C61.6998 76.7999 63.8998 78.0999 66.2998 78.0999C67.2998 78.0999 68.3998 77.9 69.2998 77.4C70.8998 76.6 72.0998 75.2999 72.7998 73.5999C73.7998 76.0999 76.2998 77.9 79.1998 77.9H96.6998C100.5 77.9 103.6 74.8999 103.6 71.0999V69.5H105.2C109 69.5 112.1 66.4 112.1 62.5C112.1 58.7 109 55.5 105.2 55.5H103.6V53.7C103.6 51.1 102.2 48.7999 99.9998 47.5999C98.8998 47.1999 97.7998 46.9 96.5998 46.9Z' />
			</Jacket>
		);

	if (type === 'check')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0Zm3.707,6.707l-4,4c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.293,1.293,3.293-3.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z" />
			</Jacket>
		);

	if (type === 'back')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M15.584,7.44A12.98,12.98,0,0,0,2.848,6.07l.763-2.154a1,1,0,1,0-1.884-.668L.058,7.961A1,1,0,0,0,.666,9.238l4.713,1.668a1,1,0,0,0,.668-1.885L3.305,8.05A11.011,11.011,0,0,1,14.416,9.064,1,1,0,1,0,15.584,7.44Z" />
			</Jacket>
		);

	if (type === 'logoGrad')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'>
				<path d="M0 8C0 5.8383 0.857389 3.87685 2.25066 2.43716C2.4058 2.27685 2.66667 2.39127 2.66667 2.61436V10.314C2.66667 10.5088 2.82457 10.6667 3.01935 10.6667H4.93333C5.06667 10.6778 5.33333 10.7733 5.33333 11.0667V12.9806C5.33333 13.1754 5.49124 13.3333 5.68602 13.3333H10.314C10.5088 13.3333 10.6667 13.1754 10.6667 12.9806V11.0667C10.6667 10.7733 10.9333 10.6778 11.0667 10.6667H12.9806C13.1754 10.6667 13.3333 10.5088 13.3333 10.314V8.35269C13.3333 8.1579 13.1754 8 12.9806 8H11.0194C10.8246 8 10.6667 8.1579 10.6667 8.35269V10.2669C10.6665 10.56 10.4 10.6556 10.2667 10.6667H5.73333C5.60003 10.6556 5.33345 10.56 5.33333 10.2669V0.782796C5.33333 0.583333 5.43235 0.416667 5.70833 0.333333C5.71186 0.332269 5.75 0.320752 5.75 0.320752C6.46373 0.111975 7.21879 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="url(#paint0_linear_60_9298)"/>
				<path d="M10.314 10.6667C10.3144 10.6667 10.3148 10.6667 10.3152 10.6667L10.4086 10.6667C10.5511 10.6667 10.6667 10.7822 10.6667 10.9247L10.6667 11.0182C10.6667 11.0186 10.6667 11.019 10.6667 11.0194V10.9247C10.6667 10.7822 10.5511 10.6667 10.4086 10.6667H10.314Z" fill="url(#paint1_linear_60_9298)"/>
				<path d="M5.33334 10.9247C5.33334 10.7822 5.44887 10.6667 5.5914 10.6667L5.68602 10.6667L5.68483 10.6667H5.5914C5.44887 10.6667 5.33334 10.7822 5.33334 10.9247V11.0182L5.33333 11.0194L5.33334 10.9247Z" fill="url(#paint2_linear_60_9298)"/>
				<defs>
					<linearGradient id="paint0_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<linearGradient id="paint1_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<linearGradient id="paint2_linear_60_9298" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
				</defs>
			</Jacket>
		);

	if (type === 'logoCelenium')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
				viewBox='0 0 18 18'>
				<g clipPath="url(#clip0_240_90)">
					<path d="M16.4094 12.633C16.5625 12.3208 16.639 12.1647 16.6132 12.0391C16.5907 11.9297 16.5205 11.8361 16.4219 11.7836C16.3087 11.7234 16.1092 11.7578 15.7104 11.8265C13.1586 12.2658 10.4398 11.5004 8.4696 9.53027C6.49942 7.56009 5.73405 4.84131 6.17343 2.28951C6.24212 1.89064 6.27644 1.69118 6.21625 1.57794C6.16381 1.47935 6.07016 1.40923 5.96079 1.38666C5.83518 1.3608 5.67908 1.43736 5.36688 1.59046C4.57217 1.98021 3.82714 2.50547 3.16629 3.16631C-0.0555128 6.38812 -0.0555125 11.6117 3.16629 14.8336C6.38812 18.0554 11.6117 18.0554 14.8336 14.8336C15.4944 14.1727 16.0197 13.4277 16.4094 12.633Z" fill="url(#paint0_linear_240_90)"/>
					<path opacity="0.5" d="M16.5854 10.0509C16.7816 9.98054 16.8797 9.94537 16.9845 9.85567C17.063 9.78839 17.1558 9.65842 17.1939 9.56234C17.2448 9.43402 17.2463 9.32662 17.2491 9.11174C17.2781 6.96328 16.4729 4.8057 14.8335 3.16638C13.1942 1.52708 11.0366 0.721838 8.88818 0.750752C8.67331 0.753677 8.56583 0.755087 8.43751 0.805952C8.34143 0.844037 8.21146 0.936872 8.14426 1.01537C8.05448 1.12019 8.01938 1.21831 7.94903 1.41444C7.09533 3.79622 7.62241 6.56187 9.53018 8.46967C11.438 10.3774 14.2037 10.9045 16.5854 10.0509Z" fill="url(#paint1_linear_240_90)"/>
				</g>
				<defs>
					<linearGradient id="paint0_linear_240_90" x1="8.68403" y1="1.38171" x2="8.68403" y2="17.2499" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<linearGradient id="paint1_linear_240_90" x1="12.4015" y1="0.75" x2="12.4015" y2="10.4467" gradientUnits="userSpaceOnUse">
						<stop stopColor="#CDB4DB"/>
						<stop offset="1" stopColor="#A2D2FF"/>
					</linearGradient>
					<clipPath id="clip0_240_90">
						<rect width="18" height="18" fill="white"/>
					</clipPath>
				</defs>
			</Jacket>
		);

	if (type === 'mint')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<path fillRule="evenodd" clipRule="evenodd" d="M11.5988 1.08858C11.8958 0.917089 12.2617 0.917089 12.5588 1.08858L21.2775 6.12235C21.5746 6.29384 21.7575 6.61077 21.7575 6.95374V17.0213C21.7575 17.3643 21.5746 17.6813 21.2775 17.8526L12.5588 22.8864C12.2617 23.0579 11.8958 23.0579 11.5988 22.8864L2.88 17.8526C2.58298 17.6813 2.4 17.3643 2.4 17.0213V6.95374C2.4 6.61077 2.58298 6.29384 2.88 6.12235L11.5988 1.08858ZM4.32 15.3034V16.467L12.0788 20.9466L18.2298 17.3954L15.941 14.5483L14.0194 16.1406C13.5298 16.5462 12.8013 16.4635 12.4151 15.9586L8.96346 11.4448L4.32 15.3034ZM4.32 12.807L8.37707 9.43567C8.8665 9.02896 9.59602 9.11123 9.98258 9.61672L13.435 14.1314L15.3412 12.5519C15.8225 12.1531 16.537 12.2254 16.9287 12.7126L19.8375 16.3309V7.508L12.0788 3.02848L4.32 7.508V12.807Z" fill="white"/>
			</Jacket>
		);

	if (type === 'celestia')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'>
				<g clipPath="url(#clip0_240_107)">
					<path fillRule="evenodd" clipRule="evenodd" d="M23.0453 12.3505C23.043 12.425 22.9416 12.4446 22.9123 12.376C22.8997 12.3463 22.8869 12.3166 22.8738 12.2869C22.8499 12.2325 22.8566 12.1692 22.8923 12.1217C22.8996 12.1119 22.9147 12.0923 22.9326 12.0688C22.9808 12.0058 23.0504 12.0152 23.0504 12.0851C23.0504 12.1769 23.0482 12.2564 23.0453 12.3505ZM22.5116 10.8929C22.4294 11.0409 22.2187 11.0478 22.1274 10.905C22.1132 10.883 22.099 10.8609 22.0846 10.8387C21.7557 10.3337 21.3771 9.83794 20.9544 9.35613C20.8505 9.23784 20.9354 9.05219 21.0929 9.05208H21.0966C22.0846 9.05208 22.6025 9.29612 22.7606 9.59411C22.8925 9.84334 22.8521 10.2792 22.5116 10.8929ZM22.2908 16.0594C22.2378 16.1942 22.1823 16.3282 22.1241 16.4609C22.115 16.4791 22.1064 16.4976 22.097 16.5158C21.7334 17.2157 21.1232 17.7668 20.3079 18.1503C20.1249 18.2363 19.9248 18.0689 19.9793 17.8743C20.25 16.9053 20.4549 15.8544 20.5877 14.7527C20.6125 14.5472 20.7138 14.3587 20.8703 14.2233C21.2056 13.9332 21.5188 13.6435 21.8068 13.3559L21.8099 13.3527C21.9517 13.2112 22.1935 13.2721 22.2512 13.4639C22.5358 14.4099 22.5516 15.291 22.2908 16.0594ZM20.0744 19.5579C19.9915 19.6466 19.9068 19.7342 19.8205 19.8204C19.6702 19.9705 19.5164 20.1157 19.3592 20.256C19.26 20.3443 19.11 20.2338 19.1662 20.1133C19.1822 20.079 19.1981 20.0444 19.2138 20.0094C19.2799 19.8638 19.3437 19.7144 19.4058 19.5621C19.4205 19.5262 19.4514 19.4994 19.489 19.4898C19.6454 19.4501 19.7978 19.4063 19.9463 19.3584C20.0666 19.3197 20.1609 19.4656 20.0744 19.5579ZM18.4468 18.6832C18.1177 18.7309 17.7716 18.7617 17.4094 18.7744C16.5259 18.8054 15.5917 18.7291 14.6321 18.5524C14.5151 18.5309 14.4926 18.3727 14.5987 18.3191C14.808 18.2131 15.0175 18.1048 15.2268 17.9939C16.6952 17.2156 18.0652 16.3648 19.2646 15.4926C19.3545 15.4272 19.4784 15.5044 19.4602 15.6141C19.2939 16.6137 19.0636 17.5548 18.7743 18.409C18.725 18.5545 18.5989 18.6611 18.4468 18.6832ZM18.1074 20.015C17.3201 21.5633 16.3506 22.4326 15.4107 22.4151C14.3893 22.397 13.3707 21.3332 12.6164 19.4969L12.6156 19.4949C12.5677 19.3783 12.6227 19.2449 12.7382 19.1947C12.7462 19.1911 12.7542 19.1877 12.7622 19.1841C12.8117 19.1626 12.8673 19.1587 12.9194 19.1734C14.3303 19.5694 15.7205 19.776 17.023 19.776C17.1645 19.776 17.3051 19.7736 17.4445 19.7688C17.6076 19.7629 17.7682 19.7537 17.926 19.7412C18.0723 19.7296 18.174 19.8841 18.1074 20.015ZM13.4454 22.9594C12.9774 23.0196 12.5024 23.0504 12.0227 23.0504C9.87924 23.0504 7.82906 22.4429 6.06888 21.3094C5.94778 21.2314 5.99925 21.0434 6.14317 21.0369C6.17301 21.0354 6.20091 21.0339 6.22545 21.0324C6.67277 21.0033 7.16323 20.9378 7.69466 20.8354C8.82512 20.618 10.0818 20.2449 11.3975 19.7426C11.5155 19.6976 11.6472 19.7561 11.6952 19.8729L11.6961 19.8749C12.206 21.1164 12.8336 22.0545 13.5382 22.6513C13.6547 22.75 13.5968 22.94 13.4454 22.9594ZM7.06829 15.2328C8.04002 14.4415 9.17858 13.652 10.4275 12.9045C10.4544 14.5019 10.6295 16.0356 10.9395 17.4209C10.4763 17.2234 10.0145 17.0058 9.5567 16.768C8.66996 16.3072 7.83566 15.791 7.06829 15.2328ZM4.04628 19.513C3.81446 19.0757 4.11408 18.0625 5.63617 16.5227L5.63692 16.5219C5.79587 16.3614 5.78062 16.0979 5.60319 15.9581C5.5422 15.9102 5.48165 15.8617 5.42154 15.8133C5.26994 15.6908 5.05056 15.702 4.91291 15.8399C4.88274 15.8701 4.86025 15.8928 4.85366 15.8996C4.09278 16.6806 3.56026 17.4035 3.26194 18.0538C3.17738 18.238 2.92199 18.2579 2.81019 18.0888C1.62935 16.3038 0.995081 14.2121 0.995081 12.0226C0.995081 11.2399 1.07639 10.4696 1.23458 9.72138C1.25848 9.60817 1.41818 9.60092 1.4517 9.71165C1.68049 10.467 2.05288 11.2483 2.56745 12.0384C3.2601 13.1021 4.17355 14.1247 5.25599 15.0627C5.62546 15.3828 6.01569 15.6925 6.42267 15.9913C7.24767 16.5967 8.14414 17.1554 9.09792 17.6509C9.52069 17.8706 9.93244 18.0803 10.3541 18.2701C10.5889 18.3758 10.856 18.384 11.0957 18.2899C11.2945 18.2121 11.4947 18.1311 11.6962 18.0468C11.9152 17.9555 12.0341 17.7166 11.976 17.4864C11.9688 17.4577 11.963 17.4345 11.9598 17.4209C11.6277 16.0235 11.4432 14.4504 11.4214 12.8026L11.4208 12.803C11.4206 12.7834 11.4207 12.7635 11.4205 12.7437C11.4195 12.6536 11.42 12.5629 11.4184 12.4731C11.4179 12.4444 11.4187 12.3959 11.4191 12.3671C11.4193 12.3556 11.4191 12.3443 11.4191 12.3329L11.4195 12.3328C11.42 12.2297 11.4208 12.1266 11.4226 12.0232C11.4277 11.7405 11.4379 11.4599 11.4525 11.1816L11.4519 11.1819C11.5543 9.19361 11.8915 7.32531 12.4279 5.7537C12.4775 5.60827 12.4 5.45041 12.2545 5.40078C12.1128 5.35234 11.9711 5.30606 11.8297 5.26173C11.6867 5.21685 11.5338 5.29406 11.4854 5.43603C10.9041 7.14279 10.5453 9.16766 10.4496 11.3104C10.4374 11.5822 10.2895 11.8296 10.0554 11.9683C8.7863 12.7205 7.62081 13.5178 6.61395 14.3215C6.40418 14.489 6.10457 14.4826 5.90172 14.3067C4.89258 13.4317 4.04326 12.4814 3.4012 11.4954C2.13948 9.558 1.83965 7.73283 2.55717 6.35704C2.55912 6.3538 2.56085 6.35045 2.56269 6.34731C2.65416 6.1955 2.74931 6.04575 2.84836 5.89805C3.67282 4.80673 5.20734 4.17431 7.24248 4.10283C7.37126 4.09829 7.5009 4.09602 7.63174 4.09602C8.88005 4.09602 10.2197 4.302 11.5822 4.69515L11.5825 4.69482C11.6124 4.70347 11.6422 4.71245 11.6721 4.72121C11.6951 4.72802 11.7181 4.7344 11.7412 4.74132C12.056 4.83539 12.3718 4.93973 12.6879 5.05348C12.6953 5.05607 12.7027 5.05877 12.7101 5.06137C12.7925 5.0911 12.8748 5.1216 12.957 5.15263C12.9828 5.16236 13.0086 5.1722 13.0344 5.18215C13.0591 5.19166 13.0839 5.20085 13.1087 5.21048L13.1084 5.21091C13.7738 5.46846 14.4387 5.76797 15.0952 6.10922C16.366 6.76943 17.5292 7.5434 18.5415 8.39251C16.6096 8.83507 14.3641 9.68883 12.1063 10.8399C12.0022 10.8931 11.9336 10.9978 11.927 11.1146C11.9191 11.2545 11.9088 11.5358 11.9013 11.7594C11.8967 11.8998 12.0451 11.9928 12.1695 11.9275L12.1707 11.9267C14.4061 10.7529 16.6371 9.87556 18.553 9.41192C18.9111 9.32531 19.1429 8.98136 19.0926 8.61644C19.0574 8.36148 19.0177 8.11052 18.9738 7.86399C18.9187 7.55432 18.7491 7.27741 18.4989 7.08689C17.6016 6.40332 16.6127 5.7763 15.554 5.22615C14.8406 4.8555 14.1167 4.53069 13.3913 4.25367C13.2361 4.19442 13.1696 4.01104 13.2506 3.86604C13.998 2.52906 14.8869 1.78029 15.7528 1.78029C15.7618 1.78029 15.7708 1.78029 15.7798 1.78051C16.8012 1.79878 17.8198 2.86241 18.5741 4.69872C18.9559 5.62827 19.2517 6.70023 19.4539 7.86518C19.4528 7.86421 19.4517 7.86334 19.4508 7.86237C19.537 8.35953 19.6066 8.87335 19.6581 9.40046C19.6537 9.40327 19.6489 9.40576 19.6445 9.40857C19.6506 9.41473 19.6569 9.42089 19.6631 9.42717C19.7486 10.3116 19.7848 11.2327 19.7679 12.1725C19.7573 12.767 19.7256 13.3532 19.6744 13.9268C18.3078 15.0312 16.6181 16.1303 14.7608 17.1146C14.1504 17.4381 13.5402 17.7392 12.9358 18.0165C12.9264 18.0208 12.9171 18.025 12.9077 18.0293C12.8616 18.0504 12.8153 18.0718 12.7691 18.0927L12.768 18.0924C12.2673 18.3189 11.7713 18.5284 11.2836 18.7198L11.2838 18.7203C11.2562 18.7311 11.2289 18.7414 11.2014 18.7522C11.1671 18.7656 11.1328 18.7788 11.0987 18.7919C11.0168 18.8233 10.9353 18.8542 10.854 18.8846C10.8316 18.8929 10.8091 18.9017 10.7867 18.9099C10.688 18.9466 10.5898 18.9821 10.492 19.0172C10.4798 19.0215 10.4676 19.0261 10.4554 19.0305L10.455 19.0303C9.40976 19.4025 8.41403 19.6838 7.50663 19.8584C5.31395 20.2805 4.28146 19.9567 4.04628 19.513ZM5.62114 3.04104C7.47701 1.71206 9.69467 0.994974 12.0227 0.994974C12.6372 0.994974 13.2438 1.04525 13.8382 1.14332C13.9973 1.1696 14.0507 1.37277 13.9238 1.47235C13.3478 1.92388 12.8127 2.59199 12.3391 3.4584C12.2235 3.66979 11.9784 3.77316 11.7466 3.70785C10.1776 3.26616 8.63385 3.05834 7.20756 3.1084C6.68142 3.12689 6.18317 3.1802 5.7151 3.26648C5.58362 3.2907 5.51247 3.11878 5.62114 3.04104ZM20.7585 11.078C20.7553 10.9516 20.9175 10.8977 20.9908 11.0006C21.0809 11.127 21.1677 11.2541 21.2508 11.3818C21.3613 11.5515 21.4642 11.7203 21.5597 11.888C21.6193 11.9926 21.6051 12.1237 21.524 12.2126C21.3952 12.354 21.2555 12.5002 21.1038 12.6518C21.0484 12.7071 20.992 12.7624 20.9345 12.8179C20.8631 12.8869 20.7434 12.8343 20.7473 12.7351C20.7543 12.5542 20.7595 12.3726 20.7628 12.1902C20.7695 11.8165 20.7678 11.4456 20.7585 11.078ZM19.6149 4.02455C19.6842 4.09029 19.7527 4.15711 19.8205 4.22491C20.8832 5.28757 21.7017 6.52929 22.249 7.88162C22.3043 8.01796 22.1885 8.16069 22.0437 8.13463C21.727 8.07776 21.3706 8.05235 20.9761 8.05894C20.7026 8.06348 20.465 7.87188 20.417 7.60265C20.2026 6.4004 19.8926 5.28984 19.4944 4.3206C19.4717 4.26535 19.4488 4.21074 19.4256 4.15668C19.375 4.03872 19.5218 3.9361 19.6149 4.02455ZM23.7857 9.5221C23.3106 7.26476 22.1935 5.19069 20.524 3.52123C18.2533 1.25047 15.2342 0 12.0227 0C8.81139 0 5.79219 1.25047 3.52144 3.52123C2.96913 4.07353 2.47792 4.67028 2.04963 5.30303C1.92226 5.47257 1.80819 5.65163 1.70676 5.83901C0.594258 7.68764 0.000106812 9.8095 0.000106812 12.0226C0.000106812 15.2341 1.25069 18.2532 3.52144 20.5239C5.79219 22.7947 8.81139 24.0453 12.0227 24.0453C15.2342 24.0453 18.2533 22.7947 20.524 20.5239C21.5958 19.4523 22.4399 18.2138 23.0329 16.8672C23.1053 16.718 23.1686 16.5652 23.2229 16.4094C23.7627 15.0301 24.0455 13.5482 24.0455 12.0226C24.0455 11.1829 23.9592 10.3567 23.7923 9.55324C23.7901 9.54286 23.788 9.53248 23.7857 9.5221Z" fill="white"/>
				</g>
				<defs>
					<clipPath id="clip0_240_107">
						<rect width="24" height="24" fill="white"/>
					</clipPath>
				</defs>
			</Jacket>
		);
	
	if (type === 'lumina')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 360 360'>
				<path d="M0 180C0 131.362 19.2913 87.2291 50.6397 54.8362C54.1304 51.2292 60 53.8035 60 58.823V232.065C60 236.447 63.5528 240 67.9355 240H111C114 240.25 120 242.4 120 249V292.064C120 296.447 123.553 300 127.935 300H232.065C236.447 300 240 296.447 240 292.064V249C240 242.4 246 240.25 249 240H292.064C296.447 240 300 236.447 300 232.065V187.935C300 183.553 296.447 180 292.064 180H247.935C243.553 180 240 183.553 240 187.935V231.004C239.997 237.601 233.999 239.75 231 240H129C126.001 239.75 120.003 237.601 120 231.004V17.6129C120 13.125 122.228 9.375 128.438 7.5C128.517 7.47606 129.375 7.21692 129.375 7.21692C145.434 2.51945 162.423 0 180 0C279.411 0 360 80.5888 360 180C360 279.411 279.411 360 180 360C80.5888 360 0 279.411 0 180Z" fill="white" />
				<path d="M232.065 240C232.073 240 232.082 240 232.091 240L234.194 240C237.4 240 240 242.6 240 245.806L240 247.909C240 247.918 240 247.927 240 247.935V245.806C240 242.6 237.4 240 234.194 240H232.065Z" fill="white" />
				<path d="M120 245.806C120 242.6 122.6 240 125.806 240L127.935 240L127.909 240H125.806C122.6 240 120 242.6 120 245.806V247.909L120 247.935L120 245.806Z" fill="white" />
			</Jacket>
		);

	if (type === 'eiger')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 577 346'>
				<path d="M 34.705 312.247 L 4.235 312.247 L 288.779 28.348 L 573.323 312.247 L 542.853 312.247 L 288.779 58.748 L 34.705 312.247 Z" fill="white" />
				<path d="M 131.655 312.247 L 101.187 312.247 L 288.779 125.08 L 476.371 312.247 L 445.903 312.247 L 288.779 155.479 L 131.655 312.247 Z" fill="white" />
				<path d="M 228.607 312.247 L 198.138 312.247 L 288.779 221.812 L 379.42 312.247 L 348.951 312.247 L 288.779 252.211 L 228.607 312.247 Z" fill="white" />
			</Jacket>
		);

	if (type === 'github')
		return (
			<Jacket
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 98 96'>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
			</Jacket>
		);
		

	console.error(
		`You've not added the correct 'type' prop to your <Icon /> component`
	);
	console.warn(
		`Remember to add "type='YOUR_ICON_NAME'" to your <Icon /> props or else your icon wont display`
	);
	return null;
};

export default Icon;
