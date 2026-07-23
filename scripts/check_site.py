from pathlib import Path

page = Path('app/page.tsx').read_text(encoding='utf-8')
layout = Path('app/layout.tsx').read_text(encoding='utf-8')
styles = Path('app/globals.css').read_text(encoding='utf-8')
postcss = Path('postcss.config.mjs').read_text(encoding='utf-8')
package = Path('package.json').read_text(encoding='utf-8')

required_phrases = [
    'Government Services, Simplified with AI',
    'Government Paperwork is Broken',
    'Meet GovEase AI',
    'I want a PAN Card.',
    'AI Form Scanner',
    'Voice Assistant',
    'Eligibility Checker',
    'Office finder',
    'Application tracking',
    'Why GovEase',
    'AES Encryption',
    'DigiLocker Integration',
    'Ready to Simplify Government Services?',
]
missing = [phrase for phrase in required_phrases if phrase not in page]
if missing:
    raise SystemExit(f'Missing required landing-page content: {missing}')

required_dependencies = ['next', 'framer-motion', 'lucide-react', 'tailwindcss', '@tailwindcss/postcss', 'typescript']
missing_dependencies = [dependency for dependency in required_dependencies if dependency not in package]
if missing_dependencies:
    raise SystemExit(f'Missing required tech-stack dependencies: {missing_dependencies}')

if '@import "tailwindcss";' not in styles:
    raise SystemExit('Tailwind v4 must be imported in app/globals.css using @import "tailwindcss";')

if '@tailwindcss/postcss' not in postcss:
    raise SystemExit('PostCSS must use the official @tailwindcss/postcss plugin')

for removed_file in ['tailwind.config.ts']:
    if Path(removed_file).exists():
        raise SystemExit(f'Remove legacy Tailwind configuration file: {removed_file}')

required_animation_markers = ['typing', 'float-slow', 'pulse-glow', 'scan-line', 'counter-pop', 'loading-dots']
missing_animation_markers = [marker for marker in required_animation_markers if marker not in styles]
if missing_animation_markers:
    raise SystemExit(f'Missing animation styles: {missing_animation_markers}')

if 'metadata' not in layout or 'description' not in layout:
    raise SystemExit('SEO metadata must be defined in app/layout.tsx')

print('GovEase official Next.js + Tailwind landing-page check passed.')
