import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="md:w-[450px] bg-[#171717] border border-[#ffffff1a] rounded-lg ">
            <div className="flex flex-col p-6 space-y-1.5 text-left">
                <h2 className="text-2xl font-semibold">Sign In</h2>
                <p className="text-sm text-[#a1a1a1]">Enter you email below to login to your account</p>
            </div>
            <div className="p-6 pt-0">
                <form action="" className="space-y-2">
                    <div className="w-full space-y-2 mb-4">
                        <label className="text-sm font-medium leading-none" htmlFor="email">Email</label><br />
                        <input className="bg-[#0a0a0a] text-sm border border-[#ffffff1a] rounded-lg px-2 py-2 font-light w-full" type="email" name="email" id="email" autoComplete="email" required placeholder="riya@gmail.com" />
                    </div>
                    <div className="w-full space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm font-medium leading-none">
                            <label htmlFor="password">Password</label>
                            <Link className="underline">Forgot Password?</Link>
                        </div>
                        <input className="bg-[#0a0a0a] text-sm border border-[#ffffff1a] rounded-lg px-2 py-2 font-light w-full" type="password" name="password" id="password" autoComplete="current-password" required placeholder="Password" />
                    </div>
                    <button className="bg-white text-black rounded-lg w-full px-4 py-2 font-semibold text-[14px]">Login</button>
                    <div className="relative flex justify-center text-[#a1a1a1] text-sm my-6">
                        <div className="absolute w-full h-[1px] bg-[#ffffff1a]"></div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#171717] px-1">Or continue with</div>
                    </div>
                    <div className="mt-4 flex gap-3">
                        {/* <button className="flex-1 justify-center items-center bg-[#0a0a0a] border border-[#ffffff1a] hover:bg-[#ffffff1a] rounded-lg cursor-pointer px-4 py-2 text-xl"><i className="ri-google-fill"></i></button> */}
                        <button type="button" className="flex flex-1 justify-center items-center bg-[#0a0a0a] border border-[#ffffff1a] rounded-lg cursor-pointer px-4 py-2 text-xl"><img className="size-4" src="https://svgl.app/library/google.svg" alt="" /></button>
                        <button type="button" className="flex-1 justify-center items-center bg-[#0a0a0a] border border-[#ffffff1a] hover:bg-[#ffffff1a] rounded-lg cursor-pointer px-4 py-2 text-xl"><i className="ri-github-fill"></i></button>
                    </div>
                    <p className="text-sm text-[#a1a1a1] pt-3">Don't have an account? <Link to="/register" className="underline">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}
