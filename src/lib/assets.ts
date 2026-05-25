export const assets = {
  portraits: {
    headStackFade: "/assets/portraits/elquin-head-stack-fade.webp",
    headStackOriginal: "/assets/portraits/elquin-head-stack-original.webp",
    sideNeonFade: "/assets/portraits/elquin-side-neon-fade.webp",
    sideNeonOriginal: "/assets/portraits/elquin-side-neon-original.webp"
  },
  objects: {
    asterisk: "/assets/objects/orange-asterisk-3d.webp",
    smileOrb: "/assets/objects/orange-smile-orb.webp"
  },
  avatars: {
    me: "/assets/avatars/my-avatar-2.webp",
    clients: [
      "/assets/avatars/avatar-1.webp",
      "/assets/avatars/avatar-2.webp",
      "/assets/avatars/avatar-3.webp"
    ]
  },
  system: {
    faviconIco: "/favicon.ico",
    iconPng: "/apple-icon.png",
    appleIcon: "/apple-icon.png",
    mesh: "/assets/system/mesh.svg",
    noise: "/assets/system/noise.svg",
    orbitalRing: "/assets/system/orbital-ring.svg",
    haloMap: "/assets/system/orange-halo-map.png"
  },
  work: [
    "/assets/portadas/portada1.webp",
    "/assets/portadas/portada2.webp",
    "/assets/portadas/portada3.webp",
    "/assets/portadas/portada4.webp",
    "/assets/portadas/portada5.webp",
    "/assets/portadas/portada6.webp"
  ]
} as const;

export type AssetRegistry = typeof assets;
