export function formatTime(date: string): string {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    // Pad single digit minutes with leading zero
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
}
