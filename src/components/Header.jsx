import React from 'react'

export const Header = () => {
  return (
    <header className="bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-cyan-900 font-bold text-3xl" href="#">
          MY WEBSITE
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-cyan-900 transition hover:text-cyan-700/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-cyan-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm  hover:bg-cyan-700/75"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-cyan-900  hover:text-cyan-700/75"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
