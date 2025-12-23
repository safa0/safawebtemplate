import html
import json
from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_AUTO_SHAPE_TYPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt

# --- Content Data Structure ---

BASE_DIR = Path(__file__).resolve().parent

SLIDES = [
    {
        "title": "LambdaIDS: The Immune System for the Edge",
        "subtitle": "Securing the Critical Infrastructure of Tomorrow with TinyML",
        "content": [
            "We enable secure, autonomous, and compliant IoT at the edge.",
            "Ahmad Mostafavi | Soroush Safaei | Hossein Fotouhi",
        ],
        "notes": (
            "Good morning. We are LambdaIDS.\n\n"
            "We are building the immune system for the IoT edge.\n\n"
            "Every day, we connect more critical infrastructure to the internet—from factories to power grids.\n"
            "But the devices running them are vulnerable. We are here to change that."
        ),
    },
    {
        "title": "The Problem: The 'Smart' World is Critically Vulnerable",
        "content": [
            "• Explosion of Attack Surface: 75 Billion IoT devices by 2025.",
            "• Resource Constraints: Existing security tools (agents, firewalls) are too heavy for microcontrollers.",
            "• The Result: 98% of IoT traffic is unencrypted or vulnerable.",
            "• Critical Risk: Ransomware in hospitals, grid shutdowns, industrial espionage.",
        ],
        "notes": (
            "We are racing towards a world with 75 billion connected devices.\n\n"
            "But here is the problem: The security tools we use for laptops and servers simply do not fit on these tiny chips.\n\n"
            "This leaves our most critical infrastructure—energy grids, hospitals, factories—wide open to attack.\n"
            "Current solutions are too heavy, too expensive, or simply non-existent for the edge."
        ),
    },
    {
        "title": "Why Now? The Regulatory Tsunami",
        "content": [
            "• EU Cyber Resilience Act (CRA): Mandatory cybersecurity for ALL connected products by 2025/2026.",
            "• IEC 62443: Moving from 'nice-to-have' to 'must-have' for industrial compliance.",
            "• The Market Gap: Manufacturers are entering a panic mode. They lack the expertise to build compliant security from scratch.",
            "• Opportunity: Compliance is no longer optional—it is a license to operate.",
        ],
        "notes": (
            "So, why is this the right time for LambdaIDS? Because the rules of the game have changed.\n\n"
            "With the EU Cyber Resilience Act, security is no longer a 'nice-to-have'. It is the law.\n\n"
            "If a device is not secure by design, it cannot be sold in the EU. Period.\n\n"
            "Manufacturers are panicking. They are hardware experts, not security experts. They need a drop-in solution to stay in business."
        ),
    },
    {
        "title": "The Solution: LambdaIDS",
        "content": [
            "• Autonomous On-Device Security: An AI agent that lives ON the microcontroller.",
            "• Real-time Anomaly Detection: Detects zero-day attacks instantly without cloud latency.",
            "• Ultra-Lightweight: Runs on <100KB RAM. Consumes negligible battery.",
            "• Compliance-Ready: Built to satisfy IEC 62443 and CRA requirements out of the box.",
        ],
        "notes": (
            "Enter LambdaIDS.\n\n"
            "Think of it as an autonomous immune system for every device.\n\n"
            "It sits right on the microcontroller. It learns what 'normal' looks like and blocks anomalies in real-time.\n\n"
            "It doesn't need the cloud. It doesn't drain the battery. And most importantly, it makes compliance easy for the manufacturer."
        ),
    },
    {
        "title": "How It Works: Edge AI vs. Cloud Security",
        "content": [
            "• Traditional (Cloud): High latency, privacy risks, high data cost, fails offline.",
            "• LambdaIDS (Edge): Zero latency, privacy-preserving, works offline, 100x more energy efficient.",
            "• Tech Stack: Proprietary TinyML algorithms optimized for ARM Cortex-M and RISC-V.",
        ],
        "notes": (
            "Traditional security sends data to the cloud to be checked. That's slow, expensive, and risky.\n\n"
            "LambdaIDS processes everything locally.\n\n"
            "This means we catch attacks in milliseconds, not minutes. We work even when the internet is down.\n\n"
            "And we do it with a fraction of the energy."
        ),
    },
    {
        "title": "Market Opportunity",
        "content": [
            "• Total Addressable Market (TAM): $30B+ IoT Security Market (growing 25% YoY).",
            "• Serviceable Available Market (SAM): $4B Industrial & Utility IoT Security.",
            "• Serviceable Obtainable Market (SOM): $100M (Nordic + MENA Critical Infrastructure).",
            "• Target Segments: Industrial Automation (IIoT), Smart Energy, Automotive.",
        ],
        "notes": (
            "The market opportunity is massive.\n\n"
            "The global IoT security market is over 30 billion dollars and growing fast.\n\n"
            "We are laser-focused on the high-value Industrial and Utility sectors first—our SAM is around 4 billion.\n\n"
            "Starting with the Nordics and expanding to MENA, we are targeting a reachable market of 100 million in the next 3 years."
        ),
    },
    {
        "title": "Business Model",
        "content": [
            "• B2B Licensing & SDK: Per-device license fee for OEMs.",
            "• Tiered Subscription: Basic (Detection) vs. Pro (Prevention + Fleet Analytics).",
            "• Pilot Strategy: Paid pilots with Tier 1 manufacturers to validate and customize.",
            "• Scalability: High-margin software model (80%+ gross margin at scale).",
        ],
        "notes": (
            "How do we make money?\n\n"
            "We are a software company. We license our SDK to device manufacturers.\n\n"
            "It's a scalable B2B model with high margins. We charge a per-device fee, or an annual subscription for advanced fleet analytics.\n\n"
            "Currently, we are engaging in paid pilots to fine-tune the product with top-tier industrial partners."
        ),
    },
    {
        "title": "Traction & Validation",
        "content": [
            "• Key Partners: Collaboration with Combitech & RISE (Research Institutes of Sweden).",
            "• Academic Validation: Backed by cutting-edge research in Embedded AI.",
            "• Funding: Secured early grant funding (Vinnova/VFT). Validation of tech novelty.",
            "• Pipeline: Discussions with major players in Industrial Automation (ABB, Siemens ecosystem).",
        ],
        "notes": (
            "We aren't just an idea. We have real traction.\n\n"
            "We are collaborating with Combitech and RISE, validating our tech against the toughest standards.\n\n"
            "We have secured grant funding, proving the novelty of our technology.\n\n"
            "And we are already in talks with major players in the industrial automation space."
        ),
    },
    {
        "title": "Competitive Landscape",
        "content": [
            "• Cloud-Based (Darktrace, etc.): Too heavy, high latency. (LambdaIDS wins on Speed/Size).",
            "• Embedded Legacy (Firewalls): Static rules, can't stop zero-days. (LambdaIDS wins on Adaptability).",
            "• The LambdaIDS Advantage: The only solution combining TinyML + IEC 62443 Compliance + <100KB Footprint.",
            "• Moat: Proprietary quantization algorithms & curated attack datasets.",
        ],
        "notes": (
            "When you look at the competition, there is a clear gap.\n\n"
            "Cloud solutions like Darktrace are too heavy. Legacy firewalls are too dumb—they can't stop new attacks.\n\n"
            "LambdaIDS is the only solution that brings smart, adaptive AI to the smallest chips.\n\n"
            "Our moat lies in our proprietary algorithms that squeeze this intelligence into less than 100 kilobytes."
        ),
    },
    {
        "title": "Roadmap: Path to Scale",
        "content": [
            "• Q1-Q2 2025: Finalize SDK v1.0. Complete Pilot with Combitech/RISE.",
            "• Q3-Q4 2025: First Commercial Deployments (Industrial Sector). Achieve IEC 62443 Cert.",
            "• 2026: Expansion to MENA region. Series A for Global Scale.",
            "• 2027: Integration with major Chip Vendors (ST, NXP).",
        ],
        "notes": (
            "Here is our plan for the next 18 months.\n\n"
            "By mid-2025, we will finalize our SDK and complete our key pilots.\n\n"
            "By the end of the year, we aim for our first commercial deployments and full certification.\n\n"
            "In 2026, we expand aggressively into the MENA region and look towards a Series A to scale globally."
        ),
    },
    {
        "title": "The Team",
        "type": "team",
        "team": [
            {
                "name": "Ahmad Mostafavi",
                "role": "CEO & Founder",
                "description": "Deep tech expert in Embedded Systems & Security.",
                "image": "ahmadMostafavi.jpeg",
            },
            {
                "name": "Soroush Safaei",
                "role": "Co-Founder",
                "description": "Expertise in AI Strategy & Market Development.",
                "image": "Soroush.jpeg",
            },
            {
                "name": "Hossein Fotouhi",
                "role": "Co-Founder",
                "description": "Associate Professor at MDU, Expert in IoT & Edge Computing.",
                "image": "hosseinFotouhi.jpeg",
            },
        ],
        "tagline": "Why Us: We bridge the gap between AI, Hardware constraints, and Academic Innovation.",
        "notes": (
            "Our team is built for this challenge.\n\n"
            "Ahmad leads our vision as CEO and Founder, while Soroush and Hossein drive our strategy and scientific innovation.\n\n"
            "Together, we live at the intersection of AI, hardware constraints, and academic rigor."
        ),
    },
    {
        "title": "The Ask",
        "content": [
            "• Seeking: $500K - $1M (Seed / Pre-Seed).",
            "• Use of Funds:",
            "  - 40% R&D (SDK refinement, Certification).",
            "  - 30% Business Dev (Pilot execution, Partnership management).",
            "  - 30% Operations & Legal (IP Protection).",
            "• Opportunity: Join us in defining the standard for Edge AI Security.",
        ],
        "notes": (
            "We are raising between 500k and 1 million dollars.\n\n"
            "This capital will take us from validated tech to commercial product.\n\n"
            "The majority will go into R&D and securing those critical certifications.\n\n"
            "We invite you to join us. Let's define the standard for secure AI at the edge."
        ),
    },
    {
        "title": "Contact",
        "subtitle": "Let's build a secure future together.",
        "content": [
            "Ahmad Mostafavi, Soroush Safaei, Hossein Fotouhi",
            "LambdaIDS",
            "www.lambdaids.se",
        ],
        "notes": (
            "Thank you. Let's build a secure future together.\n\n"
            "I'm happy to take your questions."
        ),
    },
]

