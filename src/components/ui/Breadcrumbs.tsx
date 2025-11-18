import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-earth transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-earth font-medium' : ''}>
                  {item.label}
                </span>
              )}

              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
