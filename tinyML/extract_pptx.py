import zipfile
import xml.etree.ElementTree as ET
import re
import sys
import os

def extract_text_from_pptx(pptx_path):
    if not os.path.exists(pptx_path):
        print(f"File not found: {pptx_path}")
        return

    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            # simple sort by slide number in filename
            # The files are usually ppt/slides/slide1.xml, ppt/slides/slide2.xml, etc.
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            
            # extract number to sort
            def get_slide_number(filename):
                match = re.search(r'slide(\d+)\.xml', filename)
                if match:
                    return int(match.group(1))
                return 999999

            slides.sort(key=get_slide_number)

            for slide_file in slides:
                slide_num = get_slide_number(slide_file)
                print(f"--- Slide {slide_num} ---")
                
                with z.open(slide_file) as f:
                    tree = ET.parse(f)
                    root = tree.getroot()
                    
                    # Text is generally in <a:t> elements
                    # namespaces are annoying in xml.etree, so we can ignore them or handle them.
                    # ignoring namespaces for simplicity in this hacky script
                    
                    text_content = []
                    for elem in root.iter():
                        # check if tag ends with 't' (text) and usually is part of main body
                        # exact tag is usually {http://schemas.openxmlformats.org/drawingml/2006/main}t
                        if elem.tag.endswith('}t'):
                            if elem.text:
                                text_content.append(elem.text)
                    
                    print("\n".join(text_content))
                    print("\n")
                    
    except Exception as e:
        print(f"Error reading pptx: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 extract_pptx.py <path_to_pptx>")
    else:
        extract_text_from_pptx(sys.argv[1])
