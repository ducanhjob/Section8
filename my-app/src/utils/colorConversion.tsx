export interface RGB {
    r: number;
    g: number;
    b: number;
  }
  
  export interface HSB {
    hue: number;
    saturation: number;
    brightness: number;
  }
  
  export function hsbToRgb({ hue, saturation, brightness }: HSB): RGB {
    const chroma = brightness * saturation;
    const huePrime = hue / 60;
    const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
    let r = 0, g = 0, b = 0;
  
    if (huePrime >= 0 && huePrime <= 1) {
      r = chroma;
      g = x;
    } else if (huePrime > 1 && huePrime <= 2) {
      r = x;
      g = chroma;
    } else if (huePrime > 2 && huePrime <= 3) {
      g = chroma;
      b = x;
    } else if (huePrime > 3 && huePrime <= 4) {
      g = x;
      b = chroma;
    } else if (huePrime > 4 && huePrime <= 5) {
      r = x;
      b = chroma;
    } else if (huePrime > 5 && huePrime <= 6) {
      r = chroma;
      b = x;
    }
  
    const m = brightness - chroma;
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return { r, g, b };
  }
  
  export function rgbToHsb({ r, g, b }: RGB): HSB {
    const rPercent = r / 255;
    const gPercent = g / 255;
    const bPercent = b / 255;
  
    const max = Math.max(rPercent, gPercent, bPercent);
    const min = Math.min(rPercent, gPercent, bPercent);
    const delta = max - min;
  
    let hue = 0;
    if (delta !== 0) {
      if (max === rPercent) {
        hue = ((gPercent - bPercent) / delta) % 6;
      } else if (max === gPercent) {
        hue = (bPercent - rPercent) / delta + 2;
      } else {
        hue = (rPercent - gPercent) / delta + 4;
      }
    }
  
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  
    const brightness = max;
    const saturation = max === 0 ? 0 : delta / max;
  
    return {
      hue,
      saturation,
      brightness,
    };
  }
  
  export function hexToRgb(hex: string): RGB {
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map((char) => char + char).join('');
    }
    const bigint = parseInt(cleanHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    return { r, g, b };
  }
  
  export function rgbToHex({ r, g, b }: RGB): string {
    return (
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
        .toUpperCase()
    );
  }
  