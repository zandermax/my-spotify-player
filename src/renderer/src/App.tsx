import icons from './assets/icons.svg';
import Versions from './components/Versions';

const App = (): JSX.Element => {
	return (
		<div className="container">
			<Versions />

			<svg className="hero-logo" viewBox="0 0 900 300">
				<use xlinkHref={`${icons}#electron`} />
			</svg>
			<h2 className="hero-text">
				You've successfully created an Electron project with React and
				TypeScript
			</h2>
			<p className="hero-tagline">
				Please try pressing <code>F12</code> to open the devTool
			</p>

			<div className="links">
				<div className="link-item">
					<a
						href="https://electron-vite.org"
						rel="noopener noreferrer"
						target="_blank"
					>
						Documentation
					</a>
				</div>
				<div className="link-item link-dot">•</div>
				<div className="link-item">
					<a
						href="https://github.com/alex8088/electron-vite"
						rel="noopener noreferrer"
						target="_blank"
					>
						Getting Help
					</a>
				</div>
				<div className="link-item link-dot">•</div>
				<div className="link-item">
					<a
						href="https://github.com/alex8088/quick-start/tree/master/packages/create-electron"
						rel="noopener noreferrer"
						target="_blank"
					>
						create-electron
					</a>
				</div>
			</div>

			<div className="features">
				<div className="feature-item">
					<article>
						<h2 className="title">Configuring</h2>
						<p className="detail">
							Config with <span>electron.vite.config.ts</span> and refer to the{' '}
							<a
								href="https://electron-vite.org/config"
								rel="noopener noreferrer"
								target="_blank"
							>
								config guide
							</a>
							.
						</p>
					</article>
				</div>
				<div className="feature-item">
					<article>
						<h2 className="title">HMR</h2>
						<p className="detail">
							Edit <span>src/renderer</span> files to test HMR. See{' '}
							<a
								href="https://electron-vite.org/guide/hmr.html"
								rel="noopener noreferrer"
								target="_blank"
							>
								docs
							</a>
							.
						</p>
					</article>
				</div>
				<div className="feature-item">
					<article>
						<h2 className="title">Hot Reloading</h2>
						<p className="detail">
							Run <span>'electron-vite dev --watch'</span> to enable. See{' '}
							<a
								href="https://electron-vite.org/guide/hot-reloading.html"
								rel="noopener noreferrer"
								target="_blank"
							>
								docs
							</a>
							.
						</p>
					</article>
				</div>
				<div className="feature-item">
					<article>
						<h2 className="title">Debugging</h2>
						<p className="detail">
							Check out <span>.vscode/launch.json</span>. See{' '}
							<a
								href="https://electron-vite.org/guide/debugging.html"
								rel="noopener noreferrer"
								target="_blank"
							>
								docs
							</a>
							.
						</p>
					</article>
				</div>
				<div className="feature-item">
					<article>
						<h2 className="title">Source Code Protection</h2>
						<p className="detail">
							Supported via built-in plugin <span>bytecodePlugin</span>. See{' '}
							<a
								href="https://electron-vite.org/guide/source-code-protection.html"
								rel="noopener noreferrer"
								target="_blank"
							>
								docs
							</a>
							.
						</p>
					</article>
				</div>
				<div className="feature-item">
					<article>
						<h2 className="title">Packaging</h2>
						<p className="detail">
							Use{' '}
							<a
								href="https://www.electron.build"
								rel="noopener noreferrer"
								target="_blank"
							>
								electron-builder
							</a>{' '}
							and pre-configured to pack your app.
						</p>
					</article>
				</div>
			</div>
		</div>
	);
};

export default App;
