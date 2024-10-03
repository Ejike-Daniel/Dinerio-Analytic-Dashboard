import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../assets/404.png'
export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <>
            <div className=" flex flex-col items-center justify-center ">
                <div className="relative w-full">
                    <img src={errorImg} alt="error img " className="mx-auto" />
                    <Link to={'/'}>
                        <button className=" px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg absolute top-4 left-3  ">
                            👈 Back
                        </button>
                    </Link>
                </div>
                <p className=" text-center text-black  text-3xl ">
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p className="text-red-600 flex gap-2 justify-center items-center">
                        <i>Page</i>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </p>
            </div>
        </>
    )
}
