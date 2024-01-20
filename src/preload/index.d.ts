import { type ElectronAPI } from '@electron-toolkit/preload';

export * from 'vite/client';

declare global {
	interface Window {
		api: unknown;
		electron: ElectronAPI;
	}
}
