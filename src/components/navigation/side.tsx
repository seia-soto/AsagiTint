import {type FC, type HTMLAttributes, type PropsWithChildren} from 'react';
import {Link} from 'wouter';

import {$container} from '../../styles/container.css';
import {$linkOptFluid, $linkTransparent} from '../../styles/link.css';
import {$fixedSide, $fixedSideDirector, $side, $sideItem, $sideItemActionable, $sideItemGroup, $sideItemOptActionableAreaDirector, $sideItemOptActive} from '../../styles/navigation/side.css';
import {$compose} from '../../styles/theme/utils';

export const SideDirector: FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>> = ({children, className = '', ...props}) => (
	<div className={$compose($container, $fixedSideDirector, className)} {...props}>
		{children}
	</div>
);

export const Side: FC<PropsWithChildren & HTMLAttributes<HTMLElement>> = ({children, className = '', ...props}) => (
	<aside className={$fixedSide} {...props}>
		<nav className={$side}>
			<ul className={$sideItemGroup}>
				{children}
			</ul>
		</nav>
	</aside>
);

export const SideItem: FC<PropsWithChildren<{
	isActive?: boolean;
	link?: string;
}>> = ({children, isActive = false, link}) => {
	const opt = ' ' + (isActive ? $sideItemOptActive : '');

	if (typeof link === 'string') {
		return (
			<li className={$sideItemActionable + opt}>
				<Link href={link}>
					<a className={$compose($linkTransparent, $linkOptFluid, $sideItemOptActionableAreaDirector)}>{children}</a>
				</Link>
			</li>
		);
	}

	return (
		<li className={$sideItem + opt}>{children}</li>
	);
};