# --- PPTX Generation ---

COLOR_BG = RGBColor(0xE8, 0xDC, 0xC4)    # khaki-light
COLOR_TITLE = RGBColor(0x8B, 0x73, 0x55) # khaki-dark
COLOR_TEXT = RGBColor(0x33, 0x33, 0x33)  # Dark Grey
COLOR_CARD = RGBColor(0xFF, 0xFF, 0xFF)


def normalize_bullet(text: str) -> str:
    """Remove manual bullet characters to avoid double bullets in lists."""
    return text.lstrip("•-*–— \t")


def resolve_path(path_str: str) -> Path:
    """Resolve a path relative to this file."""
    path = Path(path_str)
    if not path.is_absolute():
        path = BASE_DIR / path
    return path


def delete_all_slides(prs):
    xml_slides = prs.slides._sldIdLst
    slides = list(xml_slides)
    prev_len = len(slides)
    for slide_id in slides:
        xml_slides.remove(slide_id)
    print(f"Removed {prev_len} existing slides from template.")


def apply_background(slide):
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLOR_BG


def style_paragraph(paragraph, size=Pt(20), bold=False, color=COLOR_TEXT, align=None, italic=False):
    paragraph.font.name = "Segoe UI"
    paragraph.font.size = size
    paragraph.font.bold = bold
    paragraph.font.italic = italic
    paragraph.font.color.rgb = color
    if align:
        paragraph.alignment = align


