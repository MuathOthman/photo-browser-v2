export const thumbUrl = (id) => `https://picsum.photos/seed/photo-${id}/400/300`;
export const fullUrl = (id) => `https://picsum.photos/seed/photo-${id}/1200/800`;
export const albumCoverUrl = (albumId, width = 400, height = 300) =>
    `https://picsum.photos/seed/album-${albumId}/${width}/${height}`;