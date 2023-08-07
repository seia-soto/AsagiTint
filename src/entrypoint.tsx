import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Vendor} from './vendor';

ReactDOM.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<Vendor />
		</React.StrictMode>,
	);
