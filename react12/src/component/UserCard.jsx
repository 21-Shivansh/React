
const UserCard = ({user}) => {

  return (

    <div key={user.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

      {/* User Header */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
            {user.name.firstname.charAt(0).toUpperCase()}
            {user.name.lastname.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="font-bold text-slate-900 capitalize">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-sm text-slate-500">
              @{user.username}
            </p>
          </div>
        </div>
        {/* ID */}
        <span className="text-xs font-semibold text-slate-400">
          #{user.id}
        </span>
      </div>

      {/* User Details */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            ✉
          </div>
          <div className="min-w-0">
            <p className="text-xs text-slate-400">
              Email
            </p>
            <p className="text-sm font-medium text-slate-700 truncate">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
            ☎
          </div>
          <div>
            <p className="text-xs text-slate-400">
              Phone
            </p>
            <p className="text-sm font-medium text-slate-700">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
            📍
          </div>
          <div>
            <p className="text-xs text-slate-400">
              Location
            </p>
            <p className="text-sm font-medium text-slate-700 capitalize">
              {user.address.city}
            </p>
            <p className="text-xs text-slate-400 capitalize">
              {user.address.number}, {user.address.street}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs font-medium text-green-600">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Active
        </span>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
          View Details →
        </button>
      </div>

    </div>
  )
}

export default UserCard
