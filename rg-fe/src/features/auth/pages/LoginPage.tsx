import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Radio, LogIn, UserCheck, ArrowLeft } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login, loginAsGuest } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuest = () => {
    loginAsGuest()
    navigate('/dashboard')
  }

  return (
    <main className="min-h-screen bg-[#0b0d12] bg-neo-dots flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-md border-[3px] border-black bg-[#161a23] p-8 shadow-neo-lg relative">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO HOME</span>
        </Link>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-11 w-11 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
            <Radio className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              OPERATOR LOGIN
            </h1>
            <p className="text-xs font-mono text-gray-400">
              Access your saved matches & leaderboard rank
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operator@radio.fm"
              className="w-full bg-[#10131a] border-2 border-black p-3 font-mono text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ffe600]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase text-gray-300 mb-1.5">
              Access Code / Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#10131a] border-2 border-black p-3 font-mono text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ffe600]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black py-3.5 text-sm uppercase gap-2 font-black mt-2"
          >
            <LogIn className="w-4 h-4" />
            <span>{isLoading ? 'VERIFYING...' : 'SIGN IN TO BASE'}</span>
          </button>
        </form>

        <div className="mt-5 pt-5 border-t border-gray-800 text-center">
          <button
            type="button"
            onClick={handleGuest}
            className="w-full btn-neo bg-[#00f0ff] hover:bg-[#3ce5f2] text-black py-3 text-xs uppercase gap-2 font-black mb-4"
          >
            <UserCheck className="w-4 h-4" />
            <span>PLAY AS GUEST (NO LOGIN REQUIRED)</span>
          </button>

          <p className="text-xs font-mono text-gray-400">
            Need an account?{' '}
            <Link to="/register" className="text-[#ffe600] font-bold underline hover:text-white">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
