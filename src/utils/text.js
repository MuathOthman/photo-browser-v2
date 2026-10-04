export const initials = (name) => {
    const words = name.split(' ').filter((word) => !word.endsWith('.'));
    const first = words[0][0];
    const last = words[words.length - 1][0];
    return (first + last).toUpperCase();
};