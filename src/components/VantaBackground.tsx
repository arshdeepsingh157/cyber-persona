declare global {
  interface Window {
    VANTA: any;
  }
}

import { useEffect, useRef } from "react";

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;

    function loadScript(src: string) {
      return new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    }

    async function initVanta() {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");
      // Debug log to check if scripts loaded
      console.log("VANTA:", window.VANTA, "THREE:", (window as any).THREE);
      if (window.VANTA && window.VANTA.NET && vantaRef.current) {
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x465e37,
          backgroundColor: 0x0
        });
      } else {
        console.warn("VANTA or VANTA.NET not available after scripts loaded");
      }
    }

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ position: "fixed", inset: 0, zIndex: 0 }} />;
}
