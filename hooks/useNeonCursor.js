import { useEffect } from 'react';
import { neonCursor } from 'threejs-toys';

const useNeonCursor = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'neon-cursor-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const initNeonCursor = () => {
      neonCursor({
        el: document.body,
        canvas: document.getElementById('neon-cursor-canvas'),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025
      });
    };

    initNeonCursor();

    return () => {
      // Clean up any resources if needed
    };
  }, []);
};

export default useNeonCursor;
