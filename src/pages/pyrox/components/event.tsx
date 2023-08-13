import {type FC, type LiHTMLAttributes, type PropsWithChildren, useState} from 'react';

import {Checkbox} from '../../../components/input/checkbox';
import {MaterialSymbolsKeyboardArrowDown} from '../../../styles/icons/icons';
import {$event, $eventActionGroup, $eventActionItem, $eventBody, $eventDropdownIcon, $eventFooter, $eventIconShell, $eventList, $eventShell, $eventTitle} from './event.css';

export const EventList: FC<PropsWithChildren> = ({children}) => (
	<ol className={$eventList}>{children}</ol>
);

export const Event: FC<PropsWithChildren & LiHTMLAttributes<HTMLLIElement>> = ({children}) => {
	const [isDropdownActive, setDropdownActive] = useState(false);

	const toggleDropdownState = () => {
		setDropdownActive(value => !value);
	};

	return (
		<li className={$eventShell}>
			<section className={$event}>
				<section className={$eventActionGroup}>
					<Checkbox defaultChecked />
					<label className={$eventIconShell}>
						<input className={$eventActionItem} data-dropdown onChange={toggleDropdownState} type='checkbox' />
						<MaterialSymbolsKeyboardArrowDown className={$eventDropdownIcon} />
					</label>
				</section>
				<span className={$eventTitle}>
					이벤트 제목
				</span>
				<span className={$eventFooter}>
					0
				</span>
			</section>
			<article className={$eventBody} data-active={isDropdownActive}>
				{children}
			</article>
		</li>
	);
};
