from pathlib import Path

index = Path('index.html').read_text(encoding='utf-8')
styles = Path('src/styles.css').read_text(encoding='utf-8')

required_phrases = [
    'GovEase',
    'AI Form Scanner',
    'AI Auto Fill',
    'Document Checklist',
    'Voice Assistant',
    'Office Finder',
    'Eligibility Checker',
    'Application Tracking',
    'Renewal Reminders',
    'Human Expert Support',
]

missing = [phrase for phrase in required_phrases if phrase not in index]
if missing:
    raise SystemExit(f'Missing required landing-page content: {missing}')

if '<main>' not in index or '</main>' not in index:
    raise SystemExit('index.html must include a main landmark')

if '.feature-grid' not in styles or '@media' not in styles:
    raise SystemExit('styles.css must include responsive feature-grid styles')

print('Static site content check passed.')
