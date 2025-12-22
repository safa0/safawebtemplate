from pptx import Presentation
import os
import html

# Theme Colors
COLOR_BG_LIGHT = "#E8DCC4"
COLOR_BG_DARK = "#C3B091"
COLOR_TITLE = "#8B7355"
COLOR_TEXT = "#333333"

HTML_TEMPLATE_START = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terneshk Pitch Deck</title>
    <style>
        :root {{
            --khaki-light: {COLOR_BG_LIGHT};
            --khaki-dark: {COLOR_BG_DARK};
            --title-color: {COLOR_TITLE};
            --text-color: {COLOR_TEXT};
        }}
        body {{
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--khaki-light);
            color: var(--text-color);
            overflow-x: hidden;
            scroll-behavior: smooth;
        }}
        .slides-container {{
            width: 100vw;
            height: 100vh;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
        }}
        .slide {{
            width: 100vw;
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            box-sizing: border-box;
            position: relative;
            background: linear-gradient(135deg, var(--khaki-light) 0%, white 100%);
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }}
        .slide:nth-child(even) {{
             background: linear-gradient(135deg, white 0%, var(--khaki-light) 100%);
        }}
        .content {{
            max-width: 900px;
            width: 100%;
            text-align: left;
            background: rgba(255,255,255,0.6);
            padding: 3rem;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(139, 115, 85, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.8);
        }}
        h1 {{
            color: var(--title-color);
            font-size: 3rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid var(--khaki-dark);
            padding-bottom: 0.5rem;
        }}
        h2 {{
            color: var(--title-color);
            font-size: 2rem;
        }}
        p, li {{
            font-size: 1.5rem;
            line-height: 1.6;
            margin-bottom: 1rem;
        }}
        ul {{
            padding-left: 2rem;
        }}
        .slide-number {{
            position: absolute;
            bottom: 20px;
            right: 20px;
            font-size: 0.9rem;
            opacity: 0.5;
        }}
        .nav-hint {{
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.1);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            pointer-events: none;
            opacity: 0;
            animation: fadeIn 2s 1s forwards;
        }}
        @keyframes fadeIn {{
            to {{ opacity: 1; }}
        }}
    </style>
</head>
<body>
    <div class="nav-hint">Scroll down or use Arrow Keys</div>
    <div class="slides-container">
"""

HTML_TEMPLATE_END = """
    </div>
    <script>
        document.addEventListener('keydown', (e) => {
            const container = document.querySelector('.slides-container');
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            }
        });
    </script>
</body>
</html>
"""

def create_html_deck(src_path, dest_path):
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        return

    prs = Presentation(src_path)
    
    html_content = HTML_TEMPLATE_START
    
    for i, slide in enumerate(prs.slides):
        title_text = ""
        body_html = ""
        
        # Extract text shapes
        text_shapes = []
        for shape in slide.shapes:
            if shape.has_text_frame and shape.text.strip():
                text_shapes.append(shape)
        
        text_shapes.sort(key=lambda s: s.top)
        
        if not text_shapes:
            continue
            
        # Title assumption
        title_shape = text_shapes[0]
        title_text = html.escape(title_shape.text)
        
        # Body
        body_items = []
        for shape in text_shapes[1:]:
            # Convert paragraphs to list items or paragraphs
            # simple heuristic: if starting with bullet char or multiple lines, make it ul
            # For now, just paragraphs
            
            shape_html = ""
            for p in shape.text_frame.paragraphs:
                txt = html.escape(p.text.strip())
                if txt:
                    # check if bullet
                    if p.level > 0 or txt.startswith("-") or txt.startswith("•"):
                        shape_html += f"<li>{txt.lstrip('-• ')}</li>"
                    else:
                        shape_html += f"<p>{txt}</p>"
            
            if "<li>" in shape_html:
                shape_html = f"<ul>{shape_html}</ul>" # wrap lists? crude but works
                # Fix: if multiple p's, some are li, some are p. 
                # This simple loop wraps EVERYTHING in one string. 
                # Better: handle per paragraph.
            
            # Refined paragraph handling
            shape_html = ""
            in_list = False
            for p in shape.text_frame.paragraphs:
                txt = html.escape(p.text.strip())
                if not txt: continue
                
                is_bullet = p.level > 0 or txt.startswith("-") or txt.startswith("•")
                if is_bullet:
                    if not in_list:
                        shape_html += "<ul>"
                        in_list = True
                    shape_html += f"<li>{txt.lstrip('-• ')}</li>"
                else:
                    if in_list:
                        shape_html += "</ul>"
                        in_list = False
                    shape_html += f"<p>{txt}</p>"
            if in_list:
                shape_html += "</ul>"

            body_items.append(shape_html)
            
        
        # Construct Slide HTML
        slide_html = f"""
        <div class="slide" id="slide-{i+1}">
            <div class="content">
                <h1>{title_text}</h1>
                {"".join(body_items)}
            </div>
            <div class="slide-number">{i+1} / {len(prs.slides)}</div>
        </div>
        """
        html_content += slide_html

    html_content += HTML_TEMPLATE_END
    
    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print(f"Created {dest_path}")

if __name__ == "__main__":
    create_html_deck("Terneshk_PitchDeckMain.pptx", "Terneshk_Presentation.html")
