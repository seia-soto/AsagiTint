import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {$navigationContainer} from './styles/container.css';
import {$root} from './styles/theme/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className={$root}>
			<nav className={$navigationContainer}>
				Asagi Mutsuki
			</nav>
		</div>
	</React.StrictMode>,
);
