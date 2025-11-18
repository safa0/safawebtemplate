export function BlogCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="bg-khaki-light h-64 w-full"></div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <div className="h-6 bg-khaki-light rounded-full w-20"></div>
          <div className="h-6 bg-khaki-light rounded-full w-24"></div>
        </div>
        <div className="h-8 bg-khaki-light rounded w-3/4 mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-khaki-light rounded w-full"></div>
          <div className="h-4 bg-khaki-light rounded w-5/6"></div>
          <div className="h-4 bg-khaki-light rounded w-4/6"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 bg-khaki-light rounded w-32"></div>
          <div className="h-4 bg-khaki-light rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}

export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
        <BlogCardSkeleton key={`skeleton-${i}`} />
      ))}
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="mb-8">
        <div className="h-4 bg-khaki-light rounded w-48"></div>
      </div>

      {/* Header skeleton */}
      <div className="mb-12">
        <div className="flex gap-2 mb-4">
          <div className="h-8 bg-khaki-light rounded-full w-24"></div>
          <div className="h-8 bg-khaki-light rounded-full w-32"></div>
        </div>
        <div className="h-12 bg-khaki-light rounded w-full mb-3"></div>
        <div className="h-12 bg-khaki-light rounded w-4/5 mb-6"></div>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-khaki-light rounded-full"></div>
            <div>
              <div className="h-4 bg-khaki-light rounded w-24 mb-2"></div>
              <div className="h-3 bg-khaki-light rounded w-16"></div>
            </div>
          </div>
          <div className="h-4 bg-khaki-light rounded w-32"></div>
        </div>

        <div className="bg-khaki-light h-96 rounded-lg mb-8"></div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={`content-skeleton-${i}`}
            className="h-4 bg-khaki-light rounded"
            style={{ width: `${Math.random() * 20 + 80}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
