import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar'

export const metadata: Metadata = {
    title: 'About Me',
    description: 'About me page description',
}

export default function AboutPage() {
    const contents = [
        "/**",
        "* About me",
        "* I have 5 years of experience in web",
        "* development Lorem ipsum etsis amet,",
        "* consectetur adipiscing elit, sed do eiusmod",
        "* tempor incididunt ut labore et dolore",
        "* magna aliqua. Ut enim ad minim veniam,",
        "* quis nostrud exercitation ullamco laboris",
        "* nisi ut aliquip ex ea commodo consequat.",
        "* Duis aute irure dolor in reprehenderit in",
        "*",
        "* Duis aute irure dolor in reprehenderit in",
        "* voluptate velit esse cillum dolore eu fugiat",
        "* nulla pariatur. Excepteur sint occaecat",
        "* officia deserunt mollit anim id est laborum.",
        "*/",
    ]

    return (
        <div className="flex-1 flex font-firaCode text-secondary-1">
            <Sidebar />
            <div className="flex-1 flex">
                <div className='w-1/2 border-r border-border-gray'>
                    <div className='border-b border-border-gray'>
                        <div className='flex items-center justify-between px-4 py-3 border-r border-border-gray w-[25%]'>
                            <div>personal-info</div>
                            <div>x</div>
                        </div>
                    </div>
                    <div className='mx-12 my-5'>
                        {contents.map((item, index) => {
                            const number = index + 1;
                            const digitCount = number.toString().length;
                            const marginLeft = digitCount > 1 ? `${-0.5 * (digitCount - 1)}em` : '0';

                            return (
                                <div key={index} className='flex items-center gap-12'>
                                    <div
                                        className='select-none'
                                        style={{ marginLeft }}
                                    >
                                        {number}
                                    </div>
                                    <div className='flex-1'>{item}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex-1'>
                    Code snippet showcase:
                </div>
            </div>
        </div>
    )
}