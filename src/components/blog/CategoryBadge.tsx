import Link from 'next/link';

interface CategoryBadgeProps {
  name: string;
  slug: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md';
}

export function CategoryBadge({ name, slug, variant = 'default', size = 'sm' }: CategoryBadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors';

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };

  const variantClasses = {
    default: 'bg-earth text-white hover:bg-khaki-dark',
    outline: 'border border-earth text-earth hover:bg-earth hover:text-white',
  };

  return (
    <Link
      href={`/blog?category=${slug}`}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {name}
    </Link>
  );
}

interface TagBadgeProps {
  name: string;
  slug: string;
}

export function TagBadge({ name, slug }: TagBadgeProps) {
  return (
    <Link
      href={`/blog?tag=${slug}`}
      className="inline-flex items-center px-2 py-1 text-xs rounded bg-khaki-light text-earth hover:bg-khaki transition-colors"
    >
      #{name}
    </Link>
  );
}
