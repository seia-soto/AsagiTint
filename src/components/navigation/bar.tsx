import {type FC, type PropsWithChildren, type ReactNode} from 'react';

import {$fixedContentPusher, $fixedNavigation, $navigation, $navigationHeader, $navigationItem, $navigationItemActive, $navigationItemGroup} from '../../styles/navigation/bar.css';

export const Navigation: FC<PropsWithChildren<{title: ReactNode | string}>> = ({children, title}) => (
	<section className={$fixedNavigation}>
		<nav className={$navigation}>
			<h1 className={$navigationHeader}>{title}</h1>
			<ul className={$navigationItemGroup}>
				{children}
			</ul>
		</nav>
	</section>
);

export const NavigationItem: FC<PropsWithChildren<{
	isActive?: boolean;
}>> = ({children, isActive = false}) => (
	<li className={isActive ? $navigationItemActive : $navigationItem}>{children}</li>
);

export const NavigationPusher: FC<PropsWithChildren> = ({children}) => (
	<section className={$fixedContentPusher}>
		{children}
	</section>
);
