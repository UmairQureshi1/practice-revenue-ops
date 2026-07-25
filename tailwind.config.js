/**
 * Tailwind theme built from the Hello Rache capture — colors, gradients and
 * motion pulled from the site's live CSS (Bricks + AutomaticCSS variables,
 * post-*.min.css hover/transition rules, splide slider config).
 * Retheme centrally here — components reference these tokens, not raw hex.
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
    colors: {
      primary: {
        DEFAULT: '#0E3A5D',
        hover: '#123D63',
        mid: '#2F5D7C',
        dark: '#081F33',

        light: '#EAF4F8',
        'ultra-light': '#F8FBFD',

        magenta: '#5DAA4F',
        semi: '#84C95E',
      },

  secondary: '#5DAA4F',
  success: '#84C95E',

  heading: '#102A43',
  ink: '#1F2937',
  muted: '#64748B',

  surface: '#F8FAFC',
  surface2: '#FFFFFF',

  navy: '#0E3A5D',
  silver: '#D8DDE3',

  gold: '#F4B740',
  line: '#E5E7EB',
},
      // colors: {
      //   // Brand purple scale — exact ACSS --base-* values from the source site.
      //   primary: {
      //     DEFAULT: '#8B1E8E',        // --base / --primary
      //     hover: '#a023a4',          // --base-hover
      //     mid: '#9c27b0',            // gradient mid stop
      //     magenta: '#d466d4',        // --base gradient bright end
      //     semi: '#dc6ce0',           // --base-semi-light
      //     light: '#f0c0f2',          // --base-light
      //     'ultra-light': '#faeafb',  // --base-ultra-light
      //     dark: '#661669',           // --base-dark
      //   },
      //   tertiary: '#E8D3E9',         // --tertiary (soft lavender)
      //   heading: '#424242',          // --secondary (headings/body ink)
      //   ink: '#000000',              // --neutral
      //   muted: '#5e5e5e',
      //   surface: '#F7F9FB',          // --accent (light blue-grey sections)
      //   surface2: '#fcfcfc',         // near-white section tint (most common)
      //   navy: '#2b4055',             // --accent-dark
      //   gold: '#fac83b',             // rating stars (from :hover color rule)
      //   line: '#dddedf',             // borders
      // },
      fontFamily: {
        heading: ['Montserrat', 'Arial', 'sans-serif'],
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        r1: '5px',
        r2: '15px',
        r6: '30px',
        pill: '100px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
        s1: 'rgba(0, 0, 0, 0.2) 1px 1px 10px 1px',
      },
      maxWidth: {
        // Matches the live site's rendered content container (1100px), measured
        // via CDP at multiple viewports — gives the same surrounding whitespace.
        content: '71.25rem', // 1140px box → 1100px content inside px-5 gutters
      },
      transitionDuration: {
        // --brxw-transition-s/m/l
        s: '200ms',
        m: '350ms',
        l: '500ms',
      },
backgroundImage: {
  'purple-gradient':
    'linear-gradient(135deg, #0D2E4F 0%, #2F5D7C 60%, #5DAA4F 100%)',

  'purple-radial':
    'radial-gradient(circle at center, #0D2E4F 0%, #081F33 100%)',

  'purple-hover':
    'linear-gradient(135deg, #1E5578 0%, #5DAA4F 100%)',

  'img-overlay':
    'linear-gradient(0deg, rgba(0,0,0,.45), rgba(0,0,0,.15), transparent)',
},
      // backgroundImage: {
      //   // Bright magenta card/banner gradient — sampled from the live site
      //   // (service cards #942696 -> #cf61ce, testimonials, final CTA).
      //   'purple-gradient':
      //     'linear-gradient(160deg, #942696 0%, #b845b9 55%, #cf61ce 100%)',
      //   // Darker solid-ish radial used only on the thin credibility / CTA strips.
      //   'purple-radial':
      //     'repeating-radial-gradient(closest-corner at center, #8b1e8e, #9c27b0)',
      //   // Hover state used on the purple cards/buttons.
      //   'purple-hover': 'repeating-radial-gradient(at center, #d466d4, #8b1e8e)',
      //   'img-overlay':
      //     'linear-gradient(0deg, rgba(0,0,0,.5), rgba(0,0,0,.25) 70%, transparent)',
      // },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Directional entrances mirroring the site's animate.css usage.
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInOnly: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        badgeBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        badgeBounce: 'badgeBounce 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
