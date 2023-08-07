import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {$contentContainer} from './styles/container.css';
import {$fixedContentPusher, $fixedNavigationShell, $navigation, $navigationHeader, $navigationItem, $navigationItemActive, $navigationItemGroup} from './styles/navigation.css';
import {$root} from './styles/theme/theme.css';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<div className={$root}>
				<section className={$fixedNavigationShell}>
					<nav className={$navigation}>
						<h1 className={$navigationHeader}>Asagi Tint</h1>
						<ul className={$navigationItemGroup}>
							<li className={$navigationItemActive}>청휘석 계산기</li>
							<li className={$navigationItem}>설정</li>
						</ul>
					</nav>
				</section>
				<section className={$fixedContentPusher}>
					<article className={$contentContainer} style={{height: '10000px'}}>
						텍스트
					</article>
				</section>
			</div>
		</React.StrictMode>,
	);
