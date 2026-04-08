import Image from "next/image";

interface FloatingCardProps {
  number: number;
  imageUrl: string;
  className?: string;
}

export function FloatingCard({ number, imageUrl, className = "" }: FloatingCardProps) {
  return (
    <div
      className={`absolute w-64 bg-white rounded-xl p-6 shadow-2xl transform perspective-1000 ${className}`}
      style={{
        transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
      }}
    >
      <div className="text-4xl font-light mb-4">{number}</div>
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Design Preview ${number}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