def style_title_frame(text_frame, size=Pt(40)):
    for para in text_frame.paragraphs:
        style_paragraph(para, size=size, bold=True, color=COLOR_TITLE, align=PP_ALIGN.LEFT)


def get_body_placeholder(slide, title_shape=None):
    body = None
    for ph in slide.placeholders:
        if ph.placeholder_format.idx == 1:
            body = ph
            break
    if not body:
        for shape in slide.placeholders:
            if shape != title_shape:
                body = shape
                break
    return body


def add_notes(slide, text):
    try:
        notes_slide = slide.notes_slide
        if notes_slide and notes_slide.notes_text_frame:
            notes_slide.notes_text_frame.text = text
        else:
            for shape in notes_slide.shapes:
                if shape.has_text_frame:
                    shape.text_frame.text = text
                    break
    except Exception as exc:
        print(f"Warning: Could not set notes for slide: {exc}")


def find_layout_index(prs, keyword: str, fallback: int) -> int:
    keyword = keyword.lower()
    for i, layout in enumerate(prs.slide_layouts):
        if keyword in layout.name.lower():
            return i
    return fallback


def add_standard_slide(prs, slide_data, is_title=False, is_final=False):
    if is_title or is_final:
        layout_idx = find_layout_index(prs, "title", 0)
    else:
        layout_idx = find_layout_index(prs, "content", 1)

    slide_layout = prs.slide_layouts[min(layout_idx, len(prs.slide_layouts) - 1)]
    slide = prs.slides.add_slide(slide_layout)
    apply_background(slide)

    title_shape = slide.shapes.title
    if not title_shape:
        title_shape = slide.shapes.add_textbox(
            Inches(0.6), Inches(0.4), prs.slide_width - Inches(1.2), Inches(1)
        )
    title_shape.text = slide_data["title"]
    style_title_frame(title_shape.text_frame, size=Pt(44 if is_title else 36))

    body = get_body_placeholder(slide, title_shape)
    if body:
        tf = body.text_frame
        tf.clear()
        tf.word_wrap = True

        if slide_data.get("subtitle"):
            subtitle_p = tf.add_paragraph()
            subtitle_p.text = slide_data["subtitle"]
            style_paragraph(subtitle_p, size=Pt(24), color=COLOR_TITLE)
            subtitle_p.space_after = Pt(12)

        for line in slide_data.get("content", []):
            para = tf.add_paragraph()
            para.text = normalize_bullet(line)
            style_paragraph(para, size=Pt(20), color=COLOR_TEXT)
            para.space_after = Pt(10)

    return slide


