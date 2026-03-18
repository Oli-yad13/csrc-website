'use client'

import { PortableText as PortableTextReact, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableTextBlock } from '@portabletext/types'
import styles from './PortableText.module.css'

interface PortableTextProps {
  content: PortableTextBlock[]
}

type PortableImageValue = {
  asset?: { _ref?: string }
  alt?: string
  caption?: string
  alignment?: 'left' | 'center' | 'right' | 'full'
}

type PortableLinkValue = {
  href?: string
  blank?: boolean
}

type ChildrenProps = { children?: React.ReactNode }

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: PortableImageValue }) => {
      if (!value?.asset?._ref) return null
      const imageUrl = urlFor(value).width(1200).height(800).fit('max').url()
      return (
        <figure className={styles.inlineImage}>
          <div className={styles.inlineImageInner}>
            <Image
              src={imageUrl}
              alt={value.alt || ''}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 860px"
            />
          </div>
          {value.caption && (
            <figcaption className={styles.caption}>{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }: ChildrenProps) => <h1>{children}</h1>,
    h2: ({ children }: ChildrenProps) => <h2>{children}</h2>,
    h3: ({ children }: ChildrenProps) => <h3>{children}</h3>,
    h4: ({ children }: ChildrenProps) => <h4>{children}</h4>,
    blockquote: ({ children }: ChildrenProps) => <blockquote>{children}</blockquote>,
    normal: ({ children }: ChildrenProps) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }: ChildrenProps) => <ul>{children}</ul>,
    number: ({ children }: ChildrenProps) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }: ChildrenProps) => <strong>{children}</strong>,
    em: ({ children }: ChildrenProps) => <em>{children}</em>,
    code: ({ children }: ChildrenProps) => <code>{children}</code>,
    link: ({ value, children }: { value?: PortableLinkValue; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default function PortableText({ content }: PortableTextProps) {
  return (
    <div className={styles.prose}>
      <PortableTextReact value={content} components={components} />
    </div>
  )
}
