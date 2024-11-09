import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar'
import Snippet from './components/snippet'

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
        <div className="flex-1 h-full flex font-firaCode text-secondary-1">
            <Sidebar />
            <div className="flex-1 flex">
                <div className='w-1/2 flex flex-col border-r border-border-gray'>
                    <div className='border-b border-border-gray'>
                        <div className='flex items-center justify-between px-4 py-2 border-r border-border-gray w-[25%]'>
                            <div>personal-info</div>
                            <div>x</div>
                        </div>
                    </div>
                    <div className='flex flex-1 h-full'>
                        <div className='flex-1 mx-12 my-5 h-full'>
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
                        <div className='w-[3%] border-l border-border-gray h-full'>
                            <div className='bg-secondary-1 h-[1%] mt-2 mx-[2px]'></div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='border-b border-border-gray'>
                        <div className='flex items-center justify-between px-4 py-2 border-r border-border-gray w-[25%]'>
                            <div>code-example</div>
                            <div>x</div>
                        </div>
                    </div>
                    <div className='mx-12 my-5'>
                        <div>{`// Code snippet showcase`}</div>
                        <Snippet>
                            <h1>Test</h1>
                        </Snippet>
                        <Snippet>
                            <h1>Test2</h1>
                        </Snippet>
                    </div>
                </div>
            </div>
        </div>
    )
}