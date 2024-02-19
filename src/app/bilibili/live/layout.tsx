import type { Metadata } from 'next';

import '../styles/index.css';

export const metadata: Metadata = {
    title: 'bilibili',
    description: 'cheers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <div className="w-full overflow-x-hidden bg-gray-100">{children}</div>;
}
