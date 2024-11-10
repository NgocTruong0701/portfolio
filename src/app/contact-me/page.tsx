'use client'
import { ChangeEvent, useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Highlight, themes } from "prism-react-renderer";

interface FormData {
    name: string;
    email: string;
    message: string;
    date: string;
}

export default function ContactMe() {
    const [formData, setFormData] = useState<FormData>({
        name: 'Hello world',
        email: '',
        message: '',
        date: new Date().toISOString()
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        const formatter = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });

        return formatter.format(date);
    }

    const codeShow = `
const button = document.querySelector('#sendBtn');

const message = {
    name: "${formData.name}",
    email: "${formData.email}",
    message: "${formData.message}",
    date: "${formatDate(formData.date)}"
}

button.addEventListener('click', () => {
    form.send(message);
})
    `.trim();

    return (
        <div className="flex-1 h-full flex font-firaCode text-secondary-1">
            <Sidebar />
            <div className="flex-1 flex flex-col border-r border-border-gray">
                <div className='border-b border-border-gray'>
                    <div className='flex items-center justify-between px-4 py-2 border-r border-border-gray w-[12%]'>
                        <div>contacts</div>
                        <div>x</div>
                    </div>
                </div>
                <div className='flex-1 h-full flex'>
                    <div className="w-[45%] border-r border-border-gray flex items-center">
                        <form className="mx-auto space-y-4 w-[60%]">
                            <div>
                                <label htmlFor="name">_name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="mt-2 w-full px-3 py-1 bg-primary-3 border border-border-gray focus:border-secondary-1 rounded-lg"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">_email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="mt-2 w-full px-3 py-1 bg-primary-3 border border-border-gray focus:border-secondary-1 rounded-lg"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">_message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="mt-2 w-full px-3 py-1 bg-primary-3 border border-border-gray focus:border-secondary-1 rounded-lg resize-none"
                                    value={formData.message}
                                    onChange={handleTextAreaChange}
                                />
                            </div>
                            <div>
                                <button type="submit" className="bg-secondary-6 text-secondary-4 py-2 px-3 rounded-lg">submit-message</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="mx-auto space-y-4 w-[60%] flex-1">
                            <Highlight
                                theme={themes.nightOwl} code={codeShow} language="javascript"
                            >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={`${className} p-4 rounded-lg`} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                <span className="text-gray-500 mr-4 inline-block w-6 text-right">
                                                    {i + 1}
                                                </span>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </pre>
                                )}
                            </Highlight>
                        </div>
                    </div>
                    <div className='w-[1.5%] border-l border-border-gray h-full'>
                        <div className='bg-secondary-1 h-[1%] mt-2 mx-[2px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}