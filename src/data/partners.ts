export type Partner = {
  id: string
  name: string
  logo?: string
  supportReport: string
}

// Add partner teams here.
// logo accepts:
// - local asset path from public folder, e.g. "assets/partner-logo.png"
// - full URL, e.g. "https://example.com/logo.png"
export const partners: Partner[] = []

