const CoursePage = () => {
    return (
        <div className="bg-[#18181b] h-[100dvh] overflow-hidden">
            <nav className="text-[14px] text-white flex px-4 py-4 justify-between border-b border-[#535151] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-[background-color]">
                <h1 className="font-bold">EduLearn</h1>
                <ul className="flex gap-4 justify-start">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="flex h-full ">
                <div className="w-[260px] flex flex-col text-[#A1A1A1] font-medium border-r border-[#535151] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-[background-color]">
                    <div className="mt-4">
                        <div className="px-4 py-1 text-[15px] font-semibold text-white">Course</div>
                        <div className="ml-4">
                            <div className="px-4 py-1 text-[13px]">Course description</div>
                            <div className="px-4 py-1 text-[13px] text-white font-semibold">Modules</div>
                            <div className="px-4 py-1 text-[13px]">Assessments</div>
                        </div>
                        <div className="px-4 py-1 text-[13px]">Course</div>
                        <div className="px-4 py-1 text-[13px]">Course description</div>
                        <div className="px-4 py-1 text-[13px]">Modules</div>
                        <div className="px-4 py-1 text-[13px]">Assessments</div>
                        <div className="px-4 py-1 text-[13px]">Course</div>
                        <div className="px-4 py-1 text-[13px]">Course description</div>
                        <div className="px-4 py-1 text-[13px]">Modules</div>
                        <div className="px-4 py-1 text-[13px]">Assessments</div>
                        <div className="px-4 py-1 text-[13px]">Course</div>
                        <div className="px-4 py-1 text-[13px]">Course description</div>
                        <div className="px-4 py-1 text-[13px]">Modules</div>
                        <div className="px-4 py-1 text-[13px]">Assessments</div>
                    </div>
                    {/* <div className=" fixed bottom-[15px] w-full border-t border-[#535151] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-[background-color]">
                        <div className="flex items-center gap-2 ml-4">
                            <img className="w-[30px] rounded-full" src="https://www.gfecdn.net/img/team/yangshun.jpg" alt="" />
                            <p className="text-[13px] text-white font-semibold">Yang Shun</p>
                        </div>
                    </div> */}
                </div>
                <div className="w-full flex justify-center py-10">
                    <h1 className="text-[#F4F4F5] font-semibold text-[30px]">Front End Coding Interviews </h1>
                </div>
                <div className="flex flex-col h-full relative p-4 w-[430px] border-l border-[#535151] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-[background-color]">
                        <input type="text" placeholder="Ask somthing..." className="self-end w-full p-3 bg-[#2a2929] text-white" />
                </div>
            </div>
        </div>
    )
}




export default CoursePage