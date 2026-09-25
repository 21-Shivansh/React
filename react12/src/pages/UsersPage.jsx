import React, { useContext } from 'react'
import UserCard from '../component/UserCard'
import { Auth } from '../context/MyContext'

const UsersPage = () => {

  const {userData} = useContext(Auth);

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10 scrollbar-none overflow-scroll">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            User Management
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mt-1">
                Users
              </h1>
              <p className="text-slate-500 mt-2">
                Manage and view all registered users.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
              <p className="text-xs text-slate-400">
                Total Users
              </p>
              <p className="text-xl font-bold text-slate-900">
                {userData.length}
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {userData.map((user) => <UserCard user={user}/>)}
        </div>
      </div>
    </div>
  )
}

export default UsersPage

