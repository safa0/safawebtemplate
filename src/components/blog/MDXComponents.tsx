import { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4538] mb-6 mt-12 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4538] mb-5 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#2F4538] mb-4 mt-8">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#2F4538] mb-3 mt-6">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-lg md:text-xl font-serif font-semibold text-[#2F4538] mb-3 mt-5">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-base md:text-lg font-serif font-semibold text-[#2F4538] mb-2 mt-4">
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-base md:text-lg leading-relaxed text-[#2F4538]/80 mb-6">
      {children}
    </p>
  ),

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    const Component = isExternal ? 'a' : Link;

    return (
      <Component
        href={href || '#'}
        className="text-[#2F4538] underline decoration-khaki decoration-2 underline-offset-4 hover:decoration-accent transition-colors"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Component>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base md:text-lg text-[#2F4538]/80 leading-relaxed pl-2">
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-khaki bg-khaki-light/30 pl-6 pr-4 py-4 mb-6 italic">
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children, className }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code className="bg-[#2F4538]/10 text-[#2F4538] px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      );
    }

    return (
      <code className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-[#2F4538] text-khaki-light p-6 rounded-lg overflow-x-auto mb-6 text-sm md:text-base">
      {children}
    </pre>
  ),

  // Horizontal Rule
  hr: () => (
    <hr className="border-t-2 border-khaki my-12" />
  ),

  // Table
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-khaki">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-khaki-light">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-khaki/30">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr>
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-6 py-3 text-left text-sm font-semibold text-[#2F4538]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 text-sm text-[#2F4538]/80">
      {children}
    </td>
  ),

  // Images (using standard img for MDX content)
  img: ({ src, alt }) => {
    if (!src) return null;

    return (
      <div className="relative w-full my-8 rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ''}
          className="w-full h-auto"
        />
        {alt && (
          <p className="text-sm text-[#2F4538]/60 text-center mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    );
  },

  // Strong
  strong: ({ children }) => (
    <strong className="font-semibold text-[#2F4538]">
      {children}
    </strong>
  ),

  // Emphasis
  em: ({ children }) => (
    <em className="italic">
      {children}
    </em>
  ),
};
