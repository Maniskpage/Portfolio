/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_URL: string
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_SERVICE_KEY: string
  readonly VITE_TEMPLATE_KEY: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAIL: string
  readonly VITE_GITHUB_WEBFLUX: string
  readonly VITE_GITHUB_RESUMEAI: string
  readonly VITE_INVOICE_LIVE_URL: string
  readonly VITE_AI_RESUME_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
