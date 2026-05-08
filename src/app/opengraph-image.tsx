import { ImageResponse } from 'next/og';
import meta from '@/config/metadata';
import path from 'node:path';
import fs from 'node:fs/promises';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const alt = `${meta.name} 포트폴리오`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Font
  const fontPath = path.join(
    process.cwd(),
    'public',
    'fonts',
    'Pretendard-Bold.woff',
  );
  const pretendard = await fs.readFile(fontPath);
  const wavingHandPath = path.join(
    process.cwd(),
    'public',
    'waving-hand-fixed.png',
  );
  const wavingHand = await fs.readFile(wavingHandPath);
  const wavingHandDataUrl = `data:image/png;base64,${wavingHand.toString('base64')}`;

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        letterSpacing: '-0.025em',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          height: '10px',
          width: '100%',
          background: 'linear-gradient(to right, #0E5BE7, #EC4899)',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '60px',
          paddingBottom: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          안녕하세요!
          <img src={wavingHandDataUrl} width={112} height={112} alt="" />
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          저는
          <span
            style={{
              display: 'flex',
              paddingLeft: '20px',
              background: 'linear-gradient(to right, #0E5BE7, #EC4899)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {meta.name}
          </span>
          입니다.
        </div>
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Pretendard',
          data: pretendard,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
