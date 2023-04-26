import os
import re
from datetime import datetime

# Define the glob patterns
patterns = [
    '../pages/**/*.{ts,tsx,mdx}', 
    '/data/blog/*.mdx', 
    '/data/release/*.mdx', 
    '!/pages/**/[*.{ts,tsx}', 
    '!/pages/_*.{ts,tsx}', 
    '!/pages/style-guide.jsx', 
    '!/pages/api'
]

# Set the base URL of the website
base_url = 'https://example.com'

# Define the XML header and URL template
xml_header = '<?xml version="1.0" encoding="UTF-8"?>\n'
url_template = '  <url>\n    <loc>{}</loc>\n    <lastmod>{}</lastmod>\n  </url>\n'

# Define a function to get the last modified date of a file
def get_last_modified(path):
    stat = os.stat(path)
    return datetime.utcfromtimestamp(stat.st_mtime).strftime('%Y-%m-%d')

# Initialize the sitemap string with the XML header
sitemap = xml_header + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

# Loop through each pattern
for pattern in patterns:
    # Get the file paths that match the pattern
    matches = [f for f in os.listdir(os.getcwd() + '/' + pattern[1:]) if re.match(pattern[3:], f)]
    for match in matches:
        # Ignore directories
        if os.path.isdir(match):
            continue
        # Ignore files that should be ignored
        if re.match(pattern[1:], match):
            continue
        # Get the full file path and URL
        path = os.path.join(os.getcwd(), pattern[3:], match)
        url = base_url + path[path.index('/pages'):-3]
        # Add the URL to the sitemap with the last modified date
        sitemap += url_template.format(url, get_last_modified(path))

# Add the closing tag to the sitemap
sitemap += '</urlset>'

# Write the sitemap to a file in the public directory
with open('../public/sitemap.xml', 'w') as f:
    f.write(sitemap)