def add_team_slide(prs, slide_data):
    layout_idx = find_layout_index(prs, "blank", 6 if len(prs.slide_layouts) > 6 else 0)
    slide_layout = prs.slide_layouts[min(layout_idx, len(prs.slide_layouts) - 1)]
    slide = prs.slides.add_slide(slide_layout)
    apply_background(slide)

    title_box = slide.shapes.add_textbox(
        Inches(0.6), Inches(0.4), prs.slide_width - Inches(1.2), Inches(1)
    )
    title_box.text = slide_data["title"]
    style_title_frame(title_box.text_frame, size=Pt(40))

    members = slide_data.get("team", [])
    if members:
        columns = len(members)
        gap = Inches(0.2)
        usable_width = prs.slide_width - Inches(1.2) - (gap * (columns - 1))
        card_width = usable_width / columns
        card_top = Inches(1.5)
        card_height = Inches(5)
        left = Inches(0.6)

        for member in members:
            card = slide.shapes.add_shape(
                MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, left, card_top, card_width, card_height
            )
            card.fill.solid()
            card.fill.fore_color.rgb = COLOR_CARD
            card.fill.transparency = 0.05
            card.line.color.rgb = COLOR_TITLE
            card.line.width = Pt(1)

            pic_size = Inches(1.9)
            pic_left = left + (card_width - pic_size) / 2
            pic_top = card_top + Inches(0.2)
            image_path = resolve_path(member["image"])
            if image_path.exists():
                slide.shapes.add_picture(str(image_path), pic_left, pic_top, width=pic_size, height=pic_size)

            text_top = pic_top + pic_size + Inches(0.1)
            text_box = slide.shapes.add_textbox(
                left + Inches(0.2), text_top, card_width - Inches(0.4), Inches(2.5)
            )
            tf = text_box.text_frame
            tf.clear()
            tf.word_wrap = True

            name_p = tf.paragraphs[0]
            name_p.text = member["name"]
            style_paragraph(name_p, size=Pt(16), bold=True, color=COLOR_TITLE, align=PP_ALIGN.CENTER)

            role_p = tf.add_paragraph()
            role_p.text = member["role"]
            style_paragraph(role_p, size=Pt(13), italic=True, color=COLOR_TEXT, align=PP_ALIGN.CENTER)

            desc_p = tf.add_paragraph()
            desc_p.text = member["description"]
            style_paragraph(desc_p, size=Pt(12), color=COLOR_TEXT, align=PP_ALIGN.CENTER)

            left += card_width + gap

    if slide_data.get("tagline"):
        tagline_box = slide.shapes.add_textbox(
            Inches(1), prs.slide_height - Inches(1.4), prs.slide_width - Inches(2), Inches(1)
        )
        tagline_box.text = slide_data["tagline"]
        style_paragraph(
            tagline_box.text_frame.paragraphs[0],
            size=Pt(16),
            italic=True,
            color=COLOR_TEXT,
            align=PP_ALIGN.CENTER,
        )

    return slide


