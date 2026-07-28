import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const BRAND_NAME = 'PHILLIPS';
const BRAND_SUB = 'FAMILY ENTERPRISES';
const YEARS_BADGE = '5+ YEARS';
const HEADLINE_LINE_1 = 'Sell your house fast.';
const HEADLINE_LINE_2_PREFIX = 'Get paid in';
const HEADLINE_ACCENT = 'cash.';
const SUBTEXT = 'No repairs. No agent fees. No waiting on financing.';

// Cormorant Garamond weight (500) has no italic axis at the
// google-generated font url unless it's in the imports, so we mirror the
// exact weights the site already loads in tailwind.css.
async function loadGoogleFont(family: string, weight: number, text: string, italic = false) {
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url, {
    headers: {
      // Google serves woff2 by default, which satori can't parse — an
      // old-browser UA forces the ttf/otf src satori needs.
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
    },
  }).then((res) => res.text());

  const fontUrlMatch = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype|woff)'\)/);
  if (!fontUrlMatch) {
    throw new Error(`Could not load font: ${family} ${weight}${italic ? ' italic' : ''}`);
  }

  const fontResponse = await fetch(fontUrlMatch[1]);
  return fontResponse.arrayBuffer();
}

export default async function handler(request: Request) {
  const { origin } = new URL(request.url);

  const cormorantBoldText = BRAND_NAME;
  const cormorantSemiboldText = `${HEADLINE_LINE_1} ${HEADLINE_LINE_2_PREFIX}`;
  const cormorantItalicText = HEADLINE_ACCENT;
  const robotoRegularText = [BRAND_SUB, SUBTEXT].join(' ');
  const robotoBoldText = YEARS_BADGE;

  const [logoData, cormorantBold, cormorantSemibold, cormorantItalic, robotoRegular, robotoBold] =
    await Promise.all([
      fetch(`${origin}/logo-crest.png`).then((res) => res.arrayBuffer()),
      loadGoogleFont('Cormorant Garamond', 700, cormorantBoldText),
      loadGoogleFont('Cormorant Garamond', 600, cormorantSemiboldText),
      loadGoogleFont('Cormorant Garamond', 500, cormorantItalicText, true),
      loadGoogleFont('Roboto', 400, robotoRegularText),
      loadGoogleFont('Roboto', 700, robotoBoldText),
    ]);

  const logoSrc = `data:image/png;base64,${btoa(
    Array.from(new Uint8Array(logoData))
      .map((byte) => String.fromCharCode(byte))
      .join(''),
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 72px',
          fontFamily: 'Roboto',
          background: 'linear-gradient(160deg, #0A2C4E 0%, #0F3A63 55%, #15487A 100%)',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoSrc} width={220} height={98} style={{ objectFit: 'contain' }} />
            <div style={{ display: 'flex', width: 1, height: 90, margin: '0 20px', background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 700,
                  fontSize: 42,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                {BRAND_NAME}
              </span>
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 400,
                  letterSpacing: 6,
                  textTransform: 'uppercase',
                  color: '#8FE0A0',
                  marginTop: 8,
                }}
              >
                {BRAND_SUB}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 20px',
              borderRadius: 999,
              border: '1px solid rgba(143,224,160,0.4)',
              color: '#8FE0A0',
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 1,
            }}
          >
            <div style={{ display: 'flex', width: 7, height: 7, borderRadius: 999, background: '#8FE0A0' }} />
            <span>{YEARS_BADGE}</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Cormorant Garamond',
              fontWeight: 600,
              fontSize: 78,
              lineHeight: 1.06,
              color: '#FFFFFF',
            }}
          >
            {HEADLINE_LINE_1}
          </div>
          <div style={{ display: 'flex', fontSize: 78, lineHeight: 1.06 }}>
            <span style={{ display: 'flex', fontFamily: 'Cormorant Garamond', fontWeight: 600, color: '#FFFFFF', marginRight: 20 }}>
              {HEADLINE_LINE_2_PREFIX}
            </span>
            <span style={{ display: 'flex', fontFamily: 'Cormorant Garamond', fontWeight: 500, fontStyle: 'italic', color: '#8FE0A0' }}>
              {HEADLINE_ACCENT}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: 27,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {SUBTEXT}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Cormorant Garamond', data: cormorantBold, weight: 700, style: 'normal' },
        { name: 'Cormorant Garamond', data: cormorantSemibold, weight: 600, style: 'normal' },
        { name: 'Cormorant Garamond', data: cormorantItalic, weight: 500, style: 'italic' },
        { name: 'Roboto', data: robotoRegular, weight: 400, style: 'normal' },
        { name: 'Roboto', data: robotoBold, weight: 700, style: 'normal' },
      ],
    },
  );
}
