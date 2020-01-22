import React, { useEffect, lazy, Suspense } from 'react'
import { useAuth0 } from 'react-auth0-wrapper'
import { useSubscription } from 'context/useSubscription'
import { useTheme } from 'context/useTheme'
import { logPageView } from 'utils/analytics'
import { LoadingBody, LoadingHeader } from 'components/helpers/suspenseFallbacks'
import { LinkNewTab } from 'components/helpers/link'

const Navbar = lazy(() => import('components/page/navbar'))

const Subscribe: React.FC = () => {
  const { loading }: { loading: boolean } = useAuth0()
  const { getSubscription } = useSubscription()
  const { theme } = useTheme()

  useEffect(() => {
    logPageView()
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    getSubscription()
  }, [getSubscription])

  if (loading) return <LoadingBody />

  return (
    <div className={`d-block ${theme.bgColor} FullHeight`}>
      <div className={`${theme.headerColor} py-2`}>
        <Suspense fallback={<LoadingHeader />}>
          <Navbar />
        </Suspense>
      </div>

      <div className={`container ${theme.bgColor} ${theme.text}`}>
        <div className="row mt-3 text-center">
          <div className="col">
            <h4>Overwhelmed? </h4>
            Check out AoS Coach's{' '}
            <LinkNewTab
              href="https://www.youtube.com/playlist?list=PLVceda-W9EygvVeoWhrKaBBCvIiSWasVo"
              label={`CoachLink`}
            >
              Emerging Meta
            </LinkNewTab>{' '}
            series, where he deep-dives on these stats and explains why certain items are popular.
          </div>
        </div>
      </div>

      <div className={`container ${theme.bgColor} ${theme.text} FullHeight`}>
        <div className="row align-items-start justify-content-center mt-3 FullHeight">
          <iframe
            width="100%"
            height="100%"
            src="https://datastudio.google.com/embed/reporting/b2197a00-c7b1-420f-a18e-26686dc19716/page/Jn4z"
            frameBorder="0"
            allowFullScreen
            title="Stats"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