def create_pptx(filename):
    template_path = resolve_path("Terneshk_PitchDeckMain.pptx")
    if template_path.exists():
        print(f"Using {template_path} as base template.")
        prs = Presentation(str(template_path))
        delete_all_slides(prs)
    else:
        print("Warning: Template not found, using default blank presentation.")
        prs = Presentation()

    for idx, slide_data in enumerate(SLIDES):
        if slide_data.get("type") == "team":
            slide = add_team_slide(prs, slide_data)
        else:
            slide = add_standard_slide(
                prs,
                slide_data,
                is_title=(idx == 0),
                is_final=(idx == len(SLIDES) - 1),
            )

        if "notes" in slide_data:
            add_notes(slide, slide_data["notes"])

    output_path = resolve_path(filename)
    prs.save(output_path)
    print(f"Saved PPTX to {output_path}")


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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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

        ul {{
            font-size: 1.8rem;
            line-height: 1.6;
            color: var(--text-color);
        }}

        li {{
            margin-bottom: 1rem;
        }}

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

        .team-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 1rem;
        }}

        .team-member {{
            text-align: center;
            background: rgba(255, 255, 255, 0.5);
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }}

        .team-member img {{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--title-color);
            margin-bottom: 1rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }}

        .team-member h3 {{
            color: var(--title-color);
            font-size: 1.4rem;
            margin: 10px 0 5px 0;
        }}

        .team-member p {{
            font-size: 1rem;
            color: var(--text-color);
            margin: 0;
            line-height: 1.4;
        }}

        .team-member .role {{
            font-weight: bold;
            color: #444;
            margin-bottom: 8px;
            font-style: italic;
        }}

        .team-tagline {{
            font-size: 1.4rem;
            color: var(--text-color);
            margin-top: 2rem;
            text-align: center;
            font-style: italic;
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


def create_html(filename):
    slides_html = ""
    notes_list = []

    for slide in SLIDES:
        subtitle_html = ""
        if "subtitle" in slide:
            subtitle_html = f"<h2>{html.escape(slide['subtitle'])}</h2>"

        if slide.get("type") == "team":
            members_html = ""
            for member in slide.get("team", []):
                members_html += f"""
                <div class="team-member">
                    <img src="{html.escape(member['image'])}" alt="{html.escape(member['name'])}">
                    <h3>{html.escape(member['name'])}</h3>
                    <p class="role">{html.escape(member['role'])}</p>
                    <p>{html.escape(member['description'])}</p>
                </div>
                """
            tagline_html = ""
            if slide.get("tagline"):
                tagline_html = f'<p class="team-tagline">{html.escape(slide["tagline"])}</p>'

            slides_html += f"""
        <div class="slide-container">
            <div class="slide" style="justify-content: flex-start;">
                <h1>{html.escape(slide['title'])}</h1>
                <div class="team-grid">
                    {members_html}
                </div>
                {tagline_html}
            </div>
        </div>
            """
        else:
            content_html = ""
            for line in slide.get("content", []):
                cleaned = normalize_bullet(line)
                content_html += f"<li>{html.escape(cleaned)}</li>"

            if content_html:
                content_html = f"<ul>{content_html}</ul>"

            slides_html += f"""
        <div class="slide-container">
            <div class="slide">
                <h1>{html.escape(slide['title'])}</h1>
                {subtitle_html}
                {content_html}
            </div>
        </div>
            """

        notes_list.append(slide.get("notes", ""))

    full_html = HTML_TEMPLATE.format(
        slides_html=slides_html,
        notes_json=json.dumps(notes_list),
    )

    output_path = resolve_path(filename)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Saved HTML to {output_path}")


HTML_TEMPLATE_NO_NOTES = """<!DOCTYPE html>
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
        }}
        body {{
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: #333;
            height: 100vh;
            overflow: hidden;
        }}
        .slides {{
            height: 100vh;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
        }}
        .slides::-webkit-scrollbar {{
            width: 8px;
        }}
        .slides::-webkit-scrollbar-thumb {{
            background: rgba(0,0,0,0.2);
            border-radius: 4px;
        }}
        .slide-container {{
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            scroll-snap-align: start;
        }}
        .slide {{
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, var(--bg-color) 0%, #fff 100%);
            padding: 3.5rem 3rem;
            box-sizing: border-box;
            border-radius: 0;
            box-shadow: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }}
        h1 {{
            color: var(--title-color);
            font-size: 2.8rem;
            margin-top: 0;
            border-bottom: 3px solid var(--title-color);
            padding-bottom: 0.5rem;
        }}
        h2 {{
            color: var(--title-color);
            font-size: 1.9rem;
            margin-top: 0;
        }}
        ul {{
            font-size: 1.6rem;
            line-height: 1.6;
            color: var(--text-color);
        }}
        li {{
            margin-bottom: 0.8rem;
        }}
        .team-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-top: 1rem;
        }}
        .team-member {{
            text-align: center;
            background: rgba(255, 255, 255, 0.6);
            padding: 1.2rem;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }}
        .team-member img {{
            width: 130px;
            height: 130px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--title-color);
            margin-bottom: 0.8rem;
        }}
        .team-member h3 {{
            color: var(--title-color);
            font-size: 1.3rem;
            margin: 8px 0 4px 0;
        }}
        .team-member p {{
            font-size: 1rem;
            color: var(--text-color);
            margin: 0;
            line-height: 1.4;
        }}
        .team-member .role {{
            font-weight: bold;
            color: #444;
            margin-bottom: 6px;
            font-style: italic;
        }}
        .team-tagline {{
            font-size: 1.2rem;
            color: var(--text-color);
            margin-top: 1.5rem;
            text-align: center;
            font-style: italic;
        }}
    </style>
</head>

<body>
    <div class="slides">
    {slides_html}
    </div>
</body>

</html>
"""


def create_html_no_notes(filename):
    slides_html = ""
    for slide in SLIDES:
        subtitle_html = ""
        if "subtitle" in slide:
            subtitle_html = f"<h2>{html.escape(slide['subtitle'])}</h2>"

        if slide.get("type") == "team":
            members_html = ""
            for member in slide.get("team", []):
                members_html += f"""
        <div class="team-member">
            <img src="{html.escape(member['image'])}" alt="{html.escape(member['name'])}">
            <h3>{html.escape(member['name'])}</h3>
            <p class="role">{html.escape(member['role'])}</p>
            <p>{html.escape(member['description'])}</p>
        </div>
                """
            tagline_html = ""
            if slide.get("tagline"):
                tagline_html = f'<p class="team-tagline">{html.escape(slide["tagline"])}</p>'

            slides_html += f"""
    <div class="slide-container">
        <div class="slide" style="justify-content: flex-start;">
            <h1>{html.escape(slide['title'])}</h1>
            <div class="team-grid">
                {members_html}
            </div>
            {tagline_html}
        </div>
    </div>
            """
        else:
            content_html = ""
            for line in slide.get("content", []):
                cleaned = normalize_bullet(line)
                content_html += f"<li>{html.escape(cleaned)}</li>"

            if content_html:
                content_html = f"<ul>{content_html}</ul>"

            slides_html += f"""
    <div class="slide-container">
        <div class="slide">
            <h1>{html.escape(slide['title'])}</h1>
            {subtitle_html}
            {content_html}
        </div>
    </div>
            """

    full_html = HTML_TEMPLATE_NO_NOTES.format(slides_html=slides_html)
    output_path = resolve_path(filename)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Saved HTML (no notes) to {output_path}")


def create_notes_text(filename):
    """Export slide titles and speaker notes to a plain text file."""
    lines = []
    for idx, slide in enumerate(SLIDES, start=1):
        lines.append(f"Slide {idx}: {slide['title']}")
        note_text = slide.get("notes", "").strip()
        if note_text:
            lines.append(note_text)
        lines.append("")  # blank line between slides

    output_path = resolve_path(filename)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines).strip() + "\n")
    print(f"Saved notes to {output_path}")


if __name__ == "__main__":
    create_pptx("LambdaIDS_QatarWebSummit_Deck.pptx")
    create_html("LambdaIDS_QatarWebSummit_Presentation.html")
    create_html_no_notes("LambdaIDS_QatarWebSummit_Presentation_clean.html")
    create_notes_text("LambdaIDS_QatarWebSummit_TalkingPoints.txt")
