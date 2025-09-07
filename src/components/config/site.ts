// Tipos para el sitio web de Altura Creativa

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  features: string[]
  icon: string
}

export interface ContactInfo {
  email: string
  phone: string
  phoneFormatted: string
  address: {
    street: string
    city: string
    country: string
    full: string
  }
  businessHours: {
    [key: string]: string
  }
}

export interface SocialLinks {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
}

export interface ThemeColors {
  primary: string
  primaryRGB: string
  secondary: string
  secondaryRGB: string
  dark: string
  darkRGB: string
  accent: string
  accentRGB: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  billing: 'único' | 'mensual' | 'anual'
  description: string
  features: string[]
  popular: boolean
  buttonText: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  avatar?: string
  rating: number
  text: string
  service: string
}

export interface Statistic {
  number: string
  label: string
  description: string
}

export interface FormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export interface ContactFormData extends FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface Company {
  name: string
  slogan: string
  foundedYear: number
  sector: string
  location: string
}

export interface TechnicalConfig {
  gtmId: string
  gaId: string
  pixelId: string
  hotjarId: string
  environment: string
}

export interface Developer {
  name: string
  website: string
  copyright: string
  year: number
}

export interface FormConfig {
  action: string
  method: 'GET' | 'POST'
  fields: string[]
  required: string[]
}

// Tipos para componentes específicos
export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
}

export interface InputProps {
  id: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export interface TextareaProps {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  className?: string
}

export interface SelectProps {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

// Tipos para animaciones (Framer Motion)
export interface AnimationVariants {
  hidden: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
    }
  }
}

export interface MotionProps {
  initial?: string | object
  animate?: string | object
  exit?: string | object
  variants?: AnimationVariants
  transition?: object
  whileHover?: object
  whileTap?: object
}

// Tipos para APIs
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ContactApiRequest {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export interface ContactApiResponse extends ApiResponse {
  data?: {
    id: string
    timestamp: string
  }
}

export interface NewsletterApiRequest {
  email: string
}

export interface NewsletterApiResponse extends ApiResponse {
  data?: {
    subscribed: boolean
    email: string
  }
}

// Tipos para SEO
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  siteName?: string
}

// Tipos para componentes de layout
export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'dark'
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

// Tipos de eventos
export type FormSubmitHandler = (data: FormData) => void | Promise<void>
export type ClickHandler = () => void | Promise<void>
export type ChangeHandler<T = string> = (value: T) => void

// Tipos utilitarios
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredOnly<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>

// Constantes de tipos
export const SERVICES = ['web', 'marketing', 'consultoria', 'todo'] as const
export type ServiceType = typeof SERVICES[number]

export const FORM_STATUSES = ['idle', 'submitting', 'success', 'error'] as const
export type FormStatus = typeof FORM_STATUSES[number]

export const DEVICE_SIZES = ['mobile', 'tablet', 'desktop'] as const
export type DeviceSize = typeof DEVICE_SIZES[number]