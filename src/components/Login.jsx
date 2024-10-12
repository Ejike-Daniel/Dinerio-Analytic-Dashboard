import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/')
    }

    return (
        <div className="flex flex-col items-center justify-center bg-img">
            <form
                action="post"
                className="flex flex-col items-center bg-white rounded-md h-[70%] px-6 gap-4 py-8 "
                onSubmit={handleSubmit}
            >
                <fieldset className="flex flex-col items-start gap-1">
                    <label className="text-gray-600 font-medium">Email Address</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="rounded-md border border-gray-400 py-2 px-4 focus:outline-none active:outline-none text-black"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="flex flex-col items-start gap-1">
                    <label className="text-gray-600 font-medium">Enter Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="rounded-md border border-gray-400 py-2 px-4 focus:outline-none active:outline-none text-black"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <Link
                    to={'/resetpassword'}
                    className="no-underline hover:no-underline focus:outline-none hover:text-blue-400 text-gray-600 text-[14px] text-left"
                >
                    <span>Forgot Password?</span>
                </Link>

                <div className="flex flex-col items-center gap-3">
                    <button type="submit" className="bg-[#FA8B02] px-8 w-full rounded-lg py-1 text-white font-light">
                        Login
                    </button>
                    <span className="text-gray-400 font-semibold">Or</span>
                    <button className="flex justify-between items-center gap-8 px-4 rounded-lg py-1 w-full border border-gray-400">
                        <FcGoogle />
                        <span>Login with Google</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
