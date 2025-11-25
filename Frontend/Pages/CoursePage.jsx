import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavLink } from "react-router";

const TestPage = () => {
    const [showChatBot, setShowChatBot] = useState(false);
    const [showCourseList, setShowCourseList] = useState(false);
    const [showSubTopic, setShowSubTopic] = useState(false);

    // useEffect(()=>{
    //     const response = axios.post('http://localhost:3000/ai/getCourse', {course: 'react'});
    //     console.log(response.data)
    // },[])

    return (
        <div className='bg-[#18181b] h-[100svh] flex flex-col selection:bg-[#535151]'>
            <nav className="text-[14px] text-white flex px-4 py-4 justify-between border-b border-[#535151] border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 transition-[background-color]">
                <h1 className="font-bold">EduLearn</h1>
                <ul className="flex gap-4 justify-start">
                    <li><NavLink href="#">Home</NavLink></li>
                    <li><NavLink href="#">About</NavLink></li>
                    <li><NavLink href="#">Contact</NavLink></li>
                </ul>
            </nav>
            <div className='flex flex-1 overflow-hidden relative'>
                {/* courseList */}
                <div className={`md:w-[19%] w-full h-full flex absolute top-0 left-0 ${showCourseList ? 'z-10' : '-z-10'} md:relative md:z-auto`}>
                    <div className={`${showCourseList ? 'block' : 'hidden'} md:block w-[80%] md:w-full h-full bg-[#18181b] flex flex-col justify-between border-r border-[#535151] border-neutral-200 dark:border-neutral-800`}>
                        <div className='h-full w-full overflow-auto custom-scrollbar p-2'>
                            <div>
                                <button onClick={()=> setShowSubTopic(!showSubTopic)} class=" w-full rounded-md hover:bg-[#535151] flex flex-1 items-center justify-between gap-2 px-2 py-1.5 transition-colors focus-visible:outline-neutral-700 dark:focus-visible:outline-brand" type="button" id="radix-:R2b7l9uuffkva:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                    <div class="text-[0.8125rem] leading-4">
                                        <span class="text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left">
                                            Front End Interview
                                        </span>
                                    </div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 text-neutral-500 dark:text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                </button>
                                {
                                    showSubTopic &&
                                    <div>
                                        <div className='rounded-md hover:bg-[#535151] ml-6 text-[0.8125rem] leading-4 text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left cursor-pointer p-1'>
                                            React component
                                        </div>
                                        <div className='rounded-md hover:bg-[#535151] ml-6 text-[0.8125rem] leading-4 text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left cursor-pointer p-1'>
                                            React component
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>
                                <button onClick={()=> setShowSubTopic(!showSubTopic)} class=" w-full rounded-md hover:bg-[#535151] flex flex-1 items-center justify-between gap-2 px-2 py-1.5 transition-colors focus-visible:outline-neutral-700 dark:focus-visible:outline-brand" type="button" id="radix-:R2b7l9uuffkva:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                    <div class="text-[0.8125rem] leading-4">
                                        <span class="text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left">
                                            Front End Interview
                                        </span>
                                    </div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 text-neutral-500 dark:text-neutral-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                    </svg>
                                </button>
                                {
                                    showSubTopic &&
                                    <div>
                                        <div className='rounded-md hover:bg-[#535151] ml-6 text-[0.8125rem] leading-4 text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left cursor-pointer p-1'>
                                            React component
                                        </div>
                                        <div className='rounded-md hover:bg-[#535151] ml-6 text-[0.8125rem] leading-4 text-neutral-600 dark:text-neutral-400 font-medium line-clamp-1 text-ellipsis text-left cursor-pointer p-1'>
                                            React component
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* Profile */}
                        <div className='md:absolute bottom-0 w-full h-[50px] flex items-center p-4 bg-[#18181b] border-t border-r border-[#535151] dark:border-neutral-800'>
                            <img className="w-[30px] mr-2 rounded-full" src="https://www.gfecdn.net/img/team/yangshun.jpg" alt="" />
                            <p className="text-[13px] text-white font-semibold">Yang Shun</p>
                        </div>
                    </div>
                    {/* Close button for course list on mobile */}
                    <button onClick={() => setShowCourseList(false)} className={`${showCourseList ? 'block' : 'hidden'} md:hidden bg-[#27272a] ml-2 mt-2 rounded-full hover:bg-[#3f3f46] cursor-pointer flex items-center justify-center w-[40px] h-[40px]`}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 !size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </button>
                </div>

                {/* Hamburger menu to show course list on mobile */}
                <button onClick={() => setShowCourseList(true)} className='absolute top-2 left-2 bg-[#27272a] rounded-full hover:bg-[#3f3f46] cursor-pointer flex md:hidden items-center justify-center w-[40px] h-[40px]'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 !size-4 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                </button>

                {/* MainContent */}
                <div className={`h-full flex-1 p-4 md:px-20 md:py-15 text-white`}>
                    <div className='md:px-20 md:py-15 h-full overflow-auto custom-scrollbar'>
                        <h1 className='text-[30px] font-semibold'>Lorem ipsum dolor sit.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia inventore voluptatem suscipit? Ad, deleniti. Sit esse quod aut. Blanditiis perspiciatis voluptatibus numquam reiciendis ipsam quis libero magnam natus harum praesentium? Quaerat totam blanditiis culpa reiciendis enim aspernatur modi cum obcaecati doloribus tenetur dolor laudantium, incidunt accusamus voluptate sint voluptatem nostrum corporis? Amet ea quos quod consectetur facere similique? Accusantium sapiente atque ut illum officia id voluptatem, illo at praesentium consequatur assumenda nostrum ea commodi modi cumque pariatur sint. Molestiae, nihil. Quisquam excepturi odio deserunt dolore eum nostrum soluta iure corporis, dicta quos tempora odit voluptatum, nulla aliquam sit nobis.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat atque sint, voluptatibus nemo necessitatibus quo consectetur doloribus temporibus nihil corrupti at animi quis? Fugiat tenetur accusamus, repellendus voluptatibus dignissimos quae natus aspernatur nisi sit fugit cum sapiente voluptatum eveniet optio quibusdam amet maxime nostrum incidunt tempore doloribus, error animi asperiores quo suscipit. Totam temporibus omnis sit, architecto nostrum iure necessitatibus ipsa reprehenderit cum, ullam, facere neque voluptas tempore eius. Dignissimos tenetur, pariatur magnam quam officia enim doloremque molestiae quisquam sapiente harum esse a. Eveniet voluptates consequatur, aut possimus culpa vel ad eaque nihil, a eligendi quos. Cupiditate ut, laborum suscipit odit molestiae in vitae saepe repellat dolorum qui excepturi sint voluptatibus perferendis. Tenetur sapiente aspernatur inventore veniam omnis dolor libero dolorum, nostrum mollitia harum exercitationem repudiandae. Excepturi harum esse dolor nostrum voluptas numquam blanditiis vitae ducimus eius. Cum beatae libero dolores, accusamus, explicabo atque modi ratione voluptatum distinctio reprehenderit quos! Id vero voluptas repellat iure harum! Corporis, at. Rem eum ut sint, quis itaque possimus! Magni accusantium, ducimus enim recusandae nam, dolore culpa doloribus libero quam dignissimos minus, reprehenderit atque hic velit? Rem, nihil a aliquid vitae consectetur ipsa tenetur adipisci, inventore neque tempore reiciendis nulla voluptatibus doloremque enim.
                        </p>
                    </div>
                </div>

                {/* chatBot */}
                <div className='h-full flex absolute bottom-0 right-0 md:relative '>
                    {/* chatBot button */}
                    <div className="flex flex-col-reverse px-2 pb-2">
                        <button
                            onClick={() => setShowChatBot(!showChatBot)}
                            className="text-white w-[50px] h-[50px] aspect-square flex items-center justify-center bg-[#27272a] rounded-full hover:bg-[#3f3f46] transition-all duration-300 cursor-pointer">
                            <i className="ri-robot-2-line text-2xl text-white"></i>
                        </button>
                    </div>
                    {/* chating section */}
                    <div className={`bg-[#18181b] flex flex-col h-full border-l border-[#535151] dark:border-neutral-800 transform transition-all duration-500 ease-in-out ${showChatBot ? 'w-[300px] p-4 ' : 'w-0'}`}>
                        <div className='flex-1 '></div>
                        <div className='flex gap-2 items-center overflow-hidden'>
                            <input className={`transform transition-all duration-500 ease-in-out ${showChatBot ? 'w-full px-3 py-2  border ' : 'w-0'} border-[#535151] dark:border-neutral-800 mx-auto bg-[#27272a] focus:outline-none text-white rounded-sm`} placeholder='Ask me...' type="text" name="" id="" />
                            <div>
                                <button className='bg-white p-2 grid place-content-center rounded-full'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-[2] relative"><path d="M5 11L12 4M12 4L19 11M12 4V21" stroke="currentColor"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage