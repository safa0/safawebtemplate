import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

# --- Content Data Structure ---

SLIDES = [
    {
        "title": "LambdaIDS: The Immune System for the Edge",
        "subtitle": "Securing the Critical Infrastructure of Tomorrow with TinyML",
        "content": [
            "We enable secure, autonomous, and compliant IoT at the edge.",
            "Contact: Soroush Safaei | Ahmad Mostafavi | Hossein Fotouhi"
        ],
        "notes": (
            "Good morning. We are LambdaIDS.\n\n"
            "We are building the immune system for the IoT edge.\n\n"
            "Every day, we connect more critical infrastructure to the internet—from factories to power grids.\n"
            "But the devices running them are vulnerable. We are here to change that."
        )
    },
    {
        "title": "The Problem: The 'Smart' World is Critically Vulnerable",
        "content": [
            "• Explosion of Attack Surface: 75 Billion IoT devices by 2025.",
            "• Resource Constraints: Existing security tools (agents, firewalls) are too heavy for microcontrollers.",
            "• The Result: 98% of IoT traffic is unencrypted or vulnerable.",
            "• Critical Risk: Ransomware in hospitals, grid shutdowns, industrial espionage."
        ],
        "notes": (
            "We are racing towards a world with 75 billion connected devices.\n\n"
            "But here is the problem: The security tools we use for laptops and servers simply do not fit on these tiny chips.\n\n"
            "This leaves our most critical infrastructure—energy grids, hospitals, factories—wide open to attack.\n"
            "Current solutions are too heavy, too expensive, or simply non-existent for the edge."
        )
    },
    {
        "title": "Why Now? The Regulatory Tsunami",
        "content": [
            "• EU Cyber Resilience Act (CRA): Mandatory cybersecurity for ALL connected products by 2025/2026.",
            "• IEC 62443: Moving from 'nice-to-have' to 'must-have' for industrial compliance.",
            "• The Market Gap: Manufacturers are entering a panic mode. They lack the expertise to build compliant security from scratch.",
            "• Opportunity: Compliance is no longer optional—it is a license to operate."
        ],
        "notes": (
            "So, why is this the right time for LambdaIDS? Because the rules of the game have changed.\n\n"
            "With the EU Cyber Resilience Act, security is no longer a 'nice-to-have'. It is the law.\n\n"
            "If a device is not secure by design, it cannot be sold in the EU. Period.\n\n"
            "Manufacturers are panicking. They are hardware experts, not security experts. They need a drop-in solution to stay in business."
        )
    },
    {
        "title": "The Solution: LambdaIDS",
        "content": [
            "• Autonomous On-Device Security: An AI agent that lives ON the microcontroller.",
            "• Real-time Anomaly Detection: Detects zero-day attacks instantly without cloud latency.",
            "• Ultra-Lightweight: Runs on <100KB RAM. Consumes negligible battery.",
            "• Compliance-Ready: Built to satisfy IEC 62443 and CRA requirements out of the box."
        ],
        "notes": (
            "Enter LambdaIDS.\n\n"
            "Think of it as an autonomous immune system for every device.\n\n"
            "It sits right on the microcontroller. It learns what 'normal' looks like and blocks anomalies in real-time.\n\n"
            "It doesn't need the cloud. It doesn't drain the battery. And most importantly, it makes compliance easy for the manufacturer."
        )
    },
    {
        "title": "How It Works: Edge AI vs. Cloud Security",
        "content": [
            "• Traditional (Cloud): High latency, privacy risks, high data cost, fails offline.",
            "• LambdaIDS (Edge): Zero latency, privacy-preserving, works offline, 100x more energy efficient.",
            "• Tech Stack: Proprietary TinyML algorithms optimized for ARM Cortex-M and RISC-V."
        ],
        "notes": (
            "Traditional security sends data to the cloud to be checked. That's slow, expensive, and risky.\n\n"
            "LambdaIDS processes everything locally.\n\n"
            "This means we catch attacks in milliseconds, not minutes. We work even when the internet is down.\n\n"
            "And we do it with a fraction of the energy."
        )
    },
    {
        "title": "Market Opportunity",
        "content": [
            "• Total Addressable Market (TAM): $30B+ IoT Security Market (growing 25% YoY).",
            "• Serviceable Available Market (SAM): $4B Industrial & Utility IoT Security.",
            "• Serviceable Obtainable Market (SOM): $100M (Nordic + MENA Critical Infrastructure).",
            "• Target Segments: Industrial Automation (IIoT), Smart Energy, Automotive."
        ],
        "notes": (
            "The market opportunity is massive.\n\n"
            "The global IoT security market is over 30 billion dollars and growing fast.\n\n"
            "We are laser-focused on the high-value Industrial and Utility sectors first—our SAM is around 4 billion.\n\n"
            "Starting with the Nordics and expanding to MENA, we are targeting a reachable market of 100 million in the next 3 years."
        )
    },
    {
        "title": "Business Model",
        "content": [
            "• B2B Licensing & SDK: Per-device license fee for OEMs.",
            "• Tiered Subscription: Basic (Detection) vs. Pro (Prevention + Fleet Analytics).",
            "• Pilot Strategy: Paid pilots with Tier 1 manufacturers to validate and customize.",
            "• Scalability: High-margin software model (80%+ gross margin at scale)."
        ],
        "notes": (
            "How do we make money?\n\n"
            "We are a software company. We license our SDK to device manufacturers.\n\n"
            "It's a scalable B2B model with high margins. We charge a per-device fee, or an annual subscription for advanced fleet analytics.\n\n"
            "Currently, we are engaging in paid pilots to fine-tune the product with top-tier industrial partners."
        )
    },
    {
        "title": "Traction & Validation",
        "content": [
            "• Key Partners: Collaboration with Combitech & RISE (Research Institutes of Sweden).",
            "• Academic Validation: Backed by cutting-edge research in Embedded AI.",
            "• Funding: Secured early grant funding (Vinnova/VFT). Validation of tech novelty.",
            "• Pipeline: Discussions with major players in Industrial Automation (ABB, Siemens ecosystem)."
        ],
        "notes": (
            "We aren't just an idea. We have real traction.\n\n"
            "We are collaborating with Combitech and RISE, validating our tech against the toughest standards.\n\n"
            "We have secured grant funding, proving the novelty of our technology.\n\n"
            "And we are already in talks with major players in the industrial automation space."
        )
    },
    {
        "title": "Competitive Landscape",
        "content": [
            "• Cloud-Based (Darktrace, etc.): Too heavy, high latency. (LambdaIDS wins on Speed/Size).",
            "• Embedded Legacy (Firewalls): Static rules, can't stop zero-days. (LambdaIDS wins on Adaptability).",
            "• The LambdaIDS Advantage: The only solution combining TinyML + IEC 62443 Compliance + <100KB Footprint.",
            "• Moat: Proprietary quantization algorithms & curated attack datasets."
        ],
        "notes": (
            "When you look at the competition, there is a clear gap.\n\n"
            "Cloud solutions like Darktrace are too heavy. Legacy firewalls are too dumb—they can't stop new attacks.\n\n"
            "LambdaIDS is the only solution that brings smart, adaptive AI to the smallest chips.\n\n"
            "Our moat lies in our proprietary algorithms that squeeze this intelligence into less than 100 kilobytes."
        )
    },
    {
        "title": "Roadmap: Path to Scale",
        "content": [
            "• Q1-Q2 2025: Finalize SDK v1.0. Complete Pilot with Combitech/RISE.",
            "• Q3-Q4 2025: First Commercial Deployments (Industrial Sector). Achieve IEC 62443 Cert.",
            "• 2026: Expansion to MENA region. Series A for Global Scale.",
            "• 2027: Integration with major Chip Vendors (ST, NXP)."
        ],
        "notes": (
            "Here is our plan for the next 18 months.\n\n"
            "By mid-2025, we will finalize our SDK and complete our key pilots.\n\n"
            "By the end of the year, we aim for our first commercial deployments and full certification.\n\n"
            "In 2026, we expand aggressively into the MENA region and look towards a Series A to scale globally."
        )
    },
    {
        "title": "The Team",
        "content": [
            "• Soroush Safaei: Co-Founder & CEO. Expertise in AI & Business Strategy.",
            "• Ahmad Mostafavi: Co-Founder & CTO. Deep tech expert in Embedded Systems.",
            "• Hossein Fotouhi: Co-Founder & Scientific Lead. Professor in IoT & Networks.",
            "• Why Us: We bridge the gap between Data Science and Hardware constraints."
        ],
        "notes": (
            "Our team is built for this challenge.\n\n"
            "Soroush leads our strategy, Ahmad drives our deep tech innovation, and Hossein ensures our scientific rigor.\n\n"
            "Together, we live at the intersection of hardware constraints and software intelligence."
        )
    },
    {
        "title": "The Ask",
        "content": [
            "• Seeking: $500K - $1M (Seed / Pre-Seed).",
            "• Use of Funds:",
            "  - 40% R&D (SDK refinement, Certification).",
            "  - 30% Business Dev (Pilot execution, Partnership management).",
            "  - 30% Operations & Legal (IP Protection).",
            "• Opportunity: Join us in defining the standard for Edge AI Security."
        ],
        "notes": (
            "We are raising between 500k and 1 million dollars.\n\n"
            "This capital will take us from validated tech to commercial product.\n\n"
            "The majority will go into R&D and securing those critical certifications.\n\n"
            "We invite you to join us. Let's define the standard for secure AI at the edge."
        )
    },
    {
        "title": "Contact",
        "subtitle": "Let's build a secure future together.",
        "content": [
            "Soroush Safaei, Ahmad Mostafavi, Hossein Fotouhi",
            "LambdaIDS",
            "www.lambdaids.se"
        ],
        "notes": (
            "Thank you. Let's build a secure future together.\n\n"
            "I'm happy to take your questions."
        )
    }
]

