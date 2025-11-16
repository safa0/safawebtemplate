#!/usr/bin/env python3
"""
Convert FlowForce logo to monochrome SVG
Creates a clean vector version of the network/flow diagram logo
"""

import math

def create_flowforce_logo_svg(output_file='public/logo.svg', size=512):
    """
    Create a monochrome SVG version of the FlowForce logo
    Pattern: Radial network with center node and outer nodes connected by lines
    """

    # SVG parameters
    center = size / 2

    # Network parameters
    num_branches = 8  # 8 radiating branches
    outer_radius = size * 0.4  # Distance to outer nodes
    node_radius_outer = size * 0.06  # Outer node size
    node_radius_center = size * 0.05  # Center node size
    node_radius_mid = size * 0.045  # Middle node size
    line_width = size * 0.025  # Connection line width

    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo-line {{ stroke: #000000; stroke-width: {line_width}; stroke-linecap: round; }}
      .logo-node {{ fill: #000000; }}
    </style>
  </defs>

  <g id="flowforce-logo">
'''

    # Draw branches (lines and nodes)
    for i in range(num_branches):
        angle = (2 * math.pi * i) / num_branches

        # Calculate positions for each branch
        # Outer node
        outer_x = center + outer_radius * math.cos(angle)
        outer_y = center + outer_radius * math.sin(angle)

        # Middle node (2/3 of the way out)
        mid_x = center + (outer_radius * 0.66) * math.cos(angle)
        mid_y = center + (outer_radius * 0.66) * math.sin(angle)

        # Inner node (1/3 of the way out)
        inner_x = center + (outer_radius * 0.33) * math.cos(angle)
        inner_y = center + (outer_radius * 0.33) * math.sin(angle)

        # Draw line from center to outer node
        svg_content += f'''    <!-- Branch {i + 1} -->
    <line x1="{center}" y1="{center}" x2="{outer_x}" y2="{outer_y}" class="logo-line"/>
'''

        # Draw nodes along the branch
        svg_content += f'''    <circle cx="{outer_x}" cy="{outer_y}" r="{node_radius_outer}" class="logo-node"/>
    <circle cx="{mid_x}" cy="{mid_y}" r="{node_radius_mid}" class="logo-node"/>
    <circle cx="{inner_x}" cy="{inner_y}" r="{node_radius_mid}" class="logo-node"/>
'''

    # Draw center node (larger)
    svg_content += f'''
    <!-- Center node -->
    <circle cx="{center}" cy="{center}" r="{node_radius_center}" class="logo-node"/>
  </g>
</svg>'''

    # Write to file
    with open(output_file, 'w') as f:
        f.write(svg_content)

    print(f"✅ SVG logo created: {output_file}")
    print(f"📏 Size: {size}x{size}px")
    print(f"🎨 Style: Monochrome black")
    print(f"📦 Format: Clean vector SVG")

if __name__ == "__main__":
    create_flowforce_logo_svg()
    print("\n✨ Logo conversion complete!")
