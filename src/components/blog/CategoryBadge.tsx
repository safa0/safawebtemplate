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
    default: 'bg-accent text-white hover:bg-accent/80',
    outline: 'border border-earth text-dark hover:bg-dark hover:text-white',
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
      className="inline-flex items-center px-2 py-1 text-xs rounded bg-khaki-light text-dark/70 hover:bg-earth/10 transition-colors"
    >
      #{name}
    </Link>
  );
}
