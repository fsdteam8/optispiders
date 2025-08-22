import { ReactNode } from 'react'
import { CheckCircle } from 'lucide-react'

interface SectionBlockProps {
  tag: string
  title: string
  description?: string | ReactNode
  list?: { label: string; text: string; icon?: ReactNode }[]
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  tag,
  title,
  description,
  list,
}) => {
  return (
    <div className="my-16 max-w-[642px] container mx-auto">
      {/* Tag */}
      <div className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm text-[#2793D7] mb-4 text-center">
        {tag}
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#063668] mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-[#2F2F2F] mb-6 font-normal leading-[150%]">
          {description}
        </p>
      )}

      {/* List (for values) */}
      {list && (
        <ul className="space-y-4 text-justify">
          {list.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">
                {item.icon || <CheckCircle className="w-5 h-5" />}
              </span>
              <p>
                <strong className="text-gray-900">{item.label}:</strong>{' '}
                <span className="text-[#2F2F2F]">{item.text}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SectionBlock
