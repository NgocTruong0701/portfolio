import { Sidebar } from "./components/sidebar";

export default function ContactMe() {
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
                    <div className='flex-1 h-full'>

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
                    </div>
                </div>
            </div>
        </div>
    )
}