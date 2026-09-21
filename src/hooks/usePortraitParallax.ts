import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  maxTilt?: number; // degrees (default: 4)
  maxShift?: number; // pixels (default: 6)
  lerp?: number; // interpolation factor (default: 0.08)
  enabled?: boolean;
}

export function usePortraitParallax<T extends HTMLElement>(options: ParallaxOptions = {}) {
  const containerRef = useRef<T | null>(null);
  const { maxTilt = 4, maxShift = 6, lerp = 0.08, enabled = true } = options;

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !enabled) return;

    // Check accessibility & device capabilities
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isMobileViewport = window.innerWidth < 992;

    if (prefersReducedMotion || isTouchDevice || isMobileViewport) {
      return;
    }

    let targetTiltX = 0;
    let targetTiltY = 0;
    let targetShiftX = 0;
    let targetShiftY = 0;

    let currentTiltX = 0;
    let currentTiltY = 0;
    let currentShiftX = 0;
    let currentShiftY = 0;

    let animationFrameId: number | null = null;
    let isRunning = false;

    const updateTransforms = () => {
      // Smooth linear interpolation (lerp)
      currentTiltX += (targetTiltX - currentTiltX) * lerp;
      currentTiltY += (targetTiltY - currentTiltY) * lerp;
      currentShiftX += (targetShiftX - currentShiftX) * lerp;
      currentShiftY += (targetShiftY - currentShiftY) * lerp;

      // Apply to CSS variables on container
      element.style.setProperty('--tilt-x', `${currentTiltX.toFixed(3)}deg`);
      element.style.setProperty('--tilt-y', `${currentTiltY.toFixed(3)}deg`);
      element.style.setProperty('--shift-x', `${currentShiftX.toFixed(2)}px`);
      element.style.setProperty('--shift-y', `${currentShiftY.toFixed(2)}px`);

      // Check if settled (within threshold) to save CPU
      const isSettled =
        Math.abs(targetTiltX - currentTiltX) < 0.01 &&
        Math.abs(targetTiltY - currentTiltY) < 0.01 &&
        Math.abs(targetShiftX - currentShiftX) < 0.01 &&
        Math.abs(targetShiftY - currentShiftY) < 0.01;

      if (!isSettled) {
        animationFrameId = requestAnimationFrame(updateTransforms);
      } else {
        isRunning = false;
        animationFrameId = null;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateTransforms);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized offset from center [-1, 1]
      const normalX = (e.clientX - centerX) / (rect.width / 2);
      const normalY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp between -1 and 1
      const clampedX = Math.max(-1, Math.min(1, normalX));
      const clampedY = Math.max(-1, Math.min(1, normalY));

      // Calculate 3D tilt: mouse moving down (positive Y) rotates around X negatively
      targetTiltX = -clampedY * maxTilt;
      targetTiltY = clampedX * maxTilt;
      targetShiftX = clampedX * maxShift;
      targetShiftY = clampedY * maxShift;

      // Dynamic light reflection coordinates (percentage)
      const glowX = ((normalX + 1) / 2) * 100;
      const glowY = ((normalY + 1) / 2) * 100;
      element.style.setProperty('--mouse-glow-x', `${glowX.toFixed(1)}%`);
      element.style.setProperty('--mouse-glow-y', `${glowY.toFixed(1)}%`);

      startAnimation();
    };

    const handleMouseLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
      targetShiftX = 0;
      targetShiftY = 0;
      startAnimation();
    };

    // Attach listeners to container
    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [maxTilt, maxShift, lerp, enabled]);

  return containerRef;
}