# --- PPTX Generation ---

COLOR_BG = RGBColor(0xE8, 0xDC, 0xC4)    # khaki-light
COLOR_TITLE = RGBColor(0x8B, 0x73, 0x55) # khaki-dark
COLOR_TEXT = RGBColor(0x33, 0x33, 0x33)  # Dark Grey

def create_pptx(filename):
    prs = Presentation()
    
    for slide_data in SLIDES:
        # Use Title and Content layout (usually index 1)
        # For title slide (first one), maybe use index 0
        layout_idx = 1
        if slide_data == SLIDES[0] or slide_data == SLIDES[-1]:
            layout_idx = 0 # Title Slide Layout
            
        slide_layout = prs.slide_layouts[layout_idx]
        slide = prs.slides.add_slide(slide_layout)
        
        # Apply Background
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = COLOR_BG
        
        # Set Title
        if slide.shapes.title:
            slide.shapes.title.text = slide_data['title']
            # Style Title
            tf = slide.shapes.title.text_frame
            for p in tf.paragraphs:
                p.font.name = "Arial"
                p.font.bold = True
                p.font.color.rgb = COLOR_TITLE
        
        # Set Content
        if layout_idx == 0:
            # Title Slide: Use subtitle placeholder if available
             if len(slide.placeholders) > 1:
                subtitle = slide.placeholders[1]
                subtitle.text = slide_data.get('subtitle', '') + "\n\n" + "\n".join(slide_data.get('content', []))
                for p in subtitle.text_frame.paragraphs:
                    p.font.name = "Arial"
                    p.font.color.rgb = COLOR_TEXT
                    p.font.size = Pt(24)
        else:
            # Content Slide
            if len(slide.placeholders) > 1:
                body = slide.placeholders[1]
                tf = body.text_frame
                tf.clear() # clear default
                
                for line in slide_data.get('content', []):
                    p = tf.add_paragraph()
                    p.text = line
                    p.font.name = "Arial"
                    p.font.color.rgb = COLOR_TEXT
                    p.font.size = Pt(20)
                    p.space_after = Pt(14)

        # Add Speaker Notes
        if 'notes' in slide_data:
            notes_slide = slide.notes_slide
            notes_tf = notes_slide.notes_text_frame
            notes_tf.text = slide_data['notes']

    prs.save(filename)
    print(f"Saved PPTX to {filename}")

