#!/usr/bin/env python3
"""
Selenium script to capture screenshots of the website at different viewport sizes.
This helps evaluate the current responsive design and track improvements.
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
from datetime import datetime

# Configuration
BASE_URL = "https://safawebtemplate.vercel.app"
OUTPUT_DIR = "screenshots"
TIMESTAMP = datetime.now().strftime("%Y%m%d_%H%M%S")

# Viewport configurations
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900, "name": "desktop-1440x900"},
    "tablet": {"width": 834, "height": 1112, "name": "tablet-834x1112"},
    "mobile": {"width": 390, "height": 844, "name": "mobile-390x844"},
}

# Pages to capture
PAGES = [
    {"url": "/", "name": "home"},
    {"url": "/about", "name": "about"},
    {"url": "/solutions", "name": "solutions"},
    {"url": "/industries", "name": "industries"},
    {"url": "/how-we-work", "name": "how-we-work"},
    {"url": "/why-automate", "name": "why-automate"},
    {"url": "/blog", "name": "blog"},
    {"url": "/contact", "name": "contact"},
]


def setup_driver():
    """Setup Chrome WebDriver with options"""
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")

    driver = webdriver.Chrome(options=chrome_options)
    return driver


def capture_screenshot(driver, url, viewport_name, page_name, scroll_positions=None):
    """Capture screenshot at a specific viewport size"""

    # Navigate to the page
    full_url = f"{BASE_URL}{url}"
    print(f"  Loading: {full_url}")
    driver.get(full_url)

    # Wait for page to load
    time.sleep(3)  # Initial load wait

    # Wait for specific elements to ensure page is rendered
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "main"))
        )
    except:
        pass  # Continue even if main tag not found

    # Additional wait for animations
    time.sleep(2)

    # Create output directory structure
    output_path = os.path.join(OUTPUT_DIR, TIMESTAMP, viewport_name)
    os.makedirs(output_path, exist_ok=True)

    # Capture full page screenshot
    screenshot_path = os.path.join(output_path, f"{page_name}.png")
    driver.save_screenshot(screenshot_path)
    print(f"  ✓ Captured: {screenshot_path}")

    # Capture additional scroll positions for long pages (optional)
    if scroll_positions:
        for i, position in enumerate(scroll_positions):
            driver.execute_script(f"window.scrollTo(0, {position});")
            time.sleep(1)
            scroll_screenshot_path = os.path.join(
                output_path, f"{page_name}_scroll_{i+1}.png"
            )
            driver.save_screenshot(scroll_screenshot_path)
            print(f"  ✓ Captured scroll position {i+1}: {scroll_screenshot_path}")

    # Scroll back to top
    driver.execute_script("window.scrollTo(0, 0);")


def main():
    """Main execution function"""
    print("=" * 70)
    print("RESPONSIVE SCREENSHOT CAPTURE")
    print("=" * 70)
    print(f"Base URL: {BASE_URL}")
    print(f"Output Directory: {OUTPUT_DIR}/{TIMESTAMP}")
    print(f"Viewports: {len(VIEWPORTS)}")
    print(f"Pages: {len(PAGES)}")
    print("=" * 70)

    driver = setup_driver()

    try:
        for viewport_key, viewport_config in VIEWPORTS.items():
            print(f"\n{'='*70}")
            print(f"Viewport: {viewport_config['name']} ({viewport_config['width']}x{viewport_config['height']})")
            print(f"{'='*70}")

            # Set window size
            driver.set_window_size(viewport_config["width"], viewport_config["height"])

            for page in PAGES:
                print(f"\nCapturing: {page['name']}")

                # Define scroll positions for long pages
                scroll_positions = None
                if page["name"] in ["home", "about", "solutions"]:
                    # Capture additional scroll positions for long pages
                    scroll_positions = [1000, 2000, 3000]

                capture_screenshot(
                    driver,
                    page["url"],
                    viewport_config["name"],
                    page["name"],
                    scroll_positions
                )

        print(f"\n{'='*70}")
        print("✓ All screenshots captured successfully!")
        print(f"Location: {OUTPUT_DIR}/{TIMESTAMP}")
        print(f"{'='*70}\n")

    except Exception as e:
        print(f"\n✗ Error occurred: {str(e)}")
        import traceback
        traceback.print_exc()

    finally:
        driver.quit()


if __name__ == "__main__":
    main()
