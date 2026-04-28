'use client';

import React from 'react';
import Link from 'next/link';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { authClient } from '../lib/auth-client';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';
import SocailLink from '@/components/SocailLink';

const inputStyles = {
  base: 'w-full',
  inputWrapper:
    'bg-white/5 border border-white/10 hover:border-purple-500/50 focus-within:border-purple-500 rounded-xl px-4 py-3 h-auto',
  input: 'text-white placeholder:text-zinc-500 text-sm',
};

const SigInupPages = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      toast.success('Account Created Successfully');
      router.push('/allphoto');
    }

    if (error) {
      toast.error('Signup Failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-zinc-900 to-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.15)] p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300 text-sm mb-5">
            <Sparkles size={16} />
            Welcome Back
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">Sign In</h1>

          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Login to continue your AI creative journey
          </p>
        </div>

        {/* Form */}
        <Form className="space-y-5" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? 'Please enter a valid email'
                : null
            }
          >
            <Label className="text-zinc-300 mb-1 block">Email Address</Label>

            <Input
              placeholder="john@example.com"
              startContent={
                <Mail size={18} className="text-zinc-500 flex-shrink-0" />
              }
              classNames={inputStyles}
            />

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            minLength={8}
            validate={value => {
              if (value.length < 8)
                return 'Password must be at least 8 characters';
              if (!/[A-Z]/.test(value)) return 'Must include uppercase letter';
              if (!/[0-9]/.test(value)) return 'Must include number';
              return null;
            }}
          >
            <Label className="text-zinc-300 mb-1 block">Password</Label>

            <Input
              placeholder="Enter your password"
              startContent={
                <Lock size={18} className="text-zinc-500 flex-shrink-0" />
              }
              classNames={inputStyles}
            />

            <Description className="text-zinc-500 text-xs mt-1">
              Minimum 8 characters, 1 uppercase, 1 number
            </Description>

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 py-6 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            Login Account
          </Button>
        </Form>

        {/* Social Login */}
        <div className="mt-6">
          <SocailLink />
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-zinc-400 text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigInupPages;
