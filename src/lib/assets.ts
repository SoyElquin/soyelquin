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
      "/assets/avatars/avatar-3.webp",
      "/assets/avatars/avatar-4.webp"
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
    "/assets/work/work-card-1.jpg",
    "/assets/work/work-card-2.jpg",
    "/assets/work/work-card-3.jpg",
    "/assets/work/work-card-4.jpg",
    "/assets/work/work-card-5.jpg",
    "/assets/work/work-card-6.jpg",
    "/assets/work/work-card-7.jpg",
    "/assets/work/work-card-8.jpg",
    "/assets/work/work-card-9.jpg"
  ]
} as const;

export type AssetRegistry = typeof assets;
