import {type FC, type PropsWithChildren} from 'react';
import {Link} from 'wouter';

import {$container} from '../../styles/container.css';
import {$link} from '../../styles/link.css';
import {$fixedSide, $fixedSideDirector, $side, $sideItem, $sideItemActionable, $sideItemGroup, $sideItemOptActive} from '../../styles/navigation/side.css';
import {$compose} from '../../styles/theme/utils';

export const SideDirector: FC<PropsWithChildren> = ({children}) => (
	<div className={$compose($container, $fixedSideDirector)}>
		{children}
	</div>
);

export const Side: FC<PropsWithChildren> = ({children}) => (
	<section className={$fixedSide}>
		<nav className={$side}>
			<ul className={$sideItemGroup}>
				{children}
			</ul>
		</nav>
	</section>
);

export const SideItem: FC<PropsWithChildren<{
	isActive?: boolean;
	link?: string;
}>> = ({children, isActive = false, link}) => {
	const opt = ' ' + (isActive ? $sideItemOptActive : '');

	if (typeof link === 'string') {
		return (
			<Link className={$link} href={link}>
				<li className={$sideItemActionable + opt}>
					{children}
				</li>
			</Link>
		);
	}

	return (
		<li className={$sideItem + opt}>{children}</li>
	);
};
