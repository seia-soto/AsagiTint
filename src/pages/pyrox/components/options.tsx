import {type FC, type LiHTMLAttributes, type PropsWithChildren} from 'react';

import {$compose} from '../../../styles/theme/utils';
import {$optionGroup, $optionHeader, $optionItem} from './options.css';

export const OptionGroup: FC<PropsWithChildren> = ({children}) => (
	<ul className={$optionGroup}>{children}</ul>
);

export const OptionHeader: FC<PropsWithChildren> = ({children}) => (
	<h3 className={$optionHeader}>{children}</h3>
);

export const OptionItem: FC<PropsWithChildren & LiHTMLAttributes<HTMLLIElement>> = ({children, className = '', ...props}) => (
	<li className={$compose($optionItem, className)} {...props}>{children}</li>
);
