import {type FC, type PropsWithChildren, type SelectHTMLAttributes, forwardRef} from 'react';

import {$select} from '../../styles/input.css';

// eslint-disable-next-line react/display-name
export const Select = forwardRef<HTMLSelectElement, PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>>(({children, ...props}, ref) => (
	<select className={$select} ref={ref} {...props}>
		{children}
	</select>
));
