import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'wouter';

import {Navigation, NavigationItem, NavigationPusher} from './components/navigation/bar';
import {Side, SideDirector, SideItem} from './components/navigation/side';
import {$contentContainer} from './styles/container.css';
import {$link} from './styles/link.css';
import {$fixedSideContentPusher} from './styles/navigation/side.css';
import {$root} from './styles/theme/theme.css';
import {$compose} from './styles/theme/utils';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<div className={$root}>
				<Navigation title={<Link className={$link} to='/'>Asagi Tint</Link>}>
					<NavigationItem>설정</NavigationItem>
				</Navigation>
				<NavigationPusher>
					<SideDirector>
						<Side>
							<SideItem>학생 목록</SideItem>
							<SideItem isActive={true}>미래시 기획</SideItem>
							<SideItem>총력전 분석</SideItem>
							<SideItem>공략</SideItem>
						</Side>
					</SideDirector>
					<article className={$compose($fixedSideContentPusher, $contentContainer)} style={{height: '10000px'}}>
						본문 내용이 여기에 들어갑니다.
					</article>
				</NavigationPusher>
			</div>
		</React.StrictMode>,
	);