# --- HTML Generation ---

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LambdaIDS Pitch Deck</title>
    <style>
        :root {{
            --bg-color: #E8DCC4;
            --title-color: #8B7355;
            --text-color: #333333;
            --note-bg: #fff9f0;
        }}
        body {{
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }}
        #main-view {{
            flex: 3;
            height: 100%;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            background: #333;
        }}
        #speaker-view {{
            flex: 1;
            background: white;
            border-left: 1px solid #ccc;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }}
        .slide-container {{
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            scroll-snap-align: start;
            position: relative;
        }}
        .slide {{
            width: 90%;
            max-width: 1200px;
            aspect-ratio: 16/9;
            background: var(--bg-color);
            background: linear-gradient(135deg, var(--bg-color) 0%, #fff 100%);
            padding: 4rem;
            box-sizing: border-box;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }}
        h1 {{
            color: var(--title-color);
            font-size: 3rem;
            margin-top: 0;
            border-bottom: 3px solid var(--title-color);
            padding-bottom: 0.5rem;
        }}
        h2 {{
            color: var(--title-color);
            font-size: 2rem;
            margin-top: 0;
        }}
        ul {{ font-size: 1.8rem; line-height: 1.6; color: var(--text-color); }}
        li {{ margin-bottom: 1rem; }}
        
        .current-note {{
            margin-top: 20px;
            padding: 20px;
            background: var(--note-bg);
            border-left: 5px solid var(--title-color);
            font-size: 1.2rem;
            line-height: 1.6;
            white-space: pre-wrap;
        }}
        .note-label {{
            font-weight: bold;
            text-transform: uppercase;
            color: #666;
            margin-bottom: 10px;
            display: block;
        }}
    </style>
</head>
<body>
    <div id="main-view">
        <!-- Slides will be injected here -->
        {slides_html}
    </div>
    <div id="speaker-view">
        <h2>Speaker Notes</h2>
        <div id="notes-display">
            <span class="note-label">Currently Viewing: Slide 1</span>
            <div class="current-note" id="live-note"></div>
        </div>
        <p style="margin-top:auto; font-size:0.9rem; color:#888;">
            Tip: Use Arrow Keys to navigate. The notes will update automatically.
        </p>
    </div>

    <script>
        const notes = {notes_json};
        
        const mainView = document.getElementById('main-view');
        const liveNote = document.getElementById('live-note');
        const noteLabel = document.querySelector('.note-label');

        // Initial Note
        liveNote.textContent = notes[0];

        // Detect current slide on scroll
        mainView.addEventListener('scroll', () => {{
            const slideHeight = window.innerHeight;
            const scrollTop = mainView.scrollTop;
            const index = Math.round(scrollTop / slideHeight);
            
            if (notes[index]) {{
                liveNote.textContent = notes[index];
                noteLabel.textContent = "Currently Viewing: Slide " + (index + 1);
            }}
        }});

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {{
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {{
                mainView.scrollBy({{ top: window.innerHeight, behavior: 'smooth' }});
            }} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {{
                mainView.scrollBy({{ top: -window.innerHeight, behavior: 'smooth' }});
            }}
        }});
    </script>
</body>
</html>
"""

import json
import html

def create_html(filename):
    slides_html = ""
    notes_list = []
    
    for i, slide in enumerate(SLIDES):
        content_html = ""
        for line in slide.get('content', []):
            content_html += f"<li>{html.escape(line)}</li>"
        
        if content_html:
            content_html = f"<ul>{content_html}</ul>"
            
        subtitle_html = ""
        if 'subtitle' in slide:
            subtitle_html = f"<h2>{html.escape(slide['subtitle'])}</h2>"
            
        slides_html += f"""
        <div class="slide-container">
            <div class="slide">
                <h1>{html.escape(slide['title'])}</h1>
                {subtitle_html}
                {content_html}
            </div>
        </div>
        """
        notes_list.append(slide.get('notes', ''))

    full_html = HTML_TEMPLATE.format(
        slides_html=slides_html,
        notes_json=json.dumps(notes_list)
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"Saved HTML to {filename}")

if __name__ == "__main__":
    create_pptx("Terneshk_QatarWebSummit_Deck.pptx")
    create_html("Terneshk_QatarWebSummit_Presentation.html")
