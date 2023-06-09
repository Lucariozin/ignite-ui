import { getContrast } from 'polished'

import { colors } from '@ignite-ui-lucariozin/tokens'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => (
    <div
      key={key}
      style={{
        display: 'flex',
        justifyContent: 'space-between',

        padding: '2rem',
        fontFamily: 'monospace',

        color: getContrast(color, '#FFF') < 3.5 ? 'black' : 'white',
        backgroundColor: color,
      }}
    >
      <strong>${key}</strong>
      <strong>{color}</strong>
    </div>
  ))
}
