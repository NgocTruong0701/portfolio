import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'About me page description',
}

export default function AboutPage() {
    //     const aboutMe = /**
    //             * About me
    //             * I have 5 years of experience in web
    //             * development Lorem ipsum etsis amet,
    //             * consectetur adipiscing elit, sed do eiusmod
    //             * tempor incididunt ut labore et dolore
    //             * magna aliqua. Ut enim ad minim veniam,
    //             * quis nostrud exercitation ullamco laboris
    //             * nisi ut aliquip ex ea commodo consequat.
    //             * Duis aute irure dolor in reprehenderit in
    //  */`
    return (
        <div className="flex-1 flex font-firaCode text-secondary-1">
            <Sidebar />
            <div className="flex-1">
                <div>
                    <div>
                        personal-info
                    </div>
                    <div>
                        <pre className="whitespace-pre-wrap">
                        </pre>
                    </div>
                </div>
                <div>
                    Code snippet showcase:
                </div>
            </div>
        </div>
    )
}