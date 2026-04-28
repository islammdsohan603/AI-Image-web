import { authClient } from '@/app/lib/auth-client';
import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SocailLink = () => {
  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  const handleGithubSigIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'github',
    });
  };

  return (
    <div className="w-full space-y-4">
      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10"></div>
        <p className="text-sm text-zinc-500">Or continue with</p>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-1 gap-4">
        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center cursor-pointer justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300 py-3 text-white font-medium backdrop-blur-md"
        >
          <FaGoogle className="text-red-400 text-lg" />
          Continue with Google
        </button>

        {/* GitHub */}
        <button
          onClick={handleGithubSigIn}
          className="w-full flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-zinc-400/40 transition-all duration-300 py-3 text-white font-medium backdrop-blur-md"
        >
          <FaGithub className="text-lg" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocailLink;
