import {type FC, type PropsWithChildren, type SelectHTMLAttributes} from 'react';

import {$select} from '../../styles/input.css';

export const Select: FC<PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>> = ({children, ...props}) => (
	<select className={$select} {...props}>
		{children}
	</select>
);
