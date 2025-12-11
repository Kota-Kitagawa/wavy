import React from 'react';
import clsx from 'clsx';

interface NavItemProps {
  label?: string;

  icon?: React.ElementType;
  onClick: () => void;
}

export function NavItem({ label, icon, onClick }: NavItemProps) {
  const buttonClass = clsx(
    'flex items-center space-x-1 px-1 py-2 cursor-pointer text-black transition duration-100 group dark:text-white',
  );

  const iconWrapper = clsx(
    'p-2 rounded-md border border-transparent transition-colors duration-100',
    'group-hover:border-white group-hover:bg-white/10'
  );

  const Icon = icon;

  return (
    <button className={buttonClass} onClick={onClick} tabIndex={0}>
      {Icon && (
        <span className={iconWrapper} aria-hidden="true">
          <Icon className="w-5 h-5" />
        </span>
      )}
      {label && <span className="text-sm">{label}</span>}
    </button>
  );
}