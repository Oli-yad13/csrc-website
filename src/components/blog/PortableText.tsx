'use client'

import { PortableText as PortableTextReact, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableTextBlock } from '@portabletext/types'

interface PortableTextProps {
  content: PortableTextBlock[]
}

type PortableImageValue = {
  asset?: {
    _ref?: string
  }
  alt?: string
  caption?: string
  alignment?: 'left' | 'center' | 'right' | 'full'
}

type PortableLinkValue = {
  href?: string
  blank?: boolean
}

type ChildrenProps = {
  children?: React.ReactNode
}

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: PortableImageValue }) => {
      if (!value?.asset?._ref) {
        return null
      }
      
      const imageUrl = urlFor(value).width(1200).height(800).fit('max').url()
      const alignment = value.alignment || 'center'
      
      const alignmentClasses = {
        left: 'ml-0 mr-auto',
        center: 'mx-auto',
        right: 'ml-auto mr-0',
        full: 'w-full',
      }

      return (
        <figure className={`my-8 ${alignmentClasses[alignment as keyof typeof alignmentClasses] || 'mx-auto'} ${alignment === 'full' ? 'w-full' : 'max-w-4xl'}`}>
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-4 text-sm text-gray-600 text-center italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }: ChildrenProps) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: ChildrenProps) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: ChildrenProps) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: ChildrenProps) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: ChildrenProps) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: ChildrenProps) => (
      <p className="mb-4 leading-7">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: ChildrenProps) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: ChildrenProps) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: ChildrenProps) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: ChildrenProps) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: ChildrenProps) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }: { value?: PortableLinkValue; children?: React.ReactNode }) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default function PortableText({ content }: PortableTextProps) {
  return <PortableTextReact value={content} components={components} />
}

