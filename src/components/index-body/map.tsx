import * as React from 'react'
import Imgix from 'react-imgix'
import { get } from 'lodash'
import { navigateTo } from 'gatsby-link'

import MapHovers from './map-hovers'

function cleanURL(url: string | null | undefined) {
  if (url) return url.replace('?auto=compress,format', '')
  return null
}

export function Map({ layers, highlights }) {
  const [currentLayer, setCurrentLayer] = React.useState<number>(0)
  const [currentHighlight, setCurrentHighlight] = React.useState<number | null>(
    null
  )
  const [loaded, setLoaded] = React.useState<number>(0)

  const handleClick = React.useCallback((num) => {
    const link = get(
      highlights.find((h) => get(h, 'highlightsid') === num),
      'parklink.uid'
    )
    if (link) {
      navigateTo(`/${link}`)
    }
  }, [])

  const handleHover = React.useCallback((num) => {
    setCurrentHighlight(num)
  }, [])

  const handleImgOnLoad = React.useCallback(() => {
    setLoaded((current) => (current += 1))
  }, [])

  const layerImage =
    layers &&
    get(
      layers.find((h) => get(h, 'layerid') === currentLayer),
      'layerimage'
    )
  const highlightImage =
    currentHighlight !== null &&
    highlights &&
    get(
      highlights.find((h) => get(h, 'highlightsid') === currentHighlight),
      'highlightsimage'
    )

  return (
    <div className="relative">
      {get(layerImage, 'url') ? (
        <Imgix
          src={cleanURL(layerImage.url)}
          sizes="100vw"
          htmlAttributes={{
            alt: layerImage.alt,
            onLoad: () => handleImgOnLoad,
          }}
        />
      ) : null}

      {get(highlightImage, 'url') ? (
        <div className="absolute inset-0">
          <Imgix
            src={cleanURL(highlightImage.url)}
            sizes="100vw"
            htmlAttributes={{
              alt: highlightImage.alt,
              onLoad: () => handleImgOnLoad,
            }}
          />
        </div>
      ) : null}
      <div className="absolute inset-0">
        <MapHovers onHover={handleHover} onClick={handleClick} />
      </div>
      <div className="flex flex-col w-full p-2 md:w-auto md:mt-0 md:top-0 md:left-0 md:p-4 md:absolute">
        {layers &&
          layers.map(
            (layer) =>
              get(layer, 'layername') && (
                <button
                  role="button"
                  onClick={() => setCurrentLayer(layer.layerid)}
                  className={`block px-2 py-1 mb-1 focus:outline-none text-white border border-solid text-xxs hover:text-theme-indigo hover:bg-transparent${
                    currentLayer === layer.layerid
                      ? ' bg-theme-teal border-theme-teal'
                      : ' border-theme-indigo bg-theme-indigo'
                  }`}
                >
                  {layer.layername.text}
                </button>
              )
          )}
      </div>
    </div>
  )
}
