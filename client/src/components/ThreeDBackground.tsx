import { useEffect, useRef } from 'react';

export default function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create SVG with 3D effect
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 1000 1000');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.style.position = 'absolute';
    svg.style.inset = '0';
    svg.style.zIndex = '0';

    // Create gradient defs
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    const gradient1 = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient1.setAttribute('id', 'grad1');
    gradient1.setAttribute('x1', '0%');
    gradient1.setAttribute('y1', '0%');
    gradient1.setAttribute('x2', '100%');
    gradient1.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', 'stop-color:rgb(239,246,255);stop-opacity:1'); // blue-50
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', 'stop-color:rgb(224,242,254);stop-opacity:0.6'); // sky-100
    
    gradient1.appendChild(stop1);
    gradient1.appendChild(stop2);
    defs.appendChild(gradient1);
    svg.appendChild(defs);

    // Create 3D cubes
    const createCube = (x: number, y: number, size: number, delay: number) => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('transform', `translate(${x}, ${y})`);

      // Front face
      const front = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      front.setAttribute('width', String(size));
      front.setAttribute('height', String(size));
      front.setAttribute('fill', 'url(#grad1)');
      front.setAttribute('stroke', 'rgba(59, 130, 246, 0.2)');
      front.setAttribute('stroke-width', '1');

      // Top face (3D effect)
      const top = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      top.setAttribute('points', `0,0 ${size * 0.3},${-size * 0.3} ${size + size * 0.3},${-size * 0.3} ${size},0`);
      top.setAttribute('fill', 'rgba(248, 250, 252, 0.9)'); // slate-50
      top.setAttribute('stroke', 'rgba(59, 130, 246, 0.2)');
      top.setAttribute('stroke-width', '1');

      // Right face (3D effect)
      const right = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      right.setAttribute('points', `${size},0 ${size + size * 0.3},${-size * 0.3} ${size + size * 0.3},${size - size * 0.3} ${size},${size}`);
      right.setAttribute('fill', 'rgba(241, 245, 249, 0.8)'); // slate-100
      right.setAttribute('stroke', 'rgba(59, 130, 246, 0.2)');
      right.setAttribute('stroke-width', '1');

      group.appendChild(front);
      group.appendChild(top);
      group.appendChild(right);

      // Add animation
      group.style.animation = `float 6s ease-in-out ${delay}s infinite`;

      return group;
    };

    // Add multiple cubes
    for (let i = 0; i < 6; i++) {
      const x = Math.random() * 800;
      const y = Math.random() * 800;
      const size = Math.random() * 80 + 40;
      const delay = i * 0.5;
      svg.appendChild(createCube(x, y, size, delay));
    }

    // Add lines for tech feel
    for (let i = 0; i < 8; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', String(Math.random() * 1000));
      line.setAttribute('y1', String(Math.random() * 1000));
      line.setAttribute('x2', String(Math.random() * 1000));
      line.setAttribute('y2', String(Math.random() * 1000));
      line.setAttribute('stroke', `rgba(59, 130, 246, ${Math.random() * 0.15 + 0.05})`);
      line.setAttribute('stroke-width', '1');
      svg.appendChild(line);
    }

    container.appendChild(svg);

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotateX(0deg) rotateY(0deg);
        }
        50% {
          transform: translateY(-30px) rotateX(10deg) rotateY(10deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (svg.parentNode) {
        svg.parentNode.removeChild(svg);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}
