import { siteConfig } from './config/siteConfig'
import type { SiteMode } from './config/siteConfig'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'
import Maintenance from './pages/Maintenance'

function getMode(): SiteMode {
  const params = new URLSearchParams(window.location.search)
  const override = params.get('mode')
  if (override === 'coming_soon' || override === 'live' || override === 'maintenance') {
    return override
  }
  return siteConfig.mode
}

export default function App() {
  const mode = getMode()

  if (mode === 'coming_soon') return <ComingSoon />
  if (mode === 'maintenance') return <Maintenance />

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}
