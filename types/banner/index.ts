export interface HeroProps {
  isStatsShow?: boolean
  badgeText?: string
  badgeIcon?: React.ReactNode
  heading: React.ReactNode // allow spans, colored words, etc.
  description: string
  coloredHeading?: string
  primaryBtnText?: string
  primaryBtnIcon?: React.ReactNode
  onPrimaryBtnClick?: () => void
  secondaryBtnText?: string
  onSecondaryBtnClick?: () => void
  secondaryBtnVariant?: 'outline' | 'ghost'
  imageSrc?: string
  imageAlt?: string
  bgImage?: string
}
