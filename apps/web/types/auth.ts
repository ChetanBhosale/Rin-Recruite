export type UserRole = 'recruiter' | 'candidate';

export interface AuthFormData {
  email: string;
  password: string;
  role?: UserRole;
  confirmPassword?: string; // Only for signup
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  role?: string;
  confirmPassword?: string;
}

export interface AuthBoxProps {
  mode: 'signin' | 'signup';
  onSubmit: (data: AuthFormData) => void;
  onGoogleAuth: () => void;
} 