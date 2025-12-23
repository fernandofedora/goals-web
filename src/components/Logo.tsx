import { useState } from 'react'

export default function Logo({ size = 32, rounded = true }: { size?: number; rounded?: boolean }) {
  const [src, setSrc] = useState('/logo.png')
  return (
    <img
      src={src}
      alt="Goals System logo"
      width={size}
      height={size}
      onError={() => setSrc('/logo.svg')}
      className={rounded ? 'rounded-full' : ''}
      style={{ width: size, height: size }}
    />
  )
}
