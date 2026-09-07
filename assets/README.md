# Original Vicxos artwork

- `vicxos-original.jpeg`: unchanged uploaded 1D4CE735-DF46-45AA-8A99-6D3B795CA226.jpeg.
- `vicxos-logo.png`: crop (20, 175, 1220, 995) of the 1254 × 1254 source with the black matte removed using an alpha channel. No generated artwork or reshaping. For each source pixel, alpha = min(1, max(R,G,B)/80), quantized to 8 bits, and RGB is divided by that alpha. Bright pixels remain opaque and unchanged; dark glow becomes translucent. Recomposition on black reproduces the source within one channel value (8-bit rounding). Lettering, X, ring and slogan geometry are unchanged.
- `vicxos-mark.png`: original X crop (576, 476, 806, 650), centered on a 230 × 230 black canvas without redrawing.
- `favicon.ico`: 16, 32 and 48 pixel renditions of that crop.

Coordinates use Pillow's left, top, right, bottom convention. Keep artwork unfiltered and proportional.
