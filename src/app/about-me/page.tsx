import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'About me page description',
}

export default function AboutPage() {
    return (
        <div className="flex-1 flex font-firaCode text-secondary-4">
            <Sidebar />
            {/* Right side - Code Window */}
            <div className="flex-1">
                <div className="bg-primary-1 rounded-lg p-6">
                    <pre className="text-sm">
                        <code>
                            /**<br />
                            * About me<br />
                            * I have 5 years of experience in web<br />
                            * development Lorem ipsum etsis amet,<br />
                            * consectetur adipiscing elit, sed do eiusmod<br />
                            * tempor incididunt ut labore et dolore<br />
                            * magna aliqua. Ut enim ad minim veniam,<br />
                            * quis nostrud exercitation ullamco laboris<br />
                            * nisi ut aliquip ex ea commodo consequat.<br />
                            * Duis aute irure dolor in reprehenderit in<br />
                            */<br />
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}