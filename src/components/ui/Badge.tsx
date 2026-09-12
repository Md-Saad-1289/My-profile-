import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'status' | 'outline' | 'accent';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  pulse = false,
  className = '',
  icon,
}) => {
  const baseStyles =
    'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const variantStyles = {
    default:
      'bg-neutral-900 text-neutral-100 border border-neutral-700 font-semibold dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100',
    status:
      'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold dark:bg-emerald-950/60 dark:border-emerald-500/40 dark:text-emerald-300',
    outline:
      'bg-neutral-900/50 text-neutral-200 border border-neutral-700 font-medium dark:border-neutral-700 dark:text-neutral-200',
    accent:
      'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40 font-semibold',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
