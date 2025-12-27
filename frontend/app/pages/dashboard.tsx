export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-xl font-semibold">Student Portal Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Welcome, Student
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-700 mb-2">My Courses</h3>
            <p className="text-sm text-gray-500">
              View your registered courses.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-700 mb-2">Grades</h3>
            <p className="text-sm text-gray-500">
              Check your academic results.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-gray-700 mb-2">Profile</h3>
            <p className="text-sm text-gray-500">
              Update your personal information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
