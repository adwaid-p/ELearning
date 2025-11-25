import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="bg-[#050505] h-[100svh] flex justify-center items-center selection:bg-[#535151] text-white">
        <Outlet />
    </div>
  )
}
